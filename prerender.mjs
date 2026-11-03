import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { SEO_PAGES } from './src/seoPages.js';
import { serializeSeoSchema } from './src/seoSchema.js';
import { ORIGIN } from './src/site.js';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const dist = resolve(root, 'dist');
const indexTemplate = await readFile(resolve(dist, 'index.html'), 'utf8');
const vite = await createServer({
  configFile: resolve(root, 'vite.config.js'),
  root,
  optimizeDeps: { noDiscovery: true, include: [] },
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

function clearRootContent(html) {
  const rootStart = html.indexOf('<div id="root">');
  if (rootStart < 0) throw new Error('Could not find the React root element');
  const contentStart = rootStart + '<div id="root">'.length;
  const divTags = /<\/?div\b[^>]*>/gi;
  divTags.lastIndex = contentStart;
  let depth = 1;
  let match;
  while ((match = divTags.exec(html))) {
    if (match[0].startsWith('</')) depth -= 1;
    else if (!match[0].endsWith('/>')) depth += 1;
    if (depth === 0) return `${html.slice(0, contentStart)}${html.slice(match.index)}`;
  }
  throw new Error('Could not find the end of the React root element');
}

function withPageMetadata(template, page) {
  const socialTitle = page.ogTitle || page.title;
  const socialDescription = page.ogDescription || page.description;
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = replaceMeta(html, 'name', 'description', page.description);
  html = replaceMeta(html, 'property', 'og:title', socialTitle);
  html = replaceMeta(html, 'property', 'og:description', socialDescription);
  html = replaceMeta(html, 'property', 'og:url', page.canonical);
  html = replaceMeta(html, 'name', 'twitter:title', socialTitle);
  html = replaceMeta(html, 'name', 'twitter:description', socialDescription);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${escapeHtml(page.canonical)}" />`);
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${escapeHtml(page.lang || 'en')}"${page.dir === 'rtl' ? ' dir="rtl"' : ''}`);
  if (page.locale) html = replaceMeta(html, 'property', 'og:locale', page.locale);
  if (page.alternates) {
    const links = page.alternates.map((a) => `<link rel="alternate" hreflang="${escapeHtml(a.hreflang)}" href="${escapeHtml(a.href)}" />`).join('\n    ');
    html = html.replace(/(<link rel="canonical" href="[^"]*"\s*\/>)/, `$1\n    ${links}`);
  }
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${serializeSeoSchema(page)}</script>`);
  return html;
}

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const pageTemplate = clearRootContent(indexTemplate);
  for (const [pathname, page] of Object.entries(SEO_PAGES)) {
    const rendered = render(pathname);
    const html = withPageMetadata(pageTemplate, page).replace('<div id="root"></div>', () => `<div id="root">${rendered}</div>`);
    if (!html.includes(rendered)) throw new Error(`Could not render the ${pathname} route`);
    const output = pathname === '/' ? resolve(dist, 'index.html') : resolve(dist, pathname.slice(1), 'index.html');
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
  }
  const urls = Object.values(SEO_PAGES).map((page) => {
    const alt = (page.alternates || []).map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('\n');
    const mod = page.post ? `\n    <lastmod>${page.post.updated || page.post.date}</lastmod>` : '';
    return `  <url>\n    <loc>${page.canonical}</loc>${mod}${alt ? '\n' + alt : ''}\n  </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  await writeFile(resolve(dist, 'sitemap.xml'), sitemap);
  await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
} finally {
  await vite.close();
}
