

export const FAQ = [
  {
    q: 'What is a shipping label cropper?',
    a: 'A shipping label cropper trims a marketplace PDF down to just the shipping label. Seller panels usually give you a full A4 page with the label plus an invoice or other details; the cropper keeps only the label so it can be printed on a label printer.',
  },
  {
    q: 'How do I crop a Flipkart shipping label?',
    a: 'Select Flipkart, drop your label PDF(s) into the tool and click Crop labels. The label position is detected automatically on every page. Then preview the result, download the cropped PDF, or copy the SKU picklist.',
  },
  {
    q: 'How do I crop a Meesho shipping label?',
    a: 'Select Meesho, drop your label PDF(s) into the tool and click Crop labels. The label is detected automatically and the invoice section below it is left out. Then preview, download the PDF, or copy the SKU picklist.',
  },
  {
    q: 'Can I crop multiple shipping label PDFs?',
    a: 'Yes. You can choose several PDF files at once. All their labels are cropped and combined into a single PDF, and you can optionally group them by SKU. Choose one platform (Flipkart or Meesho) per run.',
  },
  {
    q: 'Can I prepare labels for a 4x6 thermal printer?',
    a: 'Yes, that is what the tool is for. Each page of the output is just the label, with no margins or extra text, and the original text and barcodes are kept sharp. The pages keep the label’s original size, so in your print dialog choose your 4x6 (100x150mm) paper size and fit-to-page scaling.',
  },
  {
    q: 'Are my PDF files uploaded to a server?',
    a: 'No. Your PDFs are processed locally in your browser. They are not uploaded to a server.',
  },
  {
    q: 'Is this shipping label cropper free?',
    a: 'Yes. It is free to use, with no sign-up.',
  },
];

const FEATURES = [
  ['Flipkart and Meesho', 'Crop shipping label PDFs from both platforms.'],
  ['Multiple PDFs', 'Add several files at once and get one combined PDF.'],
  ['Automatic label detection', 'Finds the label position on every page.'],
  ['Manual crop adjustment', 'Fine-tune the crop area if a page needs it.'],
  ['Group by SKU', 'Sort labels by SKU to speed up packing.'],
  ['PDF preview', 'Check the cropped labels before you print.'],
  ['Download cropped PDF', 'Save the result as a single PDF file.'],
  ['Copy picklist', 'Copy the SKU and quantity list to your clipboard.'],
  ['Private by design', 'Processed in your browser, never uploaded.'],
];

// FAQPage structured data is generated from the same FAQ array, so it always matches the visible text.
const faqJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}).replace(/</g, '\\u003c');

export default function SeoSections() {
  return (
    <>
      <section className="info" aria-labelledby="how-heading">
        <h2 id="how-heading">How the shipping label cropper works</h2>
        <p>
          A shipping label cropper trims a marketplace PDF down to just the label. Choose Flipkart or Meesho,
          add your label PDFs, and click Crop labels. You get a PDF where every page is only the label, ready for
          4x6 (100x150mm) thermal printing.
        </p>
        <ol>
          <li>Select your platform, Flipkart or Meesho.</li>
          <li>Drop one or more label PDFs from your seller panel.</li>
          <li>Optionally group labels by SKU, then click Crop labels.</li>
          <li>Preview the PDF, download it, or copy the SKU picklist.</li>
        </ol>
        <h3>Flipkart and Meesho label PDFs</h3>
        <p>
          The tool understands the Flipkart and Meesho label layouts and finds the label on each page for you.
          Other marketplaces are not supported.
        </p>
        <h3>4x6 thermal label preparation</h3>
        <p>
          Cropped pages contain only the label, with the original text and barcodes kept sharp. They keep the
          label’s original size, so set your 4x6 paper size and fit-to-page scaling when you print on a thermal
          printer.
        </p>
        <h3>Private, browser-based processing</h3>
        <p>Your PDFs are processed locally in your browser. They are not uploaded to a server.</p>
      </section>

      <section className="info" aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <ul className="features">
          {FEATURES.map(([t, d]) => (
            <li key={t}><strong>{t}</strong> <span>{d}</span></li>
          ))}
        </ul>
      </section>

      <section className="info" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently asked questions</h2>
        {FAQ.map(({ q, a }) => (
          <div className="faq" key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </div>
        ))}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />
      </section>
    </>
  );
}
