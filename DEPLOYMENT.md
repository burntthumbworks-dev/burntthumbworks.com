# Deployment — Burnt Thumb Works Website

**Route:** GitHub-first → GitHub Pages (per BTW GitHub-First Website Publishing rule).
**Status (2026-05-31):** **LIVE / PUBLISHED.** Repo `burntthumbworks-dev/burntthumbworks.com` is **public**; GitHub Pages is enabled (source `main` `/`), custom domain `burntthumbworks.com` is configured with HTTPS enforced (cert approved). **Pushing to `main` auto-deploys to the live public site.** Treat every push as a public publish — run the J117 content-safety filter on changed pages first.
*(History: 2026-05-29 the repo was private with Pages off; it was made public + Pages-enabled + custom-domain-bound sometime before 2026-05-31.)*

## Deploy (now automatic)
```
git push origin main      # GitHub Pages rebuilds + deploys to https://burntthumbworks.com/ automatically
```
No manual publish step is needed. Verify a deploy:
```
gh api repos/burntthumbworks-dev/burntthumbworks.com/pages/builds/latest --jq '{status,commit}'
curl -s -o /dev/null -w "%{http_code}" https://burntthumbworks.com/
```

## Live URL
- Custom domain: `https://burntthumbworks.com/` (live)
- Project Pages fallback: `https://burntthumbworks-dev.github.io/burntthumbworks.com/`

## Public-safety checklist (verified this build)
- [x] No `.env` / secrets / keys / tokens in repo.
- [x] No external script/CDN dependencies (self-contained).
- [x] No user/customer/private data; no internal reports.
- [x] `robots.txt`, `sitemap.xml`, `404.html`, `.nojekyll` present.
- [ ] og:image — intentionally omitted until a real share image exists.
- [ ] DNS/custom domain — NOT configured by this task (Eric/DNS step).

## Rollback
The site is live. To roll back a deploy, revert the offending commit and push:
`git revert <sha> && git push origin main` (Pages redeploys the reverted state). Avoid force-push / history edits.
