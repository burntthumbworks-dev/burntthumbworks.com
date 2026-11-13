#!/usr/bin/env python3
"""
Burnt Thumb Works — Static Local Business Site Builder (Stdlib Only)
Reads tools/web_builds/prospects/<slug>.json and writes self-contained
index.html, styles.css, and _headers into web-builds/previews/<slug>/
(or web-builds/sample/ when building the default showcase).
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PROSPECTS_DIR = REPO_ROOT / "tools" / "web_builds" / "prospects"
PREVIEWS_DIR = REPO_ROOT / "web-builds" / "previews"
SAMPLE_DIR = REPO_ROOT / "web-builds" / "sample"

HEX_RE = re.compile(r"^#[0-9a-fA-F]{6}$")
PHONE_RE = re.compile(r"^\+?[0-9\s().-]{7,20}$")
SLUG_RE = re.compile(r"^[a-z0-9][a-z0-9-]{0,62}$")


def esc(value: object) -> str:
    return html.escape(str(value or "").strip(), quote=True)


def validate_hex(color: str, default: str = "#2E6B3E") -> str:
    c = (color or "").strip()
    return c if HEX_RE.match(c) else default


def validate_phone(phone: str, default: str = "+14105550100") -> str:
    p = (phone or "").strip()
    if not PHONE_RE.match(p):
        return default
    digits = re.sub(r"[^\d+]", "", p)
    return digits if len(digits) >= 7 else default


def validate_slug(slug: str) -> str:
    s = (slug or "").strip().lower()
    if not SLUG_RE.match(s):
        raise ValueError(f"Invalid slug '{slug}'. Use lowercase letters, numbers, and hyphens only.")
    return s


def darken_hex(hex_color: str, factor: float = 0.82) -> str:
    r = max(0, min(255, int(int(hex_color[1:3], 16) * factor)))
    g = max(0, min(255, int(int(hex_color[3:5], 16) * factor)))
    b = max(0, min(255, int(int(hex_color[5:7], 16) * factor)))
    return f"#{r:02x}{g:02x}{b:02x}"


def bi_span(en_text: str, es_text: str, lang_mode: str) -> str:
    en = esc(en_text)
    es = esc(es_text or en_text)
    if lang_mode == "en":
        return en
    if lang_mode == "es":
        return es
    return f'<span class="i18n" data-en="{en}" data-es="{es}">{en}</span>'


def build_styles(accent: str, accent_dark: str) -> str:
    return f"""/* Burnt Thumb Works — Self-Contained Local Business Static Styles */
:root {{
  --accent: {accent};
  --accent-dark: {accent_dark};
  --bg: #FAF8F4;
  --surface: #FFFFFF;
  --surface-alt: #F2EFE9;
  --ink: #1C1B18;
  --ink-muted: #57534A;
  --border: #DDD7CB;
  --radius: 12px;
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}}
*, *::before, *::after {{ box-sizing: border-box; }}
html {{ scroll-behavior: smooth; }}
body {{
  margin: 0;
  font-family: var(--font-sans);
  background: var(--bg);
  color: var(--ink);
  line-height: 1.6;
  padding-bottom: 74px;
}}
a {{ color: var(--accent-dark); }}
.wrap {{ width: 100%; max-width: 1040px; margin: 0 auto; padding: 0 20px; }}

/* Topbar */
.topbar {{
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 20;
}}
.topbar__inner {{
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; padding: 12px 20px; max-width: 1040px; margin: 0 auto;
}}
.brand {{ font-weight: 800; font-size: 1.05rem; color: var(--ink); text-decoration: none; }}
.topbar__right {{ display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }}
.top-phone {{
  font-weight: 700; text-decoration: none; color: var(--accent-dark);
  padding: 6px 12px; border: 1px solid var(--border); border-radius: 999px;
  font-size: 0.92rem;
}}
.lang-btn {{
  cursor: pointer; font-family: inherit; font-weight: 700; font-size: 0.85rem;
  background: var(--surface-alt); color: var(--ink);
  border: 1px solid var(--border); border-radius: 999px; padding: 6px 12px;
}}
.lang-btn:hover {{ border-color: var(--accent); }}

/* Hero */
.hero {{
  padding: 48px 0 36px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%);
}}
.eyebrow {{
  display: inline-block; font-size: 0.82rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--accent-dark); background: var(--surface-alt);
  border: 1px solid var(--border); border-radius: 999px; padding: 4px 12px;
  margin-bottom: 14px;
}}
h1 {{
  margin: 0 0 12px; font-size: clamp(1.75rem, 4vw, 2.65rem);
  line-height: 1.15; letter-spacing: -0.02em;
}}
.hero__sub {{
  margin: 0 0 22px; font-size: 1.08rem; color: var(--ink-muted); max-width: 660px;
}}
.hero__actions {{ display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }}
.btn {{
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 0.98rem;
  text-decoration: none; border: 1px solid transparent;
}}
.btn--primary {{ background: var(--accent); color: #FFFFFF; }}
.btn--primary:hover {{ background: var(--accent-dark); }}
.btn--secondary {{ background: var(--surface); color: var(--ink); border-color: var(--border); }}
.btn--secondary:hover {{ border-color: var(--accent); }}
.trust-row {{
  display: flex; flex-wrap: wrap; gap: 10px 18px;
  font-size: 0.9rem; color: var(--ink-muted); font-weight: 600;
}}

/* Sections */
.section {{ padding: 40px 0; border-bottom: 1px solid var(--border); }}
.section h2 {{ margin: 0 0 8px; font-size: 1.55rem; letter-spacing: -0.01em; }}
.section__lede {{ margin: 0 0 22px; color: var(--ink-muted); max-width: 640px; }}
.grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }}
@media (max-width: 820px) {{ .grid {{ grid-template-columns: repeat(2, 1fr); }} }}
@media (max-width: 560px) {{ .grid {{ grid-template-columns: 1fr; }} }}
.card {{
  background: var(--surface); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 18px;
}}
.card__badge {{
  display: inline-block; font-size: 0.75rem; font-weight: 700;
  color: var(--accent-dark); background: var(--surface-alt);
  padding: 2px 9px; border-radius: 999px; margin-bottom: 8px;
}}
.card h3 {{ margin: 0 0 6px; font-size: 1.08rem; }}
.card p {{ margin: 0; font-size: 0.94rem; color: var(--ink-muted); }}

.areas {{ display: flex; flex-wrap: wrap; gap: 8px; }}
.area-pill {{
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 999px; padding: 6px 14px; font-size: 0.9rem; font-weight: 600;
}}

.photo-grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }}
@media (max-width: 720px) {{ .photo-grid {{ grid-template-columns: 1fr; }} }}
.photo-grid img {{
  width: 100%; height: auto; border-radius: var(--radius);
  border: 1px solid var(--border); display: block;
}}

.footer {{ padding: 28px 0; font-size: 0.88rem; color: var(--ink-muted); }}

/* Sticky mobile bar */
.mobile-bar {{
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 30;
  background: var(--surface); border-top: 1px solid var(--border);
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 10px 14px;
}}
.mobile-bar a {{
  text-align: center; padding: 11px 10px; border-radius: 10px;
  font-weight: 700; font-size: 0.95rem; text-decoration: none;
}}
.mobile-bar__call {{ background: var(--accent); color: #FFFFFF; }}
.mobile-bar__text {{ background: var(--surface-alt); color: var(--ink); border: 1px solid var(--border); }}
@media (min-width: 780px) {{
  .mobile-bar {{ display: none; }}
  body {{ padding-bottom: 0; }}
}}
"""


def build_headers(mode: str) -> str:
    robots = "noindex, nofollow" if mode == "preview" else "index, follow"
    return (
        "/*\n"
        "  X-Frame-Options: DENY\n"
        "  X-Content-Type-Options: nosniff\n"
        "  Referrer-Policy: strict-origin-when-cross-origin\n"
        f"  X-Robots-Tag: {robots}\n"
        "  Content-Security-Policy: default-src 'self'; img-src 'self' data:; "
        "style-src 'self'; script-src 'self' 'unsafe-inline'; base-uri 'self'; form-action 'self' mailto:;\n"
    )


def build_html(cfg: dict, mode: str) -> str:
    lang_mode = str(cfg.get("lang", "en")).lower()
    if lang_mode not in {"en", "es", "bilingual"}:
        lang_mode = "en"
    html_lang = "es" if lang_mode == "es" else "en"

    robots_meta = "noindex, nofollow" if mode == "preview" else "index, follow"
    biz_en = cfg.get("businessName", "Local Business")
    biz_es = cfg.get("businessNameEs", biz_en)
    trade_en = cfg.get("tradeCategory", "Local Services")
    trade_es = cfg.get("tradeCategoryEs", trade_en)
    tag_en = cfg.get("tagline", "")
    tag_es = cfg.get("taglineEs", tag_en)
    phone_disp = esc(cfg.get("phoneDisplay", "(555) 555-0100"))
    phone_raw = validate_phone(cfg.get("phoneRaw", "+15555550100"))
    email = esc(cfg.get("email", "contact@example.com"))
    city_state = esc(cfg.get("cityState", ""))
    years_en = cfg.get("yearsInBusiness", "")
    years_es = cfg.get("yearsInBusinessEs", years_en)
    lic_en = cfg.get("licenseBadge", "Licensed & Insured")
    lic_es = cfg.get("licenseBadgeEs", lic_en)
    hours_en = cfg.get("hours", "Mon–Fri · 8:00 AM – 5:00 PM")
    hours_es = cfg.get("hoursEs", hours_en)
    cta_en = cfg.get("ctaText", "Call or Text for a Free Estimate")
    cta_es = cfg.get("ctaTextEs", cta_en)

    services_html = []
    for svc in cfg.get("services", []):
        badge_en = svc.get("badge", "")
        badge_es = svc.get("badgeEs", badge_en)
        badge_block = f'<span class="card__badge">{bi_span(badge_en, badge_es, lang_mode)}</span>' if badge_en else ""
        services_html.append(
            f'<article class="card">{badge_block}'
            f'<h3>{bi_span(svc.get("title", ""), svc.get("titleEs", ""), lang_mode)}</h3>'
            f'<p>{bi_span(svc.get("description", ""), svc.get("descriptionEs", ""), lang_mode)}</p>'
            f"</article>"
        )

    reviews_html = []
    for rev in cfg.get("reviews", []):
        stars = "★" * max(1, min(5, int(rev.get("rating", 5))))
        reviews_html.append(
            f'<article class="card">'
            f'<div class="card__badge" aria-label="{len(stars)} out of 5 stars">{stars}</div>'
            f'<p>"{bi_span(rev.get("quote", ""), rev.get("quoteEs", ""), lang_mode)}"</p>'
            f'<p style="margin-top:10px;font-weight:700;color:var(--ink);">— {esc(rev.get("name", ""))} · {esc(rev.get("location", ""))}</p>'
            f"</article>"
        )

    areas_html = "".join(f'<span class="area-pill">{esc(a)}</span>' for a in cfg.get("serviceAreas", []))

    photos = cfg.get("photos", [])
    photos_section = ""
    if photos:
        photo_items = []
        for p in photos[:5]:
            src = esc(p.get("src", ""))
            alt = esc(p.get("alt", biz_en))
            w = int(p.get("width", 800))
            h = int(p.get("height", 600))
            if src:
                photo_items.append(f'<img src="{src}" alt="{alt}" width="{w}" height="{h}" loading="lazy" decoding="async">')
        if photo_items:
            photos_section = (
                '<section class="section" id="work"><div class="wrap">'
                f'<h2>{bi_span("Recent Work", "Trabajos Recientes", lang_mode)}</h2>'
                f'<div class="photo-grid">{"".join(photo_items)}</div>'
                "</div></section>"
            )

    lang_toggle_btn = ""
    lang_script = ""
    if lang_mode == "bilingual":
        lang_toggle_btn = '<button type="button" class="lang-btn" id="lang-toggle" aria-label="Switch language">Español</button>'
        lang_script = (
            "<script>(function(){var l='en',b=document.getElementById('lang-toggle');"
            "if(!b)return;b.addEventListener('click',function(){l=l==='en'?'es':'en';"
            "document.documentElement.lang=l;b.textContent=l==='en'?'Español':'English';"
            "document.querySelectorAll('.i18n').forEach(function(el){"
            "var t=el.getAttribute('data-'+l);if(t)el.textContent=t;});});})();</script>"
        )

    schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": biz_en,
        "description": tag_en,
        "telephone": phone_raw,
        "email": cfg.get("email", ""),
        "areaServed": cfg.get("serviceAreas", []),
        "openingHours": hours_en,
    }
    schema_json = json.dumps(schema, ensure_ascii=False).replace("</", "<\\/")

    return f"""<!DOCTYPE html>
<html lang="{html_lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="{robots_meta}">
  <title>{esc(biz_en)} — {esc(city_state)}</title>
  <meta name="description" content="{esc(tag_en)}">
  <link rel="stylesheet" href="styles.css">
  <script type="application/ld+json">{schema_json}</script>
</head>
<body>
  <header class="topbar">
    <div class="topbar__inner">
      <a class="brand" href="#top">{bi_span(biz_en, biz_es, lang_mode)}</a>
      <div class="topbar__right">
        <a class="top-phone" href="tel:{esc(phone_raw)}">{phone_disp}</a>
        {lang_toggle_btn}
      </div>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="wrap">
        <span class="eyebrow">{bi_span(trade_en, trade_es, lang_mode)} · {city_state}</span>
        <h1>{bi_span(cta_en, cta_es, lang_mode)}</h1>
        <p class="hero__sub">{bi_span(tag_en, tag_es, lang_mode)}</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="tel:{esc(phone_raw)}">{bi_span(f"Call {cfg.get('phoneDisplay', '')}", f"Llamar {cfg.get('phoneDisplay', '')}", lang_mode)}</a>
          <a class="btn btn--secondary" href="sms:{esc(phone_raw)}">{bi_span("Text for Estimate", "Enviar Texto", lang_mode)}</a>
          <a class="btn btn--secondary" href="mailto:{email}">{bi_span("Email Us", "Enviar Correo", lang_mode)}</a>
        </div>
        <div class="trust-row">
          <span>{bi_span(lic_en, lic_es, lang_mode)}</span>
          <span>•</span>
          <span>{bi_span(years_en, years_es, lang_mode)}</span>
          <span>•</span>
          <span>{bi_span(hours_en, hours_es, lang_mode)}</span>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="wrap">
        <h2>{bi_span("Services", "Servicios", lang_mode)}</h2>
        <p class="section__lede">{bi_span("Clear pricing, reliable arrival windows, and clean work on every job.", "Precios claros, puntualidad garantizada y trabajo limpio en cada visita.", lang_mode)}</p>
        <div class="grid">{"".join(services_html)}</div>
      </div>
    </section>

    {photos_section}

    <section class="section" id="reviews">
      <div class="wrap">
        <h2>{bi_span("What Neighbors Say", "Opiniones de Clientes", lang_mode)}</h2>
        <div class="grid">{"".join(reviews_html)}</div>
      </div>
    </section>

    <section class="section" id="areas">
      <div class="wrap">
        <h2>{bi_span("Service Areas", "Áreas de Servicio", lang_mode)}</h2>
        <div class="areas">{areas_html}</div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap">
      <strong>{bi_span(biz_en, biz_es, lang_mode)}</strong> · {city_state} ·
      <a href="tel:{esc(phone_raw)}">{phone_disp}</a> · <a href="mailto:{email}">{email}</a>
    </div>
  </footer>

  <div class="mobile-bar" role="region" aria-label="Quick contact">
    <a class="mobile-bar__call" href="tel:{esc(phone_raw)}">{bi_span("Call Now", "Llamar", lang_mode)}</a>
    <a class="mobile-bar__text" href="sms:{esc(phone_raw)}">{bi_span("Text / Estimate", "Texto / Cita", lang_mode)}</a>
  </div>
  {lang_script}
</body>
</html>
"""


def build_site(input_path: Path, out_dir: Path, mode: str) -> Path:
    cfg = json.loads(input_path.read_text(encoding="utf-8"))
    accent = validate_hex(cfg.get("accentColor", "#2E6B3E"))
    accent_dark = darken_hex(accent)
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "styles.css").write_text(build_styles(accent, accent_dark), encoding="utf-8")
    (out_dir / "_headers").write_text(build_headers(mode), encoding="utf-8")
    (out_dir / "index.html").write_text(build_html(cfg, mode), encoding="utf-8")
    return out_dir


def main() -> int:
    parser = argparse.ArgumentParser(description="Build static local business site from prospect JSON.")
    parser.add_argument("--slug", help="Prospect slug under tools/web_builds/prospects/<slug>.json")
    parser.add_argument("--input", type=Path, help="Explicit path to prospect JSON")
    parser.add_argument("--out", type=Path, help="Explicit output directory")
    parser.add_argument("--mode", choices=["preview", "prod"], default=None, help="Build mode (preview sets noindex)")
    args = parser.parse_args()

    if not args.slug and not args.input:
        input_path = PROSPECTS_DIR / "sample.json"
        out_dir = args.out or SAMPLE_DIR
        mode = args.mode or "prod"
    elif args.input:
        input_path = args.input.resolve()
        slug = validate_slug(input_path.stem)
        out_dir = args.out or (SAMPLE_DIR if slug == "sample" else PREVIEWS_DIR / slug)
        mode = args.mode or "preview"
    else:
        slug = validate_slug(args.slug)
        input_path = PROSPECTS_DIR / f"{slug}.json"
        out_dir = args.out or (SAMPLE_DIR if slug == "sample" else PREVIEWS_DIR / slug)
        mode = args.mode or "preview"

    if not input_path.exists():
        print(f"ERROR: Prospect JSON not found: {input_path}", file=sys.stderr)
        return 1

    written = build_site(input_path, out_dir, mode)
    total_kb = sum(p.stat().st_size for p in written.iterdir() if p.is_file()) / 1024
    print(f"Built {written} ({mode}) — {total_kb:.2f} KB total")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
