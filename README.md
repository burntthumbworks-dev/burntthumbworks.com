# Burnt Thumb Works — burntthumbworks.com

Static website. No build step, no framework, no backend. Plain HTML/CSS/JS — open `index.html` in a browser and it works.

## Pages
- `index.html` — home
- `apps.html` — products
- `hook-and-skein.html` · `garden-sage.html` — product pages
- `ai-workflow-setup.html` — AI Workflow Setup service page
- `contact.html` — start a project (intake)
- `404.html` — not found
- `robots.txt`, `sitemap.xml` — SEO

## What to upload
Upload the whole folder to your web root (`public_html` / document root):
```
index.html  apps.html  hook-and-skein.html  garden-sage.html
ai-workflow-setup.html  contact.html  404.html  robots.txt  sitemap.xml
css/   js/   assets/
```
`index.html` must land at the root so the site loads at https://burntthumbworks.com/.

## Before going live — two things

1. **Project form (Google Forms).** Open `js/site.js` and paste your form's share URL into the constant at the top:
   ```js
   var PROJECT_FORM_URL = "https://docs.google.com/forms/d/e/XXXX/viewform";
   ```
   Every "Start a project" button then opens that form in a new tab. While it's empty, the buttons send people to the contact page, which points them to email instead (no fake submissions). The form should ask: name, email, phone (optional), business/project name (optional), what they need help with, budget range (optional), timeline (optional), project notes.

2. **Email.** The studio address (`burntthumbworks@gmail.com`) is assembled in `js/site.js` from parts so it isn't sitting in the page source for scrapers. Change it there if needed.

## Fonts
The site loads its fonts from Google Fonts via `<link>` in each page `<head>`
(IM Fell English SC, Spectral, Hanken Grotesk, JetBrains Mono) — they display
correctly as shipped. To make the site fully self-contained (no external
request), follow `assets/fonts/README.md`: drop the listed `.woff2` files into
`assets/fonts/` and swap the Google `<link>` for `<link rel="stylesheet"
href="css/fonts.css">`. The `@font-face` rules are already written in
`css/fonts.css`.

## Notes
- No analytics, trackers, or third-party scripts.
- Mobile-first, accessible (skip link, visible focus, semantic landmarks).
- Brand mark: `assets/crest-mark.png` (medallion, used for header/footer/favicon) and `assets/crest-ink.png` (full crest, used for the hero/section seal).
