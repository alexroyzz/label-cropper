function PageLink({ href, children }) {
  return <a href={href}>{children}</a>;
}

function MarketplaceContent({ platform, title }) {
  const isMeesho = platform === 'meesho';
  const name = isMeesho ? 'Meesho' : 'Flipkart';
  const guideHref = '/how-to-crop-shipping-labels';
  return (
    <article className="info landing-copy">
      <section aria-labelledby="market-how">
        <h2 id="market-how">How to crop a {name} shipping label PDF</h2>
        <ol>
          <li>Choose {name} above, then select one or more unlocked {name} label PDFs from your seller panel.</li>
          <li>Leave automatic detection on to look for the supported label layout on each page.</li>
          <li>Choose “Group labels by SKU” if you want the resulting pages sorted by the SKU text the tool can read.</li>
          <li>Select “Crop labels”, review the generated PDF in the preview, then download it.</li>
        </ol>
      </section>

      <section aria-labelledby="market-detection">
        <h2 id="market-detection">Detection, invoice area, and manual adjustment</h2>
        {isMeesho ? (
          <p>The Meesho detector looks for text such as “Customer Address” and “Product Details” and uses the “TAX INVOICE” heading, when present, to locate the lower edge of the label. The crop output keeps the detected label area and leaves the invoice below it out. If a page is not detected, the tool uses its fallback crop area; open “Fine tune crop area” to adjust that area and check the page in the preview.</p>
        ) : (
          <p>The Flipkart detector uses the “Not for resale” text anchor to locate the supported label area. The crop output contains that label area and does not include the invoice beneath it. If a page is not detected, the tool uses its fallback crop area; open “Fine tune crop area” to adjust that area and check the page in the preview.</p>
        )}
        <p>Automatic detection depends on the PDF’s embedded text and the supported page layout. If a seller PDF looks different or a page is reported as undetected, inspect the preview before printing. The tool processes one selected marketplace format per run.</p>
      </section>

      <section aria-labelledby="market-printing">
        <h2 id="market-printing">Preview and print the cropped PDF</h2>
        <p>The output keeps each crop at the detected label’s page size. In the print dialog, choose the matching label stock, such as 4 × 6 inch (100 × 150 mm), and check scaling. Print a sample page and confirm the barcode is readable before printing a full batch.</p>
        <p>For the full walkthrough, see <PageLink href={guideHref}>how to crop and check a shipping label PDF</PageLink>. You can also use the <PageLink href={isMeesho ? '/flipkart-label-cropper' : '/meesho-label-cropper'}>{isMeesho ? 'Flipkart label cropper' : 'Meesho label cropper'}</PageLink> for the other supported format.</p>
      </section>

      <section className="faq" aria-labelledby="market-faq">
        <h2 id="market-faq">{name} label cropper questions</h2>
        <h3>Which PDFs can I use?</h3>
        <p>Use an unlocked shipping label PDF from {name} that follows the layout this tool detects. Other marketplace formats are not supported by this {title} page.</p>
        <h3>Does the crop include the invoice?</h3>
        <p>No. The generated pages contain the cropped shipping label area. This tool does not preserve or attach the invoice as a separate page.</p>
        <h3>What if automatic detection misses a page?</h3>
        <p>The result reports undetected pages and uses the fallback crop area for those pages. Adjust the fine-tune values and inspect the preview before downloading or printing.</p>
        <h3>Are my label PDFs uploaded?</h3>
        <p>The application reads and processes the selected PDF files in your browser. It does not send the PDF contents to a Label Cropper server.</p>
      </section>
    </article>
  );
}

function TutorialContent() {
  return (
    <article className="info landing-copy">
      <section aria-labelledby="tutorial-steps">
        <h2 id="tutorial-steps">Steps to crop a supported label PDF</h2>
        <ol>
          <li>Select Flipkart or Meesho in the tool. Process one marketplace format per run.</li>
          <li>Choose one or more unlocked label PDFs downloaded from that seller panel.</li>
          <li>Keep automatic detection enabled, or turn it off if you want to use and adjust the manual crop area.</li>
          <li>Optionally group labels by SKU, then select “Crop labels”.</li>
          <li>Open the preview, check the cropped pages, and download the output when it looks right.</li>
        </ol>
      </section>

      <section aria-labelledby="tutorial-check">
        <h2 id="tutorial-check">Check the crop before printing</h2>
        <p>If the result says some pages were undetected, those pages use the fallback crop area. Expand “Fine tune crop area” to change the left, top, width, and height values as percentages of the page, then crop again and inspect the preview. The same manual area applies to each page that uses the fallback.</p>
        <p>Use the print dialog’s paper size to match the label stock. The cropped pages retain the label’s detected size; they are not automatically laid out as multiple labels on an A4 sheet. Print one sample and check that its address and barcode are visible and correctly scaled.</p>
      </section>

      <section aria-labelledby="tutorial-troubleshooting">
        <h2 id="tutorial-troubleshooting">Troubleshooting</h2>
        <h3>The PDF cannot be read</h3>
        <p>The app expects an unlocked PDF. If it is password protected, export or unlock a copy using a method you trust, then select that copy.</p>
        <h3>A page is cropped in the wrong place</h3>
        <p>Confirm the selected marketplace, leave detection on for supported layouts, and inspect the undetected count. Adjust the fallback crop area if the layout has changed. Separate Meesho and Flipkart files into different runs.</p>
        <h3>The SKU list shows UNKNOWN</h3>
        <p>The app reads SKU text from supported label content. If it cannot find a recognizable SKU in the PDF text, the label can still be cropped, but the picklist may show UNKNOWN for it.</p>
        <h3>The printed label looks too small or clipped</h3>
        <p>Choose the appropriate paper size and check the scale setting in the print dialog. Review the downloaded PDF page size and print a sample before running a batch.</p>
      </section>

      <section aria-labelledby="tutorial-links">
        <h2 id="tutorial-links">Choose a marketplace guide</h2>
        <ul>
          <li><PageLink href="/meesho-label-cropper">Meesho label cropper instructions and FAQs</PageLink></li>
          <li><PageLink href="/flipkart-label-cropper">Flipkart label cropper instructions and FAQs</PageLink></li>
        </ul>
        <p>PDF processing takes place in your browser; the app does not upload selected PDF contents to its server.</p>
      </section>
    </article>
  );
}

export default function SeoPageContent({ page }) {
  if (page.type === 'tutorial') return <TutorialContent />;
  return <MarketplaceContent platform={page.platform} title={page.title} />;
}
