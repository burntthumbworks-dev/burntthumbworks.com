# Deployment — Burnt Thumb Works Website

**Route:** GitHub-first → GitHub Pages (per BTW GitHub-First Website Publishing rule).
**Status (2026-05-29):** built, committed, and **PUSHED** to `burntthumbworks-dev/burntthumbworks.com` (PRIVATE), branch `main`. **Not yet published** — Pages/public/custom-domain pending (steps below).

## To publish (remaining steps — Eric's call; outward-facing)
```powershell
# 1) Make public OR keep private (Pages on private repos needs a paid GitHub plan):
gh repo edit burntthumbworks-dev/burntthumbworks.com --visibility public --accept-visibility-change-consequences
# 2) Enable GitHub Pages from main (root). .nojekyll is present.
gh api -X POST repos/burntthumbworks-dev/burntthumbworks.com/pages -f "source[branch]=main" -f "source[path]=/"
# 3) Optional custom domain: add a CNAME file with burntthumbworks.com and configure DNS (DNS NOT changed by this task).
```

## Live URL (after Pages enabled)
- Project Pages: `https://burntthumbworks-dev.github.io/burntthumbworks.com/`
- Custom domain (after DNS): `https://burntthumbworks.com/`

## Public-safety checklist (verified this build)
- [x] No `.env` / secrets / keys / tokens in repo.
- [x] No external script/CDN dependencies (self-contained).
- [x] No user/customer/private data; no internal reports.
- [x] `robots.txt`, `sitemap.xml`, `404.html`, `.nojekyll` present.
- [ ] og:image — intentionally omitted until a real share image exists.
- [ ] DNS/custom domain — NOT configured by this task (Eric/DNS step).

## Rollback
Local-only commit; delete the repo folder or `git reset` to undo. Nothing pushed/deployed.
