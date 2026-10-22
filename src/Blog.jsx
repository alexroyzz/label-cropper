import { POSTS, getPost } from './blogPosts.js';

const isExt = (h) => /^https?:/.test(h);
// Renders [text](url) links inside a string.
function Rich({ text }) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <a key={i} href={m[2]}>{m[1]}</a> : part;
  });
}
const id = (h) => h.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function Header() {
  return (
    <nav className="topbar" aria-label="Main navigation">
      <a className="brand" href="/"><span className="brand-mark">LC</span><span>Label Cropper</span></a>
      <div className="nav-links"><a href="/">Home</a><a href="/meesho-label-cropper">Meesho Cropper</a><a href="/flipkart-label-cropper">Flipkart Cropper</a><a href="/how-to-crop-shipping-labels">How-to Guide</a><a href="/blog" className="active">Blog</a></div>
      <div className="nav-end"><a href="/#label-tool" className="nav-cta">Free Tool</a></div>
    </nav>
  );
}

export default function BlogPage({ page }) {
  const post = page.post;
  return (
    <main className="app-shell">
      <Header />
      {!post ? (
        <section className="blog-wrap">
          <h1>{page.h1}</h1>
          <p className="blog-lead">{page.intro}</p>
          <div className="blog-grid">{POSTS.map((p) => (
            <article key={p.slug} className="blog-card">
              <span className="blog-cat">{p.category}</span>
              <h2><a href={`/blog/${p.slug}`}>{p.title}</a></h2>
              <p>{p.description}</p>
              <div className="blog-meta">{p.minutes} min read</div>
              <a className="blog-more" href={`/blog/${p.slug}`} aria-label={`Read article: ${p.title}`}>Read article &rarr;</a>
            </article>))}</div>
        </section>
      ) : (
        <article className="blog-wrap article">
          <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog">Blog</a></nav>
          <span className="blog-cat">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="blog-meta">{post.minutes} min read &middot; Published <time dateTime={post.date}>{post.date}</time></div>
          <p className="blog-lead"><Rich text={post.intro} /></p>
          <nav className="toc" aria-label="Table of contents"><strong>In this guide</strong><ul>{post.sections.map((s) => <li key={s.h}><a href={`#${id(s.h)}`}>{s.h}</a></li>)}</ul></nav>
          {post.sections.map((s) => (
            <section key={s.h}>
              <h2 id={id(s.h)}>{s.h}</h2>
              {s.p && s.p.map((t, i) => <p key={i}><Rich text={t} /></p>)}
              {s.ul && <ul>{s.ul.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>}
              {s.ol && <ol>{s.ol.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ol>}
            </section>))}
          {post.resources.length > 0 && <section><h2 id="further-resources">Further resources</h2><p className="muted">Independent sites, not affiliated with Label Cropper.</p><ul>{post.resources.map(([t, u, d]) => <li key={u}><a href={u} target="_blank" rel="noopener noreferrer">{t}</a> &ndash; {d}</li>)}</ul></section>}
          <section className="cta-box"><strong>Ready to crop your labels?</strong> <a className="button-primary" href="/#label-tool">Open Label Cropper</a></section>
          <section><h2>Related articles</h2><ul>{post.related.map((s) => <li key={s}><a href={`/blog/${s}`}>{getPost(s).title}</a></li>)}</ul></section>
        </article>
      )}
      <footer className="site-footer"><a className="brand" href="/">Label Cropper</a><p><a href="/blog">All articles</a></p></footer>
    </main>
  );
}
