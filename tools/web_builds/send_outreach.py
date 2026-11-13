#!/usr/bin/env python3
"""
Burnt Thumb Works — Rate-Limited Async Outreach Sender (Stdlib Only)
Defaults to --dry-run. Reads SMTP credentials strictly from env vars:
  BTW_SMTP_HOST, BTW_SMTP_PORT, BTW_SMTP_USER, BTW_SMTP_PASS
Checks suppression.csv and sent_log.csv to prevent duplicates/opt-outs, and
includes CAN-SPAM mailing address + opt-out footer in EN and ES templates.
"""

from __future__ import annotations

import argparse
import csv
import os
import smtplib
import time
from datetime import datetime, timezone
from email.message import EmailMessage
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PROSPECTS_DIR = REPO_ROOT / "tools" / "web_builds" / "prospects"
SUPPRESSION_CSV = PROSPECTS_DIR / "suppression.csv"
SENT_LOG_CSV = PROSPECTS_DIR / "sent_log.csv"
DEFAULT_MAILING_ADDRESS = os.environ.get("BTW_MAILING_ADDRESS", "Burnt Thumb Works · Maryland, USA")


def load_email_set(path: Path) -> set[str]:
    if not path.exists():
        return set()
    emails: set[str] = set()
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        for row in csv.DictReader(f):
            em = (row.get("email") or "").strip().lower()
            if em:
                emails.add(em)
    return emails


def render_message(row: dict, mailing_address: str) -> tuple[str, str]:
    biz = (row.get("business_name") or "your business").strip()
    city = (row.get("city_state") or "your area").strip()
    lang = (row.get("lang") or "en").strip().lower()
    slug = biz.lower().replace(" ", "-")
    preview_url = f"https://burntthumbworks.com/web-builds/previews/{slug}/"

    if lang == "es":
        subject = f"Vista previa móvil lista para {biz}"
        body = (
            f"Hola equipo de {biz},\n\n"
            f"Notamos que {biz} en {city} todavía no tiene un sitio web rápido para móvil. "
            f"Preparamos una vista previa gratuita para que pueda ver cómo se vería en su teléfono:\n\n"
            f"{preview_url}\n\n"
            f"Si desea publicarlo en su propio dominio .com, el costo único es de $650 "
            f"(100% por adelantado antes del registro del dominio y lanzamiento; sin llamadas ni reuniones).\n\n"
            f"Responda a este correo si desea verlo o ajustarlo.\n\n"
            f"— Burnt Thumb Works\n"
            f"https://burntthumbworks.com/web-builds/\n\n"
            f"---\n"
            f"{mailing_address}\n"
            f"Para no recibir más mensajes, responda con 'BAJA' o 'OPT OUT'.\n"
        )
    else:
        subject = f"Built a quick mobile preview for {biz}"
        body = (
            f"Hi {biz} team,\n\n"
            f"We noticed {biz} in {city} doesn't have a fast mobile website linked yet. "
            f"Instead of pitching a phone call, we put together a live mobile preview you can check on your phone:\n\n"
            f"{preview_url}\n\n"
            f"If you want to take it live on your own .com domain, it's $650 flat "
            f"(paid 100% upfront before domain registration and launch; no calls or meetings required).\n\n"
            f"Reply here if you'd like any tweaks.\n\n"
            f"— Burnt Thumb Works\n"
            f"https://burntthumbworks.com/web-builds/\n\n"
            f"---\n"
            f"{mailing_address}\n"
            f"Reply with 'OPT OUT' at any time and we will never message again.\n"
        )
    return subject, body


def append_sent_log(email: str, business: str, status: str) -> None:
    is_new = not SENT_LOG_CSV.exists()
    with SENT_LOG_CSV.open("a", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        if is_new:
            writer.writerow(["timestamp_utc", "email", "business_name", "status"])
        writer.writerow([datetime.now(timezone.utc).isoformat(), email, business, status])


def main() -> int:
    parser = argparse.ArgumentParser(description="Rate-limited async outreach sender.")
    parser.add_argument("--csv", type=Path, default=PROSPECTS_DIR / "leads.example.csv", help="Leads CSV path")
    parser.add_argument("--send", action="store_true", help="Actually send emails via SMTP (default is dry-run)")
    parser.add_argument("--dry-run", action="store_true", help="Preview emails without sending (default)")
    parser.add_argument("--delay", type=int, default=45, help="Delay in seconds between sends (default: 45)")
    args = parser.parse_args()

    is_send = bool(args.send and not args.dry_run)
    if not args.csv.exists():
        print(f"ERROR: CSV not found: {args.csv}")
        return 1

    suppressed = load_email_set(SUPPRESSION_CSV)
    already_sent = load_email_set(SENT_LOG_CSV)

    with args.csv.open("r", encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))

    smtp_host = os.environ.get("BTW_SMTP_HOST", "")
    smtp_port = int(os.environ.get("BTW_SMTP_PORT", "587") or "587")
    smtp_user = os.environ.get("BTW_SMTP_USER", "")
    smtp_pass = os.environ.get("BTW_SMTP_PASS", "")

    if is_send and not all([smtp_host, smtp_user, smtp_pass]):
        print("ERROR: --send requires BTW_SMTP_HOST, BTW_SMTP_USER, and BTW_SMTP_PASS environment variables.")
        return 1

    sent_count = 0
    skipped_count = 0
    for idx, row in enumerate(rows):
        to_email = (row.get("email") or "").strip().lower()
        biz = (row.get("business_name") or "").strip()
        if not to_email or to_email in suppressed or to_email in already_sent:
            skipped_count += 1
            continue

        subject, body = render_message(row, DEFAULT_MAILING_ADDRESS)
        if not is_send:
            print(f"[DRY-RUN] To: {to_email} | Subject: {subject}")
            sent_count += 1
            continue

        msg = EmailMessage()
        msg["From"] = smtp_user
        msg["To"] = to_email
        msg["Subject"] = subject
        msg.set_content(body)

        with smtplib.SMTP(smtp_host, smtp_port, timeout=20) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)

        append_sent_log(to_email, biz, "sent")
        already_sent.add(to_email)
        sent_count += 1
        print(f"Sent to {to_email} ({biz})")
        if idx < len(rows) - 1 and args.delay > 0:
            time.sleep(args.delay)

    mode_label = "LIVE SEND" if is_send else "DRY-RUN"
    print(f"[{mode_label}] Processed: {sent_count} queued/sent, {skipped_count} skipped (suppressed/duplicate/blank).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
