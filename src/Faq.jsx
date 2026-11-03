import Rich from "./Rich.jsx";

// Accessible accordion built on native <details>/<summary>: keyboard operable, announced by screen readers,
// works without JavaScript and keeps every answer in the prerendered HTML.
// items: [{ q, a, lang? }]. `a` may hold several paragraphs separated by a blank line and [text](/path) links.
export default function FaqAccordion({ items, id }) {
  return (
    <div className="faq-acc" id={id}>
      {items.map(({ q, a, lang }) => (
        <details className="faq-item" key={q} lang={lang}>
          <summary>
            <h3>{q}</h3>
          </summary>
          <div className="faq-body">
            {a.split("\n\n").map((para, i) => (
              <p key={i}>
                <Rich text={para} />
              </p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
