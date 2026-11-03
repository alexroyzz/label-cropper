import { ENGLISH_POSTS, LOCAL_POSTS, getPost } from "./blogPosts.js";
import Rich from "./Rich.jsx";
import FaqAccordion from "./Faq.jsx";
import CropFigure from "./Figures.jsx";
import { LANGS, LANG_BY_CODE, OTHER_LANGS } from "./langs/index.js";
import Footer from "./Footer.jsx";
import { PLATFORMS } from "./platforms.js";
import { hubPath, pathFor } from "./guides.js";

// Paragraphs, lists, an optional illustration and optional h3 sub-sections of one article section.
function Blocks({ s }) {
  return (
    <>
      {s.p && s.p.map((t, k) => (
        <p key={k}>
          <Rich text={t} />
        </p>
      ))}
      {s.note && (
        <p className="note">
          <Rich text={s.note} />
        </p>
      )}
      {s.fig && <CropFigure {...s.fig} />}
      {s.ul && (
        <ul>
          {s.ul.map((t, k) => (
            <li key={k}>
              <Rich text={t} />
            </li>
          ))}
        </ul>
      )}
      {s.ol && (
        <ol>
          {s.ol.map((t, k) => (
            <li key={k}>
              <Rich text={t} />
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

function Header() {
  return (
    <nav className="topbar" aria-label="Main navigation">
      <a className="brand" href="/">
        <span className="brand-mark">LC</span>
        <span>Label Cropper</span>
      </a>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/meesho-label-cropper">Meesho Cropper</a>
        <a href="/flipkart-label-cropper">Flipkart Cropper</a>
        <a href="/how-to-crop-shipping-labels">How-to Guide</a>
        <a href="/blog" className="active">
          Blog
        </a>
      </div>
      <div className="nav-end">
        <a href="/#label-tool" className="nav-cta">
          Free Tool
        </a>
      </div>
    </nav>
  );
}

function LangLinks({ platform, current }) {
  return (
    <nav className="lang-switch" aria-label="Languages">
      {LANGS.map((l) => (
        <a
          key={l.code}
          href={platform ? pathFor(l, platform) : l.code === "en" ? "/blog" : hubPath(l)}
          hrefLang={l.hreflang}
          lang={l.hreflang}
          aria-current={l.code === current ? "true" : undefined}
          className={l.code === current ? "on" : ""}
        >
          {l.native}
        </a>
      ))}
    </nav>
  );
}

function BlogIndex({ page }) {
  return (
    <section className="blog-wrap">
      <h1>{page.h1}</h1>
      <p className="blog-lead">{page.intro}</p>
      <h2>Read in your language</h2>
      <LangLinks current="en" />
      <div className="blog-grid">
        {ENGLISH_POSTS.map((p) => (
          <article key={p.slug} className="blog-card">
            <span className="blog-cat">{p.category}</span>
            <h2>
              <a href={`/blog/${p.slug}`}>{p.title}</a>
            </h2>
            <p>{p.description}</p>
            <div className="blog-meta">{p.minutes} min read</div>
            <a className="blog-more" href={`/blog/${p.slug}`} aria-label={`Read article: ${p.title}`}>
              Read article &rarr;
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function LangHub({ page }) {
  const lang = LANG_BY_CODE[page.langCode];
  const posts = [...LOCAL_POSTS, ...ENGLISH_POSTS].filter((p) => p.lang === lang.code);
  return (
    <section className="blog-wrap" lang={lang.hreflang} dir={lang.dir}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">{lang.ui.home}</a> / <a href="/blog">{lang.ui.blog}</a> / {lang.native}
      </nav>
      <h1>{page.h1}</h1>
      <p className="blog-lead">{page.intro}</p>
      <div className="blog-grid">
        {posts.map((p) => (
          <article key={p.slug} className="blog-card">
            <span className="blog-cat">{p.category}</span>
            <h2>
              <a href={p.path}>{p.title}</a>
            </h2>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
      <LangLinks current={lang.code} />
    </section>
  );
}

function Article({ post }) {
  const lang = LANG_BY_CODE[post.lang];
  const ui = lang.ui;
  const related = post.relatedLinks || (post.related || []).map((s) => ({ href: `/blog/${s}`, title: getPost(s).title }));
  const sid = (i) => `s${i + 1}`;
  return (
    <article className="blog-wrap article" lang={lang.hreflang} dir={lang.dir}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <a href="/">{ui.home}</a> / <a href="/blog">{ui.blog}</a>
        {lang.code !== "en" && (
          <>
            {" "}/ <a href={hubPath(lang)}>{lang.native}</a>
          </>
        )}
      </nav>
      <span className="blog-cat">{post.category}</span>
      <h1>{post.title}</h1>
      {post.summary && <p className="blog-summary">{post.summary}</p>}
      <div className="blog-meta">
        {post.minutes} {ui.minRead} &middot; {ui.published}{" "}
        <time dateTime={post.date}>{post.date}</time>
        {post.updated && post.updated !== post.date && (
          <>
            {" "}&middot; Updated <time dateTime={post.updated}>{post.updated}</time>
          </>
        )}
      </div>
      <p className="blog-lead">
        <Rich text={post.intro} />
      </p>
      {post.platform && (
        <div className="lang-box">
          <strong>{ui.readIn}</strong>
          <LangLinks platform={post.platform} current={lang.code} />
        </div>
      )}
      <nav className="toc" aria-label={ui.toc}>
        <strong>{ui.toc}</strong>
        <ul>
          {post.sections.map((s, i) => (
            <li key={i}>
              <a href={`#${s.id || sid(i)}`}>{s.h}</a>
            </li>
          ))}
          {post.faq && post.faq.length > 0 && (
            <li>
              <a href="#faq">{ui.faqH}</a>
            </li>
          )}
        </ul>
      </nav>
      {post.sections.map((s, i) => (
        <section key={i} lang={s.lang}>
          <h2 id={s.id || sid(i)}>{s.h}</h2>
          <Blocks s={s} />
          {s.sub && s.sub.map((x, j) => (
            <div key={j}>
              <h3>{x.h}</h3>
              <Blocks s={x} />
            </div>
          ))}
        </section>
      ))}
      {post.faq && post.faq.length > 0 && (
        <section className="faq" aria-labelledby="faq">
          <h2 id="faq">{ui.faqH}</h2>
          <FaqAccordion items={post.faq} />
        </section>
      )}
      {post.resources && post.resources.length > 0 && (
        <section>
          <h2 id="further-resources">Further resources</h2>
          <ul>
            {post.resources.map(([t, u, d]) => (
              <li key={u}>
                <a href={u}>
                  {t}
                </a>{" "}
                &ndash; {d}
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="cta-box">
        <strong>{ui.ctaText}</strong>{" "}
        <a className="button-primary" href={post.cta || (post.platform ? PLATFORMS[post.platform].path : "/#label-tool")}>
          {ui.ctaBtn}
        </a>
      </section>
      <section>
        <h2>{post.relatedH || (post.platform ? ui.relatedH : "Related articles")}</h2>
        <ul>
          {related.map((r) => (
            <li key={r.href}>
              <a href={r.href}>{r.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default function BlogPage({ page }) {
  return (
    <main className="app-shell">
      <Header />
      {page.type === "blog" && <BlogIndex page={page} />}
      {page.type === "bloglang" && <LangHub page={page} />}
      {page.type === "article" && <Article post={page.post} />}
      <Footer />
    </main>
  );
}
