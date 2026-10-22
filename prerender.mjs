import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { SEO_PAGES } from './src/seoPages.js';
import { serializeSeoSchema } from './src/seoSchema.js';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const dist = resolve(root, 'dist');
const indexTemplate = await readFile(resolve(dist, 'index.html'), 'utf8');
const vite = await createServer({
  configFile: resolve(root, 'vite.config.js'),
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function replaceMeta(html, attribute, key, value) {
  const selector = `<meta ${attribute}="${key}" content="`;
  const start = html.indexOf(selector);
  if (start < 0) throw new Error(`Could not find metadata for ${key}`);
  const contentStart = start + selector.length;
  const contentEnd = html.indexOf('"', contentStart);
  if (contentEnd < 0) throw new Error(`Could not parse metadata for ${key}`);
  return `${html.slice(0, contentStart)}${escapeHtml(value)}${html.slice(contentEnd)}`;
}

function withPageMetadata(template, page) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = replaceMeta(html, 'name', 'description', page.description);
  html = replaceMeta(html, 'property', 'og:title', page.title);
  html = replaceMeta(html, 'property', 'og:description', page.description);
  html = replaceMeta(html, 'property', 'og:url', page.canonical);
  html = replaceMeta(html, 'name', 'twitter:title', page.title);
  html = replaceMeta(html, 'name', 'twitter:description', page.description);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${escapeHtml(page.canonical)}" />`);
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${serializeSeoSchema(page)}</script>`);
  return html;
}

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  for (const [pathname, page] of Object.entries(SEO_PAGES)) {
    const rendered = render(pathname);
    const html = withPageMetadata(indexTemplate, page).replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
    if (!html.includes(rendered)) throw new Error(`Could not render the ${pathname} route`);
    const output = pathname === '/' ? resolve(dist, 'index.html') : resolve(dist, pathname.slice(1), 'index.html');
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
  }
} finally {
  await vite.close();
}
