// Post-build SEO check. Run after `npm run build`:  node scripts/verify-seo.mjs
// Verifies: all 20 target questions covered, routes built, unique metadata, canonicals, JSON-LD, internal links,
// anchors, sitemap, accordions, no external links or other marketplaces in the new content.
import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_PAGES } from '../src/seoPages.js';
import { Q } from '../src/seoQuestions.js';
import { ENGLISH_POSTS } from '../src/blogPosts.js';
import { ORIGIN } from '../src/site.js';

const dist = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const errors = [];
const warn = [];
const bad = (m) => errors.push(m);

const exists = (p) => access(p).then(() => true, () => false);
const routeFile = (path) => (path === '/' ? resolve(dist, 'index.html') : resolve(dist, path.slice(1), 'index.html'));

// 1. the 20 questions
const covered = new Set();
for (const p of ENGLISH_POSTS) (p.covers || []).forEach((n) => covered.add(n));
const faqSources = ['/', '/meesho-label-cropper', '/flipkart-label-cropper'];
const faqCovered = new Set();
for (const path of faqSources) for (const f of SEO_PAGES[path].faq || []) if (f.qid) faqCovered.add(f.qid);
for (const n of Object.keys(Q).map(Number)) {
  if (!covered.has(n) && !faqCovered.has(n)) bad(`Question ${n} is not covered: ${Q[n].q}`);
}
console.log(`Questions covered by an article: ${[...covered].sort((a, b) => a - b).join(', ')}`);
console.log(`Questions in the home/Meesho/Flipkart FAQ accordions: ${[...faqCovered].sort((a, b) => a - b).join(', ')}`);
for (const n of Object.keys(Q).map(Number)) {
  if (!faqCovered.has(n) && ![19, 20].includes(n) ) bad(`Question ${n} is missing from the hub FAQ sections`);
}

// 2. routes, metadata, links
const titles = new Map(); const descs = new Map();
const htmlByPath = {};
const anchorsByPath = {};
for (const [path, page] of Object.entries(SEO_PAGES)) {
  const file = routeFile(path);
  if (!(await exists(file))) { bad(`Missing built file for ${path}`); continue; }
  const html = await readFile(file, 'utf8');
  htmlByPath[path] = html;
  anchorsByPath[path] = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!title) bad(`${path}: no <title>`);
  if (!desc) bad(`${path}: no meta description`);
  if (canon !== page.canonical || !canon.startsWith(ORIGIN)) bad(`${path}: canonical is ${canon}`);
  if (titles.has(title)) bad(`${path}: duplicate title with ${titles.get(title)}`); titles.set(title, path);
  if (descs.has(desc)) bad(`${path}: duplicate description with ${descs.get(desc)}`); descs.set(desc, path);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) bad(`${path}: expected exactly one h1`);
  if (page.type === 'article') {
    if (title.length > 75) warn.push(`${path}: long title (${title.length})`);
    if (desc.length > 165) warn.push(`${path}: long description (${desc.length})`);
    const h2 = html.indexOf('<h2'); const h3 = html.indexOf('<h3');
    if (h3 >= 0 && h2 >= 0 && h3 < h2) bad(`${path}: h3 before first h2`);
  }
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!ld.length) bad(`${path}: no JSON-LD`);
  for (const m of ld) {
    try {
      const g = JSON.parse(m[1])['@graph'].map((x) => x['@type']);
      if (page.type === 'article' && !(g.includes('BlogPosting') && g.includes('BreadcrumbList'))) bad(`${path}: missing BlogPosting/BreadcrumbList`);
      if (page.faq?.length && !g.includes('FAQPage')) bad(`${path}: FAQ present but no FAQPage schema`);
    } catch { bad(`${path}: invalid JSON-LD`); }
  }
  if (page.faq?.length) {
    const n = (html.match(/<details class="faq-item"/g) || []).length;
    if (n !== page.faq.length) bad(`${path}: ${n} accordion items rendered, expected ${page.faq.length}`);
    if (!/<summary><h3>/.test(html)) bad(`${path}: accordion summary markup missing`);
  }
}

// 3. internal links and anchors, no external links in page body
for (const [path, html] of Object.entries(htmlByPath)) {
  const body = html.slice(html.indexOf('<div id="root">'));
  for (const m of body.matchAll(/<a [^>]*href="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, '&');
    if (/^https?:\/\//.test(href)) { if (!href.startsWith(ORIGIN)) bad(`${path}: external link ${href}`); continue; }
    if (href.startsWith('#')) { if (!anchorsByPath[path].has(href.slice(1))) bad(`${path}: missing anchor ${href}`); continue; }
    const [p, hash] = href.split('#');
    const target = p === '' ? path : p;
    if (!SEO_PAGES[target]) { bad(`${path}: broken internal link ${href}`); continue; }
    if (hash && anchorsByPath[target] && !anchorsByPath[target].has(hash) && !['label-tool', 'marketplace-guides'].includes(hash)) bad(`${path}: missing anchor ${href}`);
  }
}

// 4. sitemap
const sitemap = await readFile(resolve(dist, 'sitemap.xml'), 'utf8');
for (const page of Object.values(SEO_PAGES)) if (!sitemap.includes(`<loc>${page.canonical}</loc>`)) bad(`sitemap.xml missing ${page.canonical}`);

// 5. scope guard on the new guide content
const SCOPE = /amazon|glowroad|ajio|myntra|shopsy|jiomart/i;
for (const p of ENGLISH_POSTS.filter((x) => x.covers)) if (SCOPE.test(JSON.stringify(p))) bad(`${p.path}: mentions another marketplace`);

console.log(`Pages checked: ${Object.keys(htmlByPath).length}`);
warn.forEach((w) => console.log('WARN', w));
if (errors.length) { errors.forEach((e) => console.log('FAIL', e)); process.exit(1); }
console.log('All SEO checks passed.');
