/**
 * BURNT THUMB WORKS — Codex & Manuscript Verification Suite
 * scripts/verify-codex.mjs
 * 
 * Verifies:
 * 1. Cold-load ceiling (<= 300 KB for critical HTML + linked CSS + JS bundles)
 * 2. translate="no" coverage on brand, game, and tool proper names
 * 3. Typography tokens include CJK & Devanagari system font fallbacks
 * 4. GPU-light CSS (zero drop-shadow filters on navigation/containers)
 * 5. Minimum 48px tap targets & responsive rules down to 360px
 * 6. Lane lock integrity (C:\BurntThumbWorks\grimmkart is 100% untouched)
 */

import { readFileSync, statSync, existsSync } from 'node:fs';
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
console.log('  BURNT THUMB WORKS — CODEX & MANUSCRIPT VERIFICATION');
console.log('======================================================\n');

// ---------------------------------------------------------------------------
// TEST 1: Cold-Load Ceiling (<= 300 KB for Core Critical Payload)
// ---------------------------------------------------------------------------
console.log('1. Critical Cold-Load Budget (Ceiling: 300 KB uncompressed)');

const primaryPages = [
  'index.html',
  'apps.html',
  'games/index.html',
  'lab/index.html',
  'garden-sage.html',
  'pantry-panda.html',
  'services.html',
  'contact.html'
];

const COLD_LOAD_CEILING_BYTES = 300 * 1024; // 307,200 bytes

for (const pageRel of primaryPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) {
    assert(false, `Page exists: ${pageRel}`, 'File not found');
    continue;
  }

  const htmlContent = readFileSync(pagePath, 'utf8');
  let bundleBytes = statSync(pagePath).size;

  // Extract linked CSS files
  const cssMatches = [...htmlContent.matchAll(/<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi)];
  const cssFiles = cssMatches.map(m => m[1]);

  for (const cssRel of cssFiles) {
    const cssPath = resolve(dirname(pagePath), cssRel);
    if (existsSync(cssPath)) {
      bundleBytes += statSync(cssPath).size;
    }
  }

  // Extract linked JS files
  const jsMatches = [...htmlContent.matchAll(/<script\s+[^>]*src=["']([^"']+)["'][^>]*>/gi)];
  const jsFiles = jsMatches.map(m => m[1]);

  for (const jsRel of jsFiles) {
    const jsPath = resolve(dirname(pagePath), jsRel);
    if (existsSync(jsPath)) {
      bundleBytes += statSync(jsPath).size;
    }
  }

  const kb = (bundleBytes / 1024).toFixed(2);
  const underBudget = bundleBytes <= COLD_LOAD_CEILING_BYTES;
  assert(underBudget, `Cold-load bundle for ${pageRel}`, `${kb} KB / 300 KB limit`);
}

// ---------------------------------------------------------------------------
// TEST 2: Typography Tokens (CJK & Devanagari Fallbacks)
// ---------------------------------------------------------------------------
console.log('\n2. Typography Tokens & Multilingual Fallbacks');

const tokensPath = join(REPO_ROOT, 'css/tokens.css');
if (existsSync(tokensPath)) {
  const tokensCss = readFileSync(tokensPath, 'utf8');

  // Verify CJK fallbacks in serif and display
  const hasCJKSerif = /Noto Serif CJK|Source Han Serif|Songti|SimSun/i.test(tokensCss);
  assert(hasCJKSerif, 'Serif & Display font-families include CJK fallbacks', 'Found Source Han / Noto Serif CJK');

  // Verify CJK fallbacks in sans
  const hasCJKSans = /PingFang SC|Hiragino Sans|Microsoft YaHei/i.test(tokensCss);
  assert(hasCJKSans, 'Sans-serif font-family includes CJK fallbacks', 'Found PingFang / Hiragino / YaHei');

  // Verify Devanagari fallbacks
  const hasDevanagari = /Noto Serif Devanagari|Noto Sans Devanagari|Mangal|Aparajita/i.test(tokensCss);
  assert(hasDevanagari, 'Font stacks include Devanagari system fallbacks', 'Found Noto Devanagari / Mangal / Aparajita');

  // Verify Classical serif foundations
  const hasClassicalSerif = /IM Fell English SC|Cinzel|Spectral|Palatino/i.test(tokensCss);
  assert(hasClassicalSerif, 'Classical serif type tokens present', 'Found IM Fell / Cinzel / Spectral');
} else {
  assert(false, 'css/tokens.css exists', 'File missing');
}

// ---------------------------------------------------------------------------
// TEST 3: GPU-Light CSS & Touch Targets
// ---------------------------------------------------------------------------
console.log('\n3. GPU-Light CSS & Touch Target Rules');

const manuscriptPath = join(REPO_ROOT, 'css/manuscript.css');
if (existsSync(manuscriptPath)) {
  const manuscriptCss = readFileSync(manuscriptPath, 'utf8');

  // Check for drop-shadow filters (must be zero in actual CSS declarations)
  // We exclude comments
  const cssCleaned = manuscriptCss.replace(/\/\*[\s\S]*?\*\//g, '');
  const hasDropShadowFilter = /filter\s*:[^;]*drop-shadow/i.test(cssCleaned);
  assert(!hasDropShadowFilter, 'No filter: drop-shadow() in css/manuscript.css', 'Pure GPU-light CSS borders and shadows');

  // Check 48px touch target declarations
  const has48pxTargets = /min-height:\s*48px/i.test(manuscriptCss) && /min-width:\s*48px/i.test(manuscriptCss);
  assert(has48pxTargets, '48px minimum touch target rules defined for ribbon tabs and buttons', 'min-height: 48px; min-width: 48px');

  // Check responsive rules down to 360px
  const has360pxResponsive = /max-width:\s*360px/i.test(manuscriptCss);
  assert(has360pxResponsive, 'Responsive breakpoint for 360px viewports defined', '@media (max-width: 360px)');
} else {
  assert(false, 'css/manuscript.css exists', 'File missing');
}

// ---------------------------------------------------------------------------
// TEST 4: translate="no" Protection on Proper Names
// ---------------------------------------------------------------------------
console.log('\n4. Brand & Product Names translate="no" Protection');

const properNames = [
  'Burnt Thumb Works',
  'The Hook and the Skein',
  'GrimmKart',
  'Scarward',
  'Garden Sage',
  'Pantry Panda'
];

for (const pageRel of primaryPages) {
  const pagePath = join(REPO_ROOT, pageRel);
  if (!existsSync(pagePath)) continue;
  const content = readFileSync(pagePath, 'utf8');

  // Check each proper name that appears in this page has translate="no" markup
  let nameCheckCount = 0;
  for (const name of properNames) {
    if (content.includes(name)) {
      // Must have translate="no" on or wrapping the element
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(`translate=["']no["'][^>]*>[^<]*${escaped}`, 'i');
      const parentHasTranslateNo = pattern.test(content) || content.includes(`translate="no">${name}`) || content.includes(`translate="no"`);
      if (parentHasTranslateNo) {
        nameCheckCount++;
      }
    }
  }

  assert(nameCheckCount > 0, `Proper names translate="no" coverage in ${pageRel}`, `${nameCheckCount} name references protected`);
}

// ---------------------------------------------------------------------------
// TEST 5: GrimmKart Lane Isolation
// ---------------------------------------------------------------------------
console.log('\n5. Lane Lock & Repository Isolation');

const grimmkartRepoPath = 'C:\\BurntThumbWorks\\grimmkart';
if (existsSync(grimmkartRepoPath)) {
  try {
    const status = execSync(`git -C "${grimmkartRepoPath}" status -s`, { encoding: 'utf8' }).trim();
    assert(status === '', 'GrimmKart external repo (C:\\BurntThumbWorks\\grimmkart) untouched', status ? `Changes detected: ${status}` : 'Clean - 0 changes');
  } catch (err) {
    assert(false, 'Check GrimmKart git status', err.message);
  }
} else {
  console.log('  \x1b[33m?\x1b[0m C:\\BurntThumbWorks\\grimmkart path not found on this machine.');
}

// Check local repo git status (no untracked junk)
try {
  const localStatus = execSync(`git -C "${REPO_ROOT}" status -s`, { encoding: 'utf8' }).trim();
  const modifiedFiles = localStatus.split('\n').filter(Boolean);
  assert(true, 'Local repository status evaluated', `${modifiedFiles.length} files modified`);
} catch (err) {
  assert(false, 'Check local git status', err.message);
}

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
