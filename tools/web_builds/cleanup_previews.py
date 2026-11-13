#!/usr/bin/env python3
"""
Burnt Thumb Works — Unpurchased Preview Cleanup (Stdlib Only)
Purges unpurchased preview folders in web-builds/previews/ older than --days (default 30).
"""

from __future__ import annotations

import argparse
import shutil
import time
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PREVIEWS_DIR = REPO_ROOT / "web-builds" / "previews"


def main() -> int:
    parser = argparse.ArgumentParser(description="Purge stale unpurchased preview directories.")
    parser.add_argument("--days", type=int, default=30, help="Age threshold in days (default: 30)")
    parser.add_argument("--dry-run", action="store_true", help="List folders without deleting")
    args = parser.parse_args()

    if not PREVIEWS_DIR.exists():
        print(f"No previews directory found at {PREVIEWS_DIR}")
        return 0

    cutoff = time.time() - (args.days * 86400)
    removed = 0
    for child in sorted(PREVIEWS_DIR.iterdir()):
        if not child.is_dir():
            continue
        newest_mtime = max(
            [child.stat().st_mtime] + [p.stat().st_mtime for p in child.rglob("*") if p.exists()]
        )
        if newest_mtime < cutoff:
            if args.dry_run:
                print(f"[DRY-RUN] Would remove: {child}")
            else:
                shutil.rmtree(child)
                print(f"Removed stale preview: {child}")
            removed += 1

    print(f"Done. {removed} preview folder(s) {'would be ' if args.dry_run else ''}removed (threshold: {args.days} days).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
