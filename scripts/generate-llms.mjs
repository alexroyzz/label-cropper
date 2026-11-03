// Generates public/llms.txt and public/llms-full.txt from the site's own page data.
// Every link points at https://croplabelfree.online (the ORIGIN constant); no third-party URLs are emitted.
// Run: npm run llms   (re-run after adding pages, then commit the two generated files)
import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEO_PAGES } from '../src/seoPages.js';
import { ORIGIN } from '../src/site.js';
import { PLATFORMS, PLATFORM_ORDER } from '../src/platforms.js';
import { OTHER_LANGS } from '../src/langs/index.js';

const pub = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const abs = (s) => String(s).replace(/\]\((\/[^)]*)\)/g, (_, p) => `](${ORIGIN}${p})`);
const names = PLATFORM_ORDER.map((p) => PLATFORMS[p].name);
const pages = Object.entries(SEO_PAGES);
const en = pages.filter(([, p]) => p.type === 'article' && (!p.langCode || p.langCode === 'en'));
const hubs = pages.filter(([, p]) => p.type === 'bloglang');
const link = (title, url, d) => `- [${title}](${url})${d ? `: ${d}` : ''}`;

const llms = [
  '# Label Cropper',
  '',
  `> Free, browser-based shipping label cropper for ${names.join(' and ')} sellers. Crops label PDFs for 4x6 thermal printing, groups labels by SKU and copies a SKU picklist. PDFs are processed locally in the browser and are never uploaded.`,
  '',
  `Site: ${ORIGIN}/`,
  '',
  '## Tools',
  link('Label Cropper (home)', `${ORIGIN}/`, SEO_PAGES['/'].description),
  ...PLATFORM_ORDER.map((id) => link(`${PLATFORMS[id].name} label cropper`, `${ORIGIN}${PLATFORMS[id].path}`, PLATFORMS[id].description)),
  '',
  '## Guides',
  link('How to crop a shipping label PDF online', `${ORIGIN}/how-to-crop-shipping-labels`, SEO_PAGES['/how-to-crop-shipping-labels'].description),
  link('Shipping label guides (blog index)', `${ORIGIN}/blog`, ''),
  ...en.map(([path, p]) => link(p.post.title, `${ORIGIN}${path}`, p.post.description)),
  '',
  '## Guides in other languages',
  ...hubs.map(([path, p]) => link(p.h1, `${ORIGIN}${path}`, '')),
  '',
  '## Optional',
  link('Sitemap', `${ORIGIN}/sitemap.xml`, ''),
  link('Full content for AI agents', `${ORIGIN}/llms-full.txt`, ''),
  '',
].join('\n');

const body = (post) => (post.sections || []).flatMap((s) => [
  `### ${s.h}`,
  ...(s.p || []).map(abs),
  ...(s.ol || []).map((x, i) => `${i + 1}. ${abs(x)}`),
  ...(s.ul || []).map((x) => `- ${abs(x)}`),
  '',
]);
const faq = (list) => (list && list.length ? ['### FAQ', ...list.flatMap(({ q, a }) => [`**${q}**`, a, ''])] : []);

const full = [
  '# Label Cropper: full content',
  '',
  `> ${SEO_PAGES['/'].description}`,
  '',
  `Canonical site: ${ORIGIN}/ . All pages below are first-party pages of this site.`,
  '',
  `## Home: ${SEO_PAGES['/'].h1}`, `URL: ${ORIGIN}/`, '', SEO_PAGES['/'].intro, '', ...faq(SEO_PAGES['/'].faq),
  ...PLATFORM_ORDER.flatMap((id) => { const pg = SEO_PAGES[PLATFORMS[id].path]; return [`## ${pg.h1}`, `URL: ${pg.canonical}`, '', pg.intro, '', ...faq(pg.faq)]; }),
  `## ${SEO_PAGES['/how-to-crop-shipping-labels'].h1}`, `URL: ${ORIGIN}/how-to-crop-shipping-labels`, '', SEO_PAGES['/how-to-crop-shipping-labels'].intro, '',
  ...en.flatMap(([path, p]) => [`## ${p.post.title}`, `URL: ${ORIGIN}${path}`, '', abs(p.post.intro || p.post.description), '', ...body(p.post), ...faq(p.post.faq)]),
  '## Guides in other languages', ...hubs.map(([path, p]) => `- ${p.h1}: ${ORIGIN}${path}`), '',
].join('\n');

await writeFile(resolve(pub, 'llms.txt'), llms);
await writeFile(resolve(pub, 'llms-full.txt'), full);
console.log(`llms.txt ${llms.length} bytes, llms-full.txt ${full.length} bytes`);
