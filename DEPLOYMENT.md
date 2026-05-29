# Deployment — Burnt Thumb Works Website

**Route:** GitHub-first → GitHub Pages (per BTW GitHub-First Website Publishing rule).
**Status (2026-05-29):** built + committed locally; **NOT pushed** — no GitHub remote, `gh` not authenticated.

## To publish (Eric or an authenticated session)
```powershell
cd C:\BurntThumbWorks\Websites\BurntThumbWorks
gh auth login                                   # one-time
gh repo create burntthumbworks-dev/burntthumbworks.com --private --source . --remote origin --push
# Then enable GitHub Pages: Settings → Pages → Source = main (root). .nojekyll is present.
# Optional custom domain: add a CNAME file with burntthumbworks.com and configure DNS (DNS NOT changed by this task).
```
Without `gh`: create the repo on github.com, then:
```powershell
git remote add origin https://github.com/burntthumbworks-dev/burntthumbworks.com.git
git push -u origin main
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
