#!/usr/bin/env python3
"""
Burnt Thumb Works — Lead Prep & Domain Availability Check (Stdlib Only)
Cleans/deduplicates raw lead CSVs, performs read-only DNS/WHOIS availability checks
on target .com domains (never registers anything), and scaffolds starter prospect JSONs.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import socket
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PROSPECTS_DIR = REPO_ROOT / "tools" / "web_builds" / "prospects"


def slugify(text: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")
    return s[:48] or "lead"


def check_domain_readonly(domain: str) -> str:
    """Read-only DNS + WHOIS port 43 check. Never modifies or registers anything."""
    d = (domain or "").strip().lower()
    if not d or "." not in d:
        return "invalid"
    if d.endswith(".example"):
        return "example-placeholder"
    try:
        socket.getaddrinfo(d, 80, proto=socket.IPPROTO_TCP)
        return "taken_dns"
    except socket.gaierror:
        pass
    if d.endswith(".com"):
        try:
            with socket.create_connection(("whois.verisign-grs.com", 43), timeout=4) as sock:
                sock.sendall(f"{d}\r\n".encode("ascii"))
                chunks = []
                while True:
                    data = sock.recv(4096)
                    if not data:
                        break
                    chunks.append(data)
            resp = b"".join(chunks).decode("utf-8", errors="ignore")
            if "No match for" in resp:
                return "likely_available"
            return "taken_whois"
        except OSError:
            return "whois_timeout"
    return "no_dns_check_whois_manually"


def scaffold_prospect(row: dict, check_dns: bool) -> dict:
    biz = (row.get("business_name") or "").strip()
    trade = (row.get("trade") or "Local Services").strip()
    city = (row.get("city_state") or "").strip()
    phone = (row.get("phone") or "").strip()
    email = (row.get("email") or "").strip()
    domain = (row.get("domain") or f"{slugify(biz).replace('-', '')}.com").strip().lower()
    lang = (row.get("lang") or "en").strip().lower()
    if lang not in {"en", "es", "bilingual"}:
        lang = "en"

    domain_status = check_domain_readonly(domain) if check_dns else "unchecked"

    return {
        "slug": slugify(biz),
        "lang": lang,
        "accentColor": "#2E6B3E",
        "businessName": biz,
        "businessNameEs": biz,
        "tradeCategory": trade,
        "tradeCategoryEs": trade,
        "tagline": f"Dependable {trade.lower()} serving {city}.",
        "taglineEs": f"Servicio confiable de {trade.lower()} en {city}.",
        "phoneDisplay": phone,
        "phoneRaw": re.sub(r"[^\d+]", "", phone),
        "email": email,
        "cityState": city,
        "yearsInBusiness": "Local & Experienced",
        "yearsInBusinessEs": "Experiencia Local",
        "licenseBadge": "Licensed & Insured",
        "licenseBadgeEs": "Con Licencia y Seguro",
        "hours": "Mon–Sat · 7:00 AM – 6:00 PM",
        "hoursEs": "Lun–Sáb · 7:00 AM – 6:00 PM",
        "ctaText": "Call or Text for a Free Estimate",
        "ctaTextEs": "Llame o Envíe Texto para Presupuesto",
        "domain": domain,
        "domainStatus": domain_status,
        "services": [
            {
                "title": f"{trade} — Core Service",
                "titleEs": f"{trade} — Servicio Principal",
                "description": f"Fast, clean {trade.lower()} for homes and small businesses in {city}.",
                "descriptionEs": f"Trabajo rápido y limpio de {trade.lower()} en {city}.",
                "badge": "Core",
                "badgeEs": "Principal",
            }
        ],
        "reviews": [],
        "serviceAreas": [city] if city else [],
        "photos": [],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Clean lead CSV, check .com availability, scaffold prospect JSONs.")
    parser.add_argument("--csv", type=Path, default=PROSPECTS_DIR / "leads.example.csv", help="Input lead CSV")
    parser.add_argument("--check-dns", action="store_true", help="Perform read-only DNS/WHOIS checks")
    parser.add_argument("--write-json", action="store_true", help="Write starter JSONs to prospects/<slug>.json")
    args = parser.parse_args()

    if not args.csv.exists():
        print(f"ERROR: CSV not found: {args.csv}")
        return 1

    seen_keys: set[str] = set()
    cleaned: list[dict] = []
    with args.csv.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            biz = (row.get("business_name") or "").strip()
            email = (row.get("email") or "").strip().lower()
            phone = re.sub(r"\D", "", row.get("phone") or "")
            if not biz:
                continue
            dedupe_key = f"{biz.lower()}|{email or phone}"
            if dedupe_key in seen_keys:
                continue
            seen_keys.add(dedupe_key)
            cleaned.append(row)

    print(f"Loaded {len(cleaned)} unique leads from {args.csv.name}")
    for row in cleaned:
        prospect = scaffold_prospect(row, check_dns=args.check_dns)
        slug = prospect["slug"]
        print(f"  - {slug}: domain={prospect['domain']} ({prospect['domainStatus']})")
        if args.write_json:
            out_path = PROSPECTS_DIR / f"{slug}.json"
            if out_path.exists():
                print(f"    skipped (already exists): {out_path.name}")
            else:
                out_path.write_text(json.dumps(prospect, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
                print(f"    wrote: {out_path.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
