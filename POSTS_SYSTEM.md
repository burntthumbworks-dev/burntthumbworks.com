# Product / Post System — how to turn any idea into a page

A lightweight, repeatable way to publish a page for every product or game idea —
**public when it's ready, or a private draft until then.** No build step, no
framework: it's plain HTML that reuses the site's existing CSS components.

## The three sections

| Section | URL | Purpose |
|---------|-----|---------|
| **Products** | `/products/` | A dedicated page for each thing we ship (e.g. `products/grimmkart.html`). |
| **The Lab** | `/lab/` | Build-in-the-open devlog: experiments, prototypes, ideas in progress. |
| **Showcase** | `/showcase/` | Featured highlights — the portfolio view of finished work. |

Each section has an `index.html` hub that lists its public posts as cards.

The shared starting point for any new post is **`products/_post-template.html`**
(it is `noindex` and unlinked — copy it, don't publish it directly).

## Add a new post (5 steps)

1. **Copy the template** into the right section, with a clean slug filename:
   `products/_post-template.html` → e.g. `lab/cursed-zone-royale.html`
2. **Fill every `<!-- FILL: ... -->` marker** (title, description, canonical URL, body).
3. **Decide: draft or public?**
   - **Draft (default):** leave `<meta name="robots" content="noindex, nofollow">`.
     Do not link it and do not add it to the sitemap. It exists at its URL but
     search engines ignore it and nobody finds it unless you share the link.
     (Optional: keep drafts in a `drafts/` subfolder, e.g. `lab/drafts/idea.html`.)
   - **Public:** change robots to `index, follow`, then do steps 4–5.
4. **Link it** — add a card on the section `index.html` (copy an existing card).
5. **List it for search** — add a `<url>` entry to `/sitemap.xml`.

To **unpublish**, reverse it: set robots back to `noindex, nofollow`, remove its
card from the index, and remove its `<url>` from `sitemap.xml`.

## "Don't leak everything at once"

The system is built to release on your schedule:

- **New posts are drafts by default** — nothing is public until you flip the
  robots tag and add the links. You control the moment each thing goes live.
- Drafts are still just static files on a public host, so treat a draft URL as
  "unlisted, not secret." Don't put anything truly confidential (unreleased
  pricing you don't want seen, secrets, private dashboards) in a draft post.
  For genuinely private material, keep it out of this repo entirely.
- Sitemap + `index, follow` are what actually invite search engines in. Until a
  post has both, it won't show up in Google.

## Reusable components (already in the site CSS)

`section`, `section--alt`, `wrap`, `section__head`, `eyebrow`, `section__title`,
`section__lede`, `page-head`, `breadcrumb`, `grid grid--3`, `card`,
`card--interactive`, `card__title`, `card__title--lg`, `card__body`, `card__link`,
`tag`, `badge badge--success|info|warning|ember`, `btn btn--primary|secondary|ghost|lg`.

## Files in this system

```
products/index.html          Products hub
products/grimmkart.html      First product post (public)
products/_post-template.html Reusable template (noindex, copy me)
lab/index.html               The Lab hub
showcase/index.html          Showcase hub
POSTS_SYSTEM.md              This guide
```
