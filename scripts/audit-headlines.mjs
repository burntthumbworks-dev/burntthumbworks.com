import fs from 'fs';
import path from 'path';

const base = 'C:/BurntThumbWorks/Websites/BurntThumbWorks';

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', 'play', 'demo', '.git', 'dist'].includes(entry.name)) walk(full);
    } else if (entry.name.endsWith('.html')) {
      const rel = path.relative(base, full);
      const c = fs.readFileSync(full, 'utf8');
      const runHeaders = (c.match(/class="[^"]*folio-running-header[^"]*"[^>]*>[\s\S]*?<\/div>/g) || []).length;
      const folioTags = (c.match(/class="[^"]*folio-tag[^"]*"[^>]*>[\s\S]*?<\/span>/g) || []).map(s => s.replace(/<[^>]+>/g, '').trim());
      const eyebrows = (c.match(/class="[^"]*eyebrow[^"]*"[^>]*>[\s\S]*?<\/p>/g) || []).map(s => s.replace(/<[^>]+>/g, '').trim());
      const cardTags = (c.match(/<span class="tag">[\s\S]*?<\/span>/g) || []).map(s => s.replace(/<[^>]+>/g, '').trim());
      console.log(`=== ${rel} ===`);
      if (runHeaders) console.log(`  running-headers (${runHeaders})`);
      if (folioTags.length) console.log(`  folio-tags:`, folioTags);
      if (eyebrows.length) console.log(`  eyebrows:`, eyebrows);
      if (cardTags.length) console.log(`  card-tags:`, cardTags);
    }
  }
}

walk(base);
