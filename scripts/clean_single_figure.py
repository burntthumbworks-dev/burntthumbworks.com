#!/usr/bin/env python3
"""
Burnt Thumb Works — Single-Figure Alpha-Island Cleaner (Pillow)
Finds 8-connected alpha islands (alpha > threshold) in RGBA PNGs,
keeps ONLY the single largest connected island, zeroes out edge bleed
and neighboring sprite fragments, re-trims the bounding box cleanly,
and saves optimized PNGs.
"""

from __future__ import annotations

import argparse
from collections import deque
from pathlib import Path
from PIL import Image

REPO_ROOT = Path(__file__).resolve().parents[1]
ASSET_DIRS = [
    REPO_ROOT / "assets" / "manuscript" / "games",
    REPO_ROOT / "assets" / "manuscript" / "apps",
    REPO_ROOT / "assets" / "manuscript" / "ornaments",
]


def clean_image(path: Path, alpha_threshold: int = 12, dry_run: bool = False) -> tuple[tuple[int, int], tuple[int, int], int]:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    alpha = im.getchannel("A").tobytes()

    visited = bytearray(w * h)
    islands: list[list[int]] = []

    for idx in range(w * h):
        if visited[idx] or alpha[idx] <= alpha_threshold:
            continue
        q = deque([idx])
        visited[idx] = 1
        comp = [idx]
        while q:
            cur = q.popleft()
            cy, cx = divmod(cur, w)
            for dy in (-1, 0, 1):
                ny = cy + dy
                if ny < 0 or ny >= h:
                    continue
                row_off = ny * w
                for dx in (-1, 0, 1):
                    if dx == 0 and dy == 0:
                        continue
                    nx = cx + dx
                    if 0 <= nx < w:
                        nidx = row_off + nx
                        if not visited[nidx] and alpha[nidx] > alpha_threshold:
                            visited[nidx] = 1
                            q.append(nidx)
                            comp.append(nidx)
        islands.append(comp)

    if not islands:
        return (w, h), (w, h), 0

    largest = max(islands, key=len)
    keep_mask = bytearray(w * h)
    for idx in largest:
        keep_mask[idx] = 1

    # Also keep soft anti-aliased fringe pixels (1 <= alpha <= threshold) adjacent to kept pixels
    fringe = []
    for idx in largest:
        cy, cx = divmod(idx, w)
        for dy in (-1, 0, 1):
            ny = cy + dy
            if 0 <= ny < h:
                row_off = ny * w
                for dx in (-1, 0, 1):
                    nx = cx + dx
                    if 0 <= nx < w:
                        nidx = row_off + nx
                        if not keep_mask[nidx] and alpha[nidx] > 0:
                            fringe.append(nidx)
    for idx in fringe:
        keep_mask[idx] = 1

    px = list(im.getdata())
    cleaned_px = [
        px[i] if keep_mask[i] else (0, 0, 0, 0)
        for i in range(w * h)
    ]
    out_im = Image.new("RGBA", (w, h))
    out_im.putdata(cleaned_px)

    bbox = out_im.getbbox()
    if bbox:
        out_im = out_im.crop(bbox)
    new_size = out_im.size

    if not dry_run:
        out_im.save(path, optimize=True)

    return (w, h), new_size, len(islands)


def main() -> int:
    parser = argparse.ArgumentParser(description="Clean PNGs to a single largest connected alpha island.")
    parser.add_argument("--dry-run", action="store_true", help="Inspect only without writing files")
    parser.add_argument("--skip", nargs="*", default=["manuscript-border-ribbon.png"], help="Filenames to skip")
    args = parser.parse_args()

    skip_set = set(args.skip)
    for d in ASSET_DIRS:
        if not d.exists():
            continue
        print(f"=== {d.relative_to(REPO_ROOT)} ===")
        for p in sorted(d.glob("*.png")):
            if p.name in skip_set:
                im = Image.open(p)
                print(f"  [SKIP] {p.name}: {im.size[0]}x{im.size[1]} ({p.stat().st_size/1024:.1f} KB)")
                continue
            old_sz, new_sz, n_islands = clean_image(p, dry_run=args.dry_run)
            kb = p.stat().st_size / 1024
            print(
                f"  {p.name}: {old_sz[0]}x{old_sz[1]} -> {new_sz[0]}x{new_sz[1]} "
                f"(islands: {n_islands} -> 1, {kb:.1f} KB)"
            )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
