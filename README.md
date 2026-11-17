# Burnt Thumb Works — burntthumbworks.com

Static website for an original games and everyday apps studio. Zero build step, zero external CDNs, zero trackers, and `$0` runtime spend. Plain HTML/CSS/JS—open `index.html` over a local static server and run `node scripts/verify-codex.mjs`.

## Public Routes (Indexed in `sitemap.xml`)
- `index.html` — studio home (Original Games & Everyday Apps)
- `games/` — games hub (`Fowl Play`, `The Hook and the Skein`, `Scarward` + playable embeds under `games/*/play/`)
- `apps.html` & `apps/` — everyday apps (`Garden Sage`, `Pantry Panda` + live slices under `apps/*/demo/`)
- `garden-sage.html`, `pantry-panda.html`, `hook-and-skein.html` — app/game overview pages
- `404.html`, `robots.txt`, `sitemap.xml`

## Unlisted Routes (`noindex, nofollow`, not linked in public nav)
- `contact.html` — studio correspondence / game & app feedback email page
- `lab/`, `products/`, `showcase/` — unlisted workbench and catalog pages

## Verification
Run the deterministic verification suite before committing or deploying:
```bash
node scripts/verify-codex.mjs
```

## Notes
- Strictly an original games and everyday apps studio: no AI consulting/services copy, no About page, no pricing or subscription UI, and no external analytics/fonts/CDNs.
- Email (`burntthumbworks@gmail.com`) is assembled in `js/site.js` from parts so it is not exposed in raw HTML source.
- Brand mark: `assets/crest-mark.png` (header/favicon) and `assets/crest-ink.png` (hero/footer crest).
