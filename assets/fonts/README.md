# Fonts — self-hosting the brand faces

The site currently loads its fonts from **Google Fonts** (the `<link>` in each page
`<head>`). They display correctly for every visitor as-is. This folder is for making
the site **fully self-contained** so it needs no external request.

## Drop these .woff2 files here

Easiest source: **Google Webfonts Helper** → https://gwfh.mranftl.com
(choose charset **latin**, format **woff2**). File names must match what
`css/fonts.css` expects:

| Family | Weight / style | Filename |
|---|---|---|
| IM Fell English SC | 400 | `im-fell-english-sc-regular.woff2` |
| Spectral | 400 | `spectral-regular.woff2` |
| Spectral | 500 | `spectral-500.woff2` |
| Spectral | 600 | `spectral-600.woff2` |
| Spectral | 400 italic | `spectral-italic.woff2` |
| Hanken Grotesk | 400 | `hanken-grotesk-regular.woff2` |
| Hanken Grotesk | 500 | `hanken-grotesk-500.woff2` |
| Hanken Grotesk | 600 | `hanken-grotesk-600.woff2` |
| Hanken Grotesk | 700 | `hanken-grotesk-700.woff2` |
| JetBrains Mono | 400 | `jetbrains-mono-regular.woff2` |

## Then switch the site over

In every page `<head>`, replace the Google Fonts `<link …fonts.googleapis.com…>`
line with:

```html
<link rel="stylesheet" href="css/fonts.css">
```

(Affected pages: index.html, apps.html, hook-and-skein.html, garden-sage.html,
ai-workflow-setup.html, contact.html, 404.html.)

Done — the `--font-*` tokens already prefer these families, with system-font
fallbacks if a file is ever missing.

> Licensing: all four are open-source (OFL / Apache-2.0) and fine to self-host
> and ship.
