# README — Assets

Everything in this folder is a **placeholder** or a self-contained, license-clean asset. No external requests, no copyrighted third-party images.

## Files

| File | Role | Replace before launch? |
|---|---|---|
| `favicon.svg` | Browser tab icon (placeholder seal) | Recommended |
| `logo-mark.svg` | Seal mark — used in the header and as the faint hero watermark | Recommended |
| `logo-placeholder.svg` | Horizontal lockup (seal + wordmark) — used in the footer | Recommended |

## How to replace the logo with the real crest

The studio's real mark is the engraved crest (in the design system as `assets/logo-crest.png`, plus cream and black variants).

1. Export the crest at the sizes you need (a transparent PNG or an optimized SVG works).
2. **Header / hero:** drop in a square/seal crop as `logo-mark.svg` (or `.png`) and update the `src` in `index.html` (`.brand__mark` and `.hero__bg`) and `404.html`.
3. **Footer:** replace `logo-placeholder.svg` with the full crest or a crest+wordmark lockup, and update the footer `<img src>` in `index.html`.
4. **Favicon:** replace `favicon.svg`. For broad device support you may also add a `favicon.ico` (32×32) and a 180×180 `apple-touch-icon.png`, then link them in `<head>`.

> Keep raster logos reasonably small (ideally < 100 KB) so the page stays fast. Don't shrink the crest below ~40px — it's detailed.

## Fonts (optional, for exact brand type)

The page uses system-font fallbacks so it works with **zero external requests**. To use the real brand fonts (IM Fell English SC / Spectral / Hanken Grotesk / JetBrains Mono):

1. Obtain licensed `.woff2` files and place them in `assets/fonts/`.
2. Uncomment the `@font-face` blocks at the top of `css/brand-tokens.css` and fix the paths.
3. Nothing else needs changing — the `--font-*` variables already prefer the real families.

## Optional: Open Graph share image

No `og:image` is set yet. To add one:
1. Create a 1200×630 PNG (e.g. `assets/og-image.png`) — crest on the soot background with the wordmark.
2. Add to `index.html` `<head>`:
   `<meta property="og:image" content="https://burntthumbworks.com/assets/og-image.png">`

## Do NOT add here
- Private contact info, secrets, or config.
- Third-party/copyrighted images without a license.
- Tracking pixels or externally-hosted scripts/fonts.
