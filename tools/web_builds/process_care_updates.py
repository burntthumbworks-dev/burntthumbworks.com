#!/usr/bin/env python3
"""
Burnt Thumb Works — Automated Care Plan Update Processor (Stdlib Only)
Validates sender against active_clients.json, enforces the 5-photos/month cap,
strips image EXIF metadata, updates ONLY allowed fields (hours, phone, services,
service_areas, photos), rebuilds via build_preview.py --mode prod, and flags
out-of-scope requests for Director review.
"""

from __future__ import annotations

import argparse
import json
import shutil
import struct
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
CLIENTS_DIR = REPO_ROOT / "tools" / "web_builds" / "clients"
PROSPECTS_DIR = REPO_ROOT / "tools" / "web_builds" / "prospects"
PREVIEWS_DIR = REPO_ROOT / "web-builds" / "previews"

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_preview  # noqa: E402

ALLOWED_FIELDS = {"hours", "hoursEs", "phone", "phoneDisplay", "phoneRaw", "services", "service_areas", "photos"}
OUT_OF_SCOPE_KEYWORDS = {"redesign", "new_page", "ecommerce", "booking", "database", "logo", "ads", "rush", "password"}
MAX_PHOTOS_PER_MONTH = 5


def strip_jpeg_metadata(data: bytes) -> bytes:
    """Remove APP1-APP15 (EXIF/XMP/IPTC) and COM markers from JPEG bytes."""
    if not data.startswith(b"\xff\xd8"):
        return data
    out = bytearray(b"\xff\xd8")
    i = 2
    n = len(data)
    while i < n:
        if data[i] != 0xFF:
            out.extend(data[i:])
            break
        while i < n and data[i] == 0xFF:
            i += 1
        if i >= n:
            break
        marker = data[i]
        i += 1
        if marker == 0xDA:  # Start of Scan — copy rest of image stream verbatim
            out.extend(b"\xff\xda")
            out.extend(data[i:])
            break
        if marker in (0xD8, 0xD9) or (0xD0 <= marker <= 0xD7) or marker == 0x01:
            out.extend(bytes([0xFF, marker]))
            continue
        if i + 2 > n:
            break
        seg_len = struct.unpack(">H", data[i : i + 2])[0]
        seg_end = i + seg_len
        # Keep APP0 (JFIF, 0xE0); drop APP1..APP15 (0xE1..0xEF) and COM (0xFE)
        if not (0xE1 <= marker <= 0xEF or marker == 0xFE):
            out.extend(bytes([0xFF, marker]))
            out.extend(data[i:seg_end])
        i = seg_end
    return bytes(out)


def strip_png_metadata(data: bytes) -> bytes:
    """Remove eXIf, tEXt, zTXt, iTXt, tIME chunks from PNG bytes."""
    sig = b"\x89PNG\r\n\x1a\n"
    if not data.startswith(sig):
        return data
    out = bytearray(sig)
    i = 8
    n = len(data)
    drop_types = {b"eXIf", b"tEXt", b"zTXt", b"iTXt", b"tIME"}
    while i + 12 <= n:
        length = struct.unpack(">I", data[i : i + 4])[0]
        ctype = data[i + 4 : i + 8]
        chunk_end = i + 12 + length
        if chunk_end > n:
            break
        if ctype not in drop_types:
            out.extend(data[i:chunk_end])
        i = chunk_end
        if ctype == b"IEND":
            break
    return bytes(out)


def strip_image_exif(src: Path, dst: Path) -> None:
    raw = src.read_bytes()
    ext = src.suffix.lower()
    if ext in {".jpg", ".jpeg"}:
        cleaned = strip_jpeg_metadata(raw)
    elif ext == ".png":
        cleaned = strip_png_metadata(raw)
    else:
        cleaned = raw
    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_bytes(cleaned)


def process_request(request_path: Path, clients_path: Path, out_root: Path | None = None) -> int:
    req = json.loads(request_path.read_text(encoding="utf-8"))
    sender = (req.get("sender_email") or "").strip().lower()
    slug = build_preview.validate_slug(req.get("slug", ""))
    updates = req.get("updates") or {}

    # Flag out-of-scope requests immediately
    flagged = []
    for k in updates:
        if k not in ALLOWED_FIELDS:
            flagged.append(f"Disallowed field: {k}")
    notes = str(req.get("notes", "")).lower()
    for kw in OUT_OF_SCOPE_KEYWORDS:
        if kw in notes:
            flagged.append(f"Out-of-scope keyword in notes: {kw}")
    if flagged:
        print("DIRECTOR_REVIEW_REQUIRED:")
        for item in flagged:
            print(f"  - {item}")
        return 2

    registry = json.loads(clients_path.read_text(encoding="utf-8"))
    client = next((c for c in registry.get("clients", []) if c.get("slug") == slug), None)
    if not client or client.get("status") != "active":
        print(f"ERROR: Client '{slug}' is not active in {clients_path.name}")
        return 1

    authorized = {e.strip().lower() for e in client.get("authorized_emails", [])}
    if sender not in authorized:
        print(f"ERROR: Unauthorized sender '{sender}' for client '{slug}'")
        return 1

    current_month = datetime.now(timezone.utc).strftime("%Y-%m")
    if client.get("last_reset_month") != current_month:
        client["photos_used_this_month"] = 0
        client["last_reset_month"] = current_month

    prospect_path = PROSPECTS_DIR / f"{slug}.json"
    if not prospect_path.exists():
        print(f"ERROR: Prospect JSON not found: {prospect_path}")
        return 1

    cfg = json.loads(prospect_path.read_text(encoding="utf-8"))

    # Enforce 5 photos/month cap & strip EXIF
    new_photos = updates.get("photos")
    if isinstance(new_photos, list):
        used = int(client.get("photos_used_this_month", 0))
        if used + len(new_photos) > MAX_PHOTOS_PER_MONTH:
            print(
                f"ERROR: Photo cap exceeded ({used} used + {len(new_photos)} requested > {MAX_PHOTOS_PER_MONTH}/month)."
            )
            return 1
        target_dir = out_root or (PREVIEWS_DIR / slug)
        assets_dir = target_dir / "assets"
        processed_photos = []
        for idx, photo in enumerate(new_photos, start=1):
            src = Path(photo.get("local_path", ""))
            if not src.exists():
                print(f"ERROR: Photo file not found: {src}")
                return 1
            dst_name = f"job-{current_month}-{used + idx}{src.suffix.lower()}"
            strip_image_exif(src, assets_dir / dst_name)
            processed_photos.append({
                "src": f"assets/{dst_name}",
                "alt": str(photo.get("alt") or cfg.get("businessName", "Job photo")),
                "width": int(photo.get("width", 800)),
                "height": int(photo.get("height", 600)),
            })
        cfg["photos"] = (cfg.get("photos") or []) + processed_photos
        client["photos_used_this_month"] = used + len(new_photos)

    # Apply remaining allowed fields
    if "hours" in updates:
        cfg["hours"] = str(updates["hours"])
    if "hoursEs" in updates:
        cfg["hoursEs"] = str(updates["hoursEs"])
    if "phone" in updates:
        cfg["phoneDisplay"] = str(updates["phone"])
        cfg["phoneRaw"] = build_preview.validate_phone(str(updates["phone"]))
    if "phoneDisplay" in updates:
        cfg["phoneDisplay"] = str(updates["phoneDisplay"])
    if "phoneRaw" in updates:
        cfg["phoneRaw"] = build_preview.validate_phone(str(updates["phoneRaw"]))
    if "services" in updates and isinstance(updates["services"], list):
        cfg["services"] = updates["services"]
    if "service_areas" in updates and isinstance(updates["service_areas"], list):
        cfg["serviceAreas"] = [str(a) for a in updates["service_areas"]]

    prospect_path.write_text(json.dumps(cfg, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    clients_path.write_text(json.dumps(registry, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    out_dir = out_root or (PREVIEWS_DIR / slug)
    build_preview.build_site(prospect_path, out_dir, mode="prod")
    print(f"Updated '{slug}' and rebuilt production site at {out_dir}")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Process Care Plan update JSON for an active client.")
    parser.add_argument("--request", type=Path, required=True, help="Path to update request JSON")
    parser.add_argument(
        "--clients",
        type=Path,
        default=CLIENTS_DIR / "active_clients.json",
        help="Path to active_clients.json",
    )
    parser.add_argument("--out", type=Path, help="Optional output directory override")
    args = parser.parse_args()
    return process_request(args.request, args.clients, args.out)


if __name__ == "__main__":
    raise SystemExit(main())
