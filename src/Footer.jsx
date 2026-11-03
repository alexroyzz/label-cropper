import { SITE_NAME } from "./site.js";
import { TOOL_LINKS, COMPANY_LINKS, LEGAL_LINKS, CONTACT } from "./footerData.js";

// Same "layers" mark as the navbar logo in App.jsx.
function LogoMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

function LinkList({ items }) {
  return (
    <ul className="footer-links">
      {items.map((l) => (
        <li key={l.href}>
          <a href={l.href}>{l.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand" href="/">
            <span className="brand-mark">
              <LogoMark />
            </span>
            <span>{SITE_NAME}</span>
          </a>
          <p>Free shipping label cropper for Meesho and Flipkart sellers. Crop PDF labels for 4x6 thermal printing in your browser, with no signup and no upload.</p>
          <a className="button-primary footer-cta" href="/#label-tool">
            Crop a label free
          </a>
        </div>

        <nav className="footer-col" aria-labelledby="footer-tools">
          <h2 id="footer-tools">Cropper Tools</h2>
          <LinkList items={TOOL_LINKS} />
        </nav>

        <nav className="footer-col" aria-labelledby="footer-company">
          <h2 id="footer-company">Company</h2>
          <LinkList items={COMPANY_LINKS} />
        </nav>

        <nav className="footer-col" aria-labelledby="footer-extra">
          <h2 id="footer-extra">Support</h2>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 {SITE_NAME}. All Rights Reserved.</p>
        <div className="footer-bottom-end">
          {LEGAL_LINKS.length > 0 && (
            <nav aria-label="Legal">
              {LEGAL_LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
              <a href={`mailto:${CONTACT.email}`}>Support</a>
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}
