import { HOME_FAQ as FAQ } from "./faqData.js";
import FaqAccordion from "./Faq.jsx";

const FEATURES = [
  ["Meesho and Flipkart", "Built for Meesho and Flipkart shipping label PDFs."],
  ["Multiple PDFs", "Add several files at once and get one combined PDF."],
  ["Automatic label detection", "Finds the label position on every Meesho and Flipkart page."],
  ["Manual crop adjustment", "Fine-tune the crop area if a page needs it."],
  ["Group by SKU", "Sort labels by SKU to speed up packing."],
  ["PDF preview", "Check the cropped labels before you print."],
  ["Download cropped PDF", "Save the result as a single PDF file."],
  ["Copy picklist", "Copy the SKU and quantity list to your clipboard."],
  ["Private by design", "Processed in your browser, never uploaded."],
];

export default function SeoSections() {
  return (
    <>
      <section className="info" aria-labelledby="how-heading">
        <h2 id="how-heading">How the shipping label cropper works</h2>
        <p>
          This free shipping label cropper trims a marketplace PDF down to just
          the label. Choose your marketplace, add your label PDFs, and click
          Crop labels. You get a PDF where every page is only the label, ready
          for 4x6 (100x150mm) thermal printing.
        </p>
        <ol>
          <li>Select your marketplace: Meesho or Flipkart.</li>
          <li>Drop one or more label PDFs from your seller panel.</li>
          <li>Optionally group labels by SKU, then click Crop labels.</li>
          <li>Preview the PDF, download it, or copy the SKU picklist.</li>
        </ol>
        <h3>Meesho and Flipkart label PDFs</h3>
        <p>
          Use it as a Meesho label cropper or Flipkart label cropper with
          automatic detection of the label on each page. If detection misses a
          page, set the crop area in Advanced crop settings and check the
          preview; that manual area is used as the fallback.
        </p>
        <h3>Who this tool is for</h3>
        <p>
          Marketplace sellers preparing orders can combine several supported
          PDFs, group labels by SKU, and copy a picklist before packing.
        </p>
        <h3>Crop a shipping label PDF online</h3>
        <p>
          Choose one platform per run and select unlocked label PDFs downloaded
          from its seller panel. The tool reads and processes files in your
          browser; it does not send PDF contents to a Label Cropper server.
        </p>
        <h3>4x6 thermal label preparation</h3>
        <p>
          Cropped pages contain only the label, with the original text and
          barcodes kept sharp. They keep the label’s original size, so set your
          4x6 paper size and fit-to-page scaling when you print on a thermal
          printer.
        </p>
        <h3>Private, browser-based processing</h3>
        <p>
          Your selected PDFs are read and cropped locally in your browser and
          are not uploaded to a Label Cropper server. The site still has to load
          in your browser, and your normal network provider or browser may
          handle connection data under its own policies.
        </p>
      </section>

      <section className="info" aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <ul className="features">
          {FEATURES.map(([t, d]) => (
            <li key={t}>
              <strong>{t}</strong> <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="info" id="marketplace-guides" aria-labelledby="platform-guides-heading">
        <h2 id="platform-guides-heading">Marketplace guides</h2>
        <p>
          Choose the guide for the label format you are preparing, or follow the
          general crop and print walkthrough.
        </p>
        <ul>
          <li>
            <a href="/meesho-label-cropper">
              Meesho label cropper: detection, invoice area, and print checks
            </a>
          </li>
          <li>
            <a href="/flipkart-label-cropper">
              Flipkart label cropper: crop and sort by SKU, print checks
            </a>
          </li>
          <li>
            <a href="/blog/meesho-label-cropper-guide">
              Meesho label cropper guide: features, limits, 4x6 and thermal printing
            </a>
          </li>
          <li>
            <a href="/blog/flipkart-label-cropper-guide">
              Flipkart label cropper guide: crop and sort by SKU
            </a>
          </li>
          <li>
            <a href="/blog/4x6-thermal-label-cropper-guide">
              4x6 thermal label cropper: what to look for
            </a>
          </li>
          <li>
            <a href="/blog/shipping-label-barcode-quality">
              Shipping label barcode quality and how to keep it
            </a>
          </li>
          <li>
            <a href="/blog">
              Guides in English, Hinglish, Hindi, Bengali, Marathi, Telugu, Tamil and more
            </a>
          </li>
          <li>
            <a href="/how-to-crop-shipping-labels">
              How to crop and check a shipping label PDF
            </a>
          </li>
        </ul>
      </section>

      <section className="info" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently asked questions</h2>
        <FaqAccordion items={FAQ} />
      </section>
    </>
  );
}
