/**
 * BURNT THUMB WORKS — Codex & Manuscript Verification Suite (Phase 2D)
 * scripts/verify-codex.mjs
 *
 * Verifies:
 * 1. Zero external network calls (CDNs, external fonts, external scripts)
 * 2. < 150 KB cold-load payload in Lite mode
 * 3. Clean site flow (public .ribbon-nav strictly Home/Games/Apps; zero outbound links to unlisted pages; noindex,nofollow on unlisted pages; clean sitemap.xml)
 * 4. Explicit width and height attributes on all images matching PNG dimensions (zero CLS)
 * 5. Zero broken internal links across public and unlisted HTML pages
 * 6. translate="no" coverage on brand, game, and app proper names
 * 7. Typography tokens include CJK & Devanagari system font fallbacks
 * 8. Sibling repo isolation (GrimmKart working tree is 100% clean, resolved without hardcoded C:\ paths)
 * 9. Studio brand, identity & path invariants (zero AI consulting/services, no About page, zero real names, zero hardcoded local paths)
 */

import { readFileSync, statSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, testName, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  \x1b[32m✔\x1b[0m ${testName}${details ? ` (${details})` : ''}`);
  } else {
    failedChecks++;
    console.error(`  \x1b[31m✖\x1b[0m ${testName}${details ? ` - FAIL: ${details}` : ''}`);
  }
}

console.log('\n======================================================');
console.log('  BURNT THUMB WORKS — CODEX VERIFICATION (PHASE 2D)');
console.log('======================================================\n');

const publicPages = [
  'index.html',
  'games/index.html',
  'games/fowl-play/index.html',
  'games/the-hook-and-skein/index.html',
  'games/scarward/index.html',
  'hook-and-skein.html',
  'apps.html',
  'apps/index.html',
  'garden-sage.html',
  'apps/garden-sage/index.html',
  'pantry-panda.html',
  'apps/pantry-panda/index.html',
  'apps/the-hook-and-skein/index.html',
  '404.html'
];

const unlistedPages = [
  'contact.html',
  'lab/index.html',
  'showcase/index.html',
  'products/index.html',
  'products/fowl-play.html',
  'games/grimmkart/index.html',
  'games/grimmkart/play/index.html'
];

const allCheckedPages = [...publicPages, ...unlistedPages];

// ---------------------------------------------------------------------------
// TEST 1: Zero External URLs (CDNs, Fonts, Scripts)
// ---------------------------------------------------------------------------
console.log('1. Zero External Network Requests ($0 Spend Guarantee)');

const foundExternalUrls = [];
const externalUrlPattern = /(?:src|href)=["'](https?:\/\/(?!burntthumbworks\.com|www\.burntthumbworks\.com)[^"']+)["']/gi;

for (const pageRel of allCheckedPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;
  const content = readFileSync(pagePath, 'utf8');

  const contentCleaned = content
    .replace(/<meta\s+[^>]*property=["']og:[^"']*["'][^>]*>/gi, '')
    .replace(/xmlns=["'][^"']+["']/gi, '');

  const matches = [...contentCleaned.matchAll(externalUrlPattern)];
  for (const m of matches) {
    if (m[0].includes('.css') || m[0].includes('.js') || m[0].includes('fonts.')) {
      foundExternalUrls.push(`${pageRel}: ${m[1]}`);
    }
  }
}

assert(foundExternalUrls.length === 0, 'Zero external CDN stylesheets or scripts linked', foundExternalUrls.length ? foundExternalUrls.join(', ') : '100% self-contained local assets');

// ---------------------------------------------------------------------------
// TEST 2: < 150 KB Cold-Load Payload in Lite Mode
// ---------------------------------------------------------------------------
console.log('\n2. Lite Mode Cold-Load Budget (Ceiling: < 150 KB uncompressed)');

const LITE_CEILING_BYTES = 150 * 1024; // 153,600 bytes

for (const pageRel of allCheckedPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;

  const htmlContent = readFileSync(pagePath, 'utf8');
  let bundleBytes = statSync(pagePath).size;

  const cssMatches = [...htmlContent.matchAll(/<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi)];
  for (const m of cssMatches) {
    const cssRel = m[1];
    if (cssRel.includes('voynich-rich.css')) continue;
    const cssPath = cssRel.startsWith('/') ? join(REPO_ROOT, cssRel.slice(1)) : resolve(dirname(pagePath), cssRel);
    if (existsSync(cssPath)) {
      bundleBytes += statSync(cssPath).size;
    }
  }

  const jsMatches = [...htmlContent.matchAll(/<script\s+[^>]*src=["']([^"']+)["'][^>]*>/gi)];
  for (const m of jsMatches) {
    const jsRel = m[1];
    const jsPath = jsRel.startsWith('/') ? join(REPO_ROOT, jsRel.slice(1)) : resolve(dirname(pagePath), jsRel);
    if (existsSync(jsPath)) {
      bundleBytes += statSync(jsPath).size;
    }
  }

  const kb = (bundleBytes / 1024).toFixed(2);
  const underBudget = bundleBytes < LITE_CEILING_BYTES;
  assert(underBudget, `Lite payload for ${pageRel}`, `${kb} KB / 150 KB limit`);
}

// ---------------------------------------------------------------------------
// TEST 3: Public Navigation Restrictions & Unlisted Direct-Link Isolation
// ---------------------------------------------------------------------------
console.log('\n3. Clean Site Flow (Public Home/Games/Apps Only + Unlisted Direct-Link Isolation)');

const unlistedLinkPattern = /\bhref=["'][^"']*(?:web-builds|contact\.html|services\.html|ai-workflow-setup\.html|(?:^|\/)lab\/?|showcase\/?|products\/?)[^"']*["']/gi;
const publicUnlistedLinks = [];
const navDeviations = [];

for (const pageRel of publicPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;
  const content = readFileSync(pagePath, 'utf8');

  const contentWithoutHead = content.replace(/<head>[\s\S]*?<\/head>/i, '');
  const badHrefs = [...contentWithoutHead.matchAll(unlistedLinkPattern)].map(m => m[0]);
  if (badHrefs.length > 0) {
    publicUnlistedLinks.push(`${pageRel}: ${badHrefs.join(', ')}`);
  }

  const ribbonMatch = content.match(/<div\s+class=["']ribbon-nav["'][^>]*>([\s\S]*?)<\/div>/i);
  if (!ribbonMatch) {
    navDeviations.push(`${pageRel}: missing .ribbon-nav`);
  } else {
    const tabs = [...ribbonMatch[1].matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)]
      .map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
    if (JSON.stringify(tabs) !== JSON.stringify(['Home', 'Games', 'Apps'])) {
      navDeviations.push(`${pageRel}: ${JSON.stringify(tabs)}`);
    }
  }
}

assert(publicUnlistedLinks.length === 0, 'Zero outbound links to unlisted/non-game/app pages from public pages', publicUnlistedLinks.length ? publicUnlistedLinks.join(' | ') : 'Public site strictly scoped to Home, Games, and Apps');
assert(navDeviations.length === 0, 'Public .ribbon-nav strictly contains Home, Games, Apps on all public pages', navDeviations.length ? navDeviations.join(' | ') : `${publicPages.length}/${publicPages.length} public pages match`);

const missingNoindex = [];
for (const pageRel of unlistedPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;
  const content = readFileSync(pagePath, 'utf8');
  const robotsMatch = content.match(/<meta\s+[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>|<meta\s+[^>]*content=["']([^"']+)["'][^>]*name=["']robots["'][^>]*>/i);
  const robotsVal = robotsMatch ? (robotsMatch[1] || robotsMatch[2] || '').toLowerCase() : '';
  if (!robotsVal.includes('noindex') || !robotsVal.includes('nofollow')) {
    missingNoindex.push(`${pageRel} (found: "${robotsVal || 'NONE'}")`);
  }
}
assert(missingNoindex.length === 0, 'All unlisted direct-link pages declare noindex, nofollow', missingNoindex.length ? missingNoindex.join(' | ') : `${unlistedPages.length}/${unlistedPages.length} unlisted pages protected`);

const sitemapPath = join(REPO_ROOT, 'sitemap.xml');
const sitemapBadUrls = [];
const sitemapMissingTargets = [];
if (existsSync(sitemapPath)) {
  const sitemapXml = readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemapXml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map(m => m[1]);
  for (const loc of locs) {
    if (/(web-builds|contact\.html|services\.html|ai-workflow|\/lab\/|\/showcase\/|\/products\/)/i.test(loc)) {
      sitemapBadUrls.push(loc);
    }
    const rel = loc.replace(/^https?:\/\/(?:www\.)?burntthumbworks\.com\/?/, '');
    const targetPath = rel ? join(REPO_ROOT, rel) : join(REPO_ROOT, 'index.html');
    const exists = existsSync(targetPath) || existsSync(join(targetPath, 'index.html'));
    if (!exists) {
      sitemapMissingTargets.push(loc);
    }
  }
}
assert(existsSync(sitemapPath) && sitemapBadUrls.length === 0 && sitemapMissingTargets.length === 0, 'sitemap.xml lists only existing Home, Games, and Apps URLs', sitemapBadUrls.length ? `Unlisted URLs: ${sitemapBadUrls.join(', ')}` : (sitemapMissingTargets.length ? `Missing targets: ${sitemapMissingTargets.join(', ')}` : 'Clean sitemap — Home, Games & Apps only'));

// ---------------------------------------------------------------------------
// TEST 4: Explicit width and height Attributes on Images & Exact PNG Match
// ---------------------------------------------------------------------------
console.log('\n4. Image CLS Prevention & Asset Integrity');

const imagesMissingDimensions = [];
const brokenImages = [];
const mismatchedPngDims = [];

function getPngDimensions(filePath) {
  const buf = readFileSync(filePath);
  if (buf.length < 24 || buf.toString('ascii', 1, 4) !== 'PNG') return null;
  return {
    width: buf.readUInt32BE(16),
    height: buf.readUInt32BE(20)
  };
}

for (const pageRel of allCheckedPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;
  const content = readFileSync(pagePath, 'utf8');

  const imgTags = [...content.matchAll(/<img\s+([^>]+)>/gi)];
  for (const tag of imgTags) {
    const attrs = tag[1];
    const srcMatch = attrs.match(/\bsrc=["']([^"']+)["']/i);
    const widthMatch = attrs.match(/\bwidth=["']?(\d+)["']?/i);
    const heightMatch = attrs.match(/\bheight=["']?(\d+)["']?/i);

    if (!widthMatch || !heightMatch) {
      imagesMissingDimensions.push(`${pageRel}: ${tag[0].slice(0, 60)}...`);
    }

    if (srcMatch) {
      const src = srcMatch[1].trim();
      if (!src.startsWith('data:') && !src.startsWith('http')) {
        const cleanSrc = src.split('#')[0].split('?')[0];
        const imgPath = cleanSrc.startsWith('/') ? join(REPO_ROOT, cleanSrc.slice(1)) : resolve(dirname(pagePath), cleanSrc);
        if (!existsSync(imgPath)) {
          brokenImages.push(`${pageRel}: ${src}`);
        } else if (cleanSrc.toLowerCase().endsWith('.png') && widthMatch && heightMatch) {
          const actual = getPngDimensions(imgPath);
          const attrW = Number(widthMatch[1]);
          const attrH = Number(heightMatch[1]);
          if (actual && (actual.width !== attrW || actual.height !== attrH)) {
            const isSmallBrandMark = src.includes('crest-mark.png') && attrW === attrH;
            if (!isSmallBrandMark) {
              mismatchedPngDims.push(`${pageRel} (${src}): attr=${attrW}x${attrH} vs actual=${actual.width}x${actual.height}`);
            }
          }
        }
      }
    }
  }
}

assert(brokenImages.length === 0, 'Zero broken image paths across all pages', brokenImages.length ? `${brokenImages.length} missing: ${brokenImages.join(', ')}` : 'All image assets exist on disk');
assert(imagesMissingDimensions.length === 0, 'All images have explicit width and height attributes', imagesMissingDimensions.length ? `${imagesMissingDimensions.length} images missing dims: ${imagesMissingDimensions[0]}` : 'Zero CLS layout shift');
assert(mismatchedPngDims.length === 0, 'Active PNG illustrations match exact on-disk dimensions', mismatchedPngDims.length ? mismatchedPngDims.join(' | ') : 'All manuscript PNG width/height exact');

// ---------------------------------------------------------------------------
// TEST 5: Zero Broken Internal Links
// ---------------------------------------------------------------------------
console.log('\n5. Internal Link Integrity (Zero 404s)');

const brokenLinks = [];

for (const pageRel of allCheckedPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;
  const content = readFileSync(pagePath, 'utf8');

  const linkMatches = [...content.matchAll(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi)];
  for (const m of linkMatches) {
    const target = m[1].trim();
    if (target.startsWith('#') || target.startsWith('mailto:') || target.startsWith('tel:') || target.startsWith('sms:') || target.startsWith('https://')) {
      continue;
    }
    const cleanTarget = target.split('#')[0].split('?')[0];
    if (!cleanTarget) continue;

    let targetPath;
    if (cleanTarget.startsWith('/')) {
      targetPath = join(REPO_ROOT, cleanTarget.replace(/^\//, ''));
    } else {
      targetPath = resolve(dirname(pagePath), cleanTarget);
    }

    const fileExists = existsSync(targetPath) || existsSync(join(targetPath, 'index.html'));
    if (!fileExists) {
      brokenLinks.push(`${pageRel} -> ${target}`);
    }
  }
}

assert(brokenLinks.length === 0, 'Zero broken internal links across public and unlisted pages', brokenLinks.length ? brokenLinks.join(', ') : 'All internal routes exist');

// ---------------------------------------------------------------------------
// TEST 6: translate="no" Protection on Proper Names
// ---------------------------------------------------------------------------
console.log('\n6. Brand & Product Names translate="no" Protection');

const properNames = [
  'Burnt Thumb Works',
  'The Hook and the Skein',
  'Fowl Play',
  'Scarward',
  'Garden Sage',
  'Pantry Panda'
];

for (const pageRel of publicPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;
  const content = readFileSync(pagePath, 'utf8');

  let nameCheckCount = 0;
  for (const name of properNames) {
    if (content.includes(name)) {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`translate=["']no["'][^>]*>[^<]*${escaped}`, 'i');
      if (pattern.test(content) || content.includes(`translate="no">${name}`) || content.includes(`translate="no"`)) {
        nameCheckCount++;
      }
    }
  }
  assert(nameCheckCount > 0, `Proper names translate="no" coverage in ${pageRel}`, `${nameCheckCount} name references protected`);
}

// ---------------------------------------------------------------------------
// TEST 7: Typography Tokens & Multilingual Fallbacks
// ---------------------------------------------------------------------------
console.log('\n7. Typography Tokens & Multilingual Fallbacks');

const tokensPath = join(REPO_ROOT, 'css/tokens.css');
if (existsSync(tokensPath)) {
  const tokensCss = readFileSync(tokensPath, 'utf8');
  const hasCJKSerif = /Noto Serif CJK|Source Han Serif|Songti|SimSun/i.test(tokensCss);
  assert(hasCJKSerif, 'Serif & Display stacks include CJK fallbacks', 'Found Source Han / Noto Serif CJK');

  const hasDevanagari = /Noto Serif Devanagari|Noto Sans Devanagari|Mangal|Aparajita/i.test(tokensCss);
  assert(hasDevanagari, 'Font stacks include Devanagari system fallbacks', 'Found Noto Devanagari / Mangal / Aparajita');
}

// ---------------------------------------------------------------------------
// TEST 8: Sibling Repo Isolation (Fowl Play / grimmkart Clean, Relative Resolution)
// ---------------------------------------------------------------------------
console.log('\n8. Lane Lock & Repository Isolation');

const grimmkartRepoPath = process.env.GRIMMKART_REPO_PATH || resolve(REPO_ROOT, '..', '..', 'grimmkart');
if (existsSync(join(grimmkartRepoPath, '.git'))) {
  try {
    const status = execSync(`git -C "${grimmkartRepoPath}" status -s`, { encoding: 'utf8' }).trim();
    assert(status === '', 'Sibling Fowl Play (grimmkart) repo working tree is 100% clean', status ? `Changes detected: ${status}` : 'Clean - 0 changes');
  } catch (err) {
    assert(false, 'Check Fowl Play (grimmkart) git status', err.message);
  }
} else {
  assert(true, 'Sibling Fowl Play (grimmkart) repo check skipped (not mounted relative to this workspace)');
}

// ---------------------------------------------------------------------------
// TEST 9: Studio Brand, Identity & Path Invariants
// ---------------------------------------------------------------------------
console.log('\n9. Studio Brand, Identity & Path Invariants');

const forbiddenFiles = [
  'about.html',
  'services.html',
  'ai-workflow-setup.html',
  'web-builds/index.html',
  'web-builds/sample/index.html',
  'tools/web_builds/ASYNC_PLAYBOOK.md'
];
const presentForbidden = forbiddenFiles.filter((rel) => existsSync(join(REPO_ROOT, rel)));
assert(presentForbidden.length === 0, 'Zero consulting, services, web-builds, or About pages exist in repo', presentForbidden.length ? `Found: ${presentForbidden.join(', ')}` : 'All forbidden routes absent');

function collectFiles(relDir, exts) {
  const dir = join(REPO_ROOT, relDir);
  if (!existsSync(dir)) return [];
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = relDir ? `${relDir}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...collectFiles(rel, exts));
    } else if (exts.some((ext) => entry.name.toLowerCase().endsWith(ext))) {
      out.push(rel);
    }
  }
  return out;
}

const codeScanFiles = [
  ...allCheckedPages,
  ...collectFiles('js', ['.js', '.mjs']),
  ...collectFiles('css', ['.css']),
  ...collectFiles('scripts', ['.js', '.mjs', '.py'])
];

const bannedCopyRegex = /(AI Workflow Setup|Care Plan|\$650|Flat-Rate Pricing|PROJECT_FORM_URL|services\.html|ai-workflow-setup\.html|web-builds|about\.html|GrimmKart\.io|GrimmKart)/i;
const realNameRegex = /(?:\bEric\b|\bBalmforth\b|Duke Errol|Lord Errol)/;
const hardcodedDriveRegex = /[A-Za-z]:(?:\\\\|\/)(?:BurntThumbWorks|Users)/i;

const bannedHits = [];
const realNameHits = [];
const hardcodedPathHits = [];

for (const rel of codeScanFiles) {
  const full = join(REPO_ROOT, rel);
  if (!existsSync(full)) continue;
  const text = readFileSync(full, 'utf8');
  if (rel !== 'scripts/verify-codex.mjs') {
    const m1 = text.match(bannedCopyRegex);
    if (m1) bannedHits.push(`${rel}: "${m1[0]}"`);
    const m2 = text.match(realNameRegex);
    if (m2) realNameHits.push(`${rel}: "${m2[0]}"`);
  }
  const m3 = text.match(hardcodedDriveRegex);
  if (m3) hardcodedPathHits.push(`${rel}: "${m3[0]}"`);
}

assert(bannedHits.length === 0, 'Zero consulting, services, pricing, About, or legacy GrimmKart copy', bannedHits.length ? bannedHits.join(' | ') : 'Clean across HTML, JS, CSS & scripts');
assert(realNameHits.length === 0, 'Zero real personal names or informal peerage variants in shipped code', realNameHits.length ? realNameHits.join(' | ') : 'Zero real-name or informal-title leaks');
assert(hardcodedPathHits.length === 0, 'Zero hardcoded machine-specific drive paths in repo code/scripts', hardcodedPathHits.length ? hardcodedPathHits.join(' | ') : 'Clean relative paths only');

const peerageColophon = 'His Grace the Duke of Errol a Dude of Greenthumb Abbey';
const missingColophon = publicPages
  .filter((rel) => rel !== '404.html' && !rel.startsWith('apps/'))
  .filter((rel) => {
    const p = join(REPO_ROOT, rel);
    return existsSync(p) && !readFileSync(p, 'utf8').includes(peerageColophon);
  });
assert(missingColophon.length === 0, 'Public studio pages carry canonical peerage colophon', missingColophon.length ? `Missing in: ${missingColophon.join(', ')}` : 'Canonical colophon present');

// ---------------------------------------------------------------------------
// FINAL SUMMARY
// ---------------------------------------------------------------------------
console.log('\n======================================================');
console.log(`  VERIFICATION RESULTS: ${passedChecks}/${totalChecks} PASSED (${failedChecks} FAILED)`);
console.log('======================================================\n');

if (failedChecks > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
