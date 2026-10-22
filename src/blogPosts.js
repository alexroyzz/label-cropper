// Original articles. Dates are the day each article was added to the site.
const D = '2026-10-22';
export const BLOG_ORIGIN = 'https://label-cropper-two.vercel.app';
const LP = 'https://labelcroppro.in/blog/';

export const POSTS = [
  {
    slug: 'how-to-crop-meesho-shipping-label-pdf', category: 'Meesho', minutes: 4, date: D,
    title: 'How to Crop a Meesho Shipping Label PDF (Step by Step)',
    description: 'Crop a Meesho shipping label PDF in your browser: upload the file, check the detected crop, preview the result and download a print-ready PDF.',
    intro: 'A Meesho label PDF usually has the shipping label at the top of a larger page. Printing it as-is wastes paper, so most sellers crop each page down to the label first. This guide walks through doing that with the [Meesho label cropper](/meesho-label-cropper).',
    sections: [
      { h: 'Before you start', p: ['Download the label PDF from your Meesho supplier panel and keep it unedited. Cropping works best on the original file, because the tool reads the text on each page to find where the label sits. Scanned or screenshot PDFs have no readable text, so automatic detection may miss them.'] },
      { h: 'Steps', ol: ['Open the [Meesho label cropper](/meesho-label-cropper) and make sure Meesho is selected.', 'Drag your PDF onto the upload area, or choose it with Browse Files. You can add more than one PDF from the same marketplace.', 'Leave auto-detect on. The tool looks for the label on every page and crops to it.', 'Turn on Group labels by SKU only if you want labels sorted for packing. This also produces a SKU picklist you can copy.', 'Press Crop Labels, then open the preview.', 'If the preview looks right, download the cropped PDF.'] },
      { h: 'Check the crop before printing', p: ['Scroll through the preview and look at a few things on several pages, not just the first: the barcode is complete, the address block is not clipped, and no part of a neighbouring page is showing. If detection missed a page, the tool tells you, and falls back to the manual crop area under Advanced crop settings.', 'The cropped pages keep the original vector text and barcodes and are not resized, so the output page is exactly the size of the area that was cropped.'] },
      { h: 'Adjusting the crop manually', p: ['Open Advanced crop settings to change the Left, Top, Width and Height values, given as a percentage of the page. These are used when auto-detect is off or fails. Change one value at a time, crop again and compare the preview.'] },
      { h: 'Printing', p: ['Once you have the file, see [printing on a 4×6 thermal printer](/blog/print-shipping-labels-on-4x6-thermal-printer) or [printing on A4 paper](/blog/how-to-print-shipping-labels-on-a4-paper). If something prints too small or cut off, use the [printing problems guide](/blog/how-to-fix-shipping-label-printing-problems).'] },
    ],
    resources: [['E-Cropper Meesho tool', 'https://www.ecropper.in/crop/meesho', 'An alternative Meesho cropper with 4×6 output and SKU overlays.'], ['LabelCropPro: Meesho labels on a 4×6 printer', LP + 'print-meesho-labels-thermal-printer', 'A guide to printing Meesho labels with the invoice.']],
    related: ['how-to-crop-flipkart-shipping-label-pdf', 'print-shipping-labels-on-4x6-thermal-printer', 'shipping-label-pdf-privacy-and-security'],
  },
  {
    slug: 'how-to-crop-flipkart-shipping-label-pdf', category: 'Flipkart', minutes: 4, date: D,
    title: 'How to Crop Flipkart Shipping Label PDFs Without Cutting Off Details',
    description: 'Crop Flipkart shipping label PDFs online: check label boundaries, adjust margins manually when needed, and verify the output before printing.',
    intro: 'Flipkart label PDFs place a smaller label in the middle of a larger page, so a plain print leaves a lot of blank paper. The [Flipkart label cropper](/flipkart-label-cropper) trims each page to the label. The important part is checking the result.',
    sections: [
      { h: 'Upload and crop', ol: ['Open the [Flipkart label cropper](/flipkart-label-cropper) and select Flipkart.', 'Add your label PDF, or several PDFs from the same marketplace.', 'Keep auto-detect on and press Crop Labels.', 'Open the preview and review the pages.'] },
      { h: 'How boundaries are found', p: ['The tool reads the text on each page and uses it to locate the label box. That is why unedited seller-panel PDFs work best. Pages that are rotated or have an unusual origin are not auto-detected; those use the manual crop area instead, and the tool reports how many pages needed it.'] },
      { h: 'What to verify in the output', ul: ['The barcode and the tracking number are fully inside the page.', 'The delivery address and the order details are not clipped at any edge.', 'Pages that were not auto-detected look as good as the rest.', 'The number of cropped labels matches the number of orders you expected.'] },
      { h: 'Removing unwanted margins', p: ['If a crop leaves too much white space or touches the label edge, switch auto-detect off and tune the Left, Top, Width and Height percentages under Advanced crop settings. Keep a small safety margin: a label cropped right on its border can lose a line on some printers.'] },
      { h: 'Sorting for packing', p: ['Group labels by SKU sorts the cropped pages by SKU and gives you a picklist with quantities, which helps when many orders share a product.'] },
      { h: 'Next step', p: ['Print a single page first. The [thermal printing guide](/blog/print-shipping-labels-on-4x6-thermal-printer) and [troubleshooting guide](/blog/how-to-fix-shipping-label-printing-problems) cover the settings that matter. The general walkthrough is in [how to crop shipping labels](/how-to-crop-shipping-labels).'] },
    ],
    resources: [['LabelCropPro: printing at the right size', LP + 'print-settings', 'Explains scale, paper size and margins in common browsers.']],
    related: ['how-to-crop-meesho-shipping-label-pdf', 'how-to-fix-shipping-label-printing-problems', 'how-to-print-shipping-labels-on-a4-paper'],
  },
  {
    slug: 'print-shipping-labels-on-4x6-thermal-printer', category: 'Printing', minutes: 4, date: D,
    title: 'Printing Shipping Labels on a 4×6 Thermal Printer (100×150 mm)',
    description: 'Set up a 4x6 thermal printer for shipping labels: choose the right paper size, set scaling to 100%, remove margins and test the first label.',
    intro: 'A 4×6 inch label is about 100×150 mm, the standard size for thermal label rolls. Most print problems come from a mismatch between the page size of the PDF, the paper size in the printer driver and the scaling setting.',
    sections: [
      { h: 'Match the paper size', p: ['In the print dialog or printer preferences, choose a paper size of 4×6 in (or 100×150 mm). If it is missing, create a custom size in the printer driver with those dimensions. Make sure the media type matches your roll, such as labels with gaps.'] },
      { h: 'Know what you are printing', p: ['The cropper outputs pages the same size as the cropped label, without scaling or margins. That size is whatever the original label area measured, so it may not be exactly 100×150 mm. If your printer is set to a fixed 4×6 page, the scaling setting decides whether the label fills it correctly.'] },
      { h: 'Scaling and margins', ul: ['Use 100% or Actual size when the label is already close to 4×6.', 'Use Fit to page only if you accept a small size change, and then test the barcode.', 'Set margins to None or Minimum. Default margins shrink or shift the label.', 'Turn off headers and footers in the browser print dialog.'] },
      { h: 'Test the first label', ol: ['Print only page 1 of the cropped PDF.', 'Check that all four edges of the content are present.', 'Measure the printed label against the roll if the size looks wrong.', 'Scan the barcode with the courier or marketplace app if you can.', 'Print the rest only after this test passes.'] },
      { h: 'Keep the settings', p: ['Once a setup works, save it as a printer preset so you do not repeat it every day. If a test fails, go to [fixing label printing problems](/blog/how-to-fix-shipping-label-printing-problems). To prepare the PDF, use the [Meesho](/meesho-label-cropper) or [Flipkart](/flipkart-label-cropper) cropper.'] },
    ],
    resources: [['LabelCropPro: 4×6 and 3×5 thermal printing', LP + 'thermal-label-printing', 'A separate guide to choosing a page size for thermal stock.']],
    related: ['how-to-fix-shipping-label-printing-problems', 'how-to-print-shipping-labels-on-a4-paper', 'how-to-crop-meesho-shipping-label-pdf'],
  },
  {
    slug: 'how-to-print-shipping-labels-on-a4-paper', category: 'Printing', minutes: 3, date: D,
    title: 'How to Print Shipping Labels on A4 Paper',
    description: 'When an ordinary A4 printer is enough for shipping labels, which print settings to use, and what to know about printing several labels on one sheet.',
    intro: 'Not every seller has a thermal printer. An ordinary A4 inkjet or laser printer can print shipping labels, and it is a reasonable choice for low volumes if you cut and stick the labels yourself.',
    sections: [
      { h: 'When A4 makes sense', p: ['A4 works for small daily volumes or while you are starting out. It costs more in time per label, because you must cut and attach each one. At higher volumes a thermal printer is usually more practical.'] },
      { h: 'Print settings', ul: ['Paper size: A4, matching the paper in the tray.', 'Scale: 100% or Actual size, not Fit, so the barcode keeps its proportions.', 'Margins: Default or Minimum. Check that nothing at the label edge is cut off.', 'Quality: Normal or High. Draft mode can make barcodes hard to scan.', 'Colour: black and white is fine for most labels.'] },
      { h: 'Several labels on one sheet', p: ['The cropper outputs one cropped label per page. It does not arrange several labels on a single A4 sheet. If you want that, use your PDF viewer or printer driver, which often has a Multiple pages per sheet option. Keep that scaling at 100% where the driver allows it, and scan-test the barcode afterwards.'] },
      { h: 'Before you cut and stick', ol: ['Print one page and scan the barcode.', 'Leave a small border so cutting does not clip the label.', 'Use clear tape or label sheets that do not cover the barcode with glare.', 'Do not fold the label across the barcode.'] },
      { h: 'Related', p: ['Crop first with the [Flipkart](/flipkart-label-cropper) or [Meesho](/meesho-label-cropper) cropper. If printing goes wrong, see [common label printing problems](/blog/how-to-fix-shipping-label-printing-problems).'] },
    ],
    resources: [],
    related: ['print-shipping-labels-on-4x6-thermal-printer', 'how-to-fix-shipping-label-printing-problems', 'how-to-crop-flipkart-shipping-label-pdf'],
  },
  {
    slug: 'how-to-fix-shipping-label-printing-problems', category: 'Troubleshooting', minutes: 5, date: D,
    title: 'Shipping Label Not Scanning, Too Small or Cut Off? How to Fix It',
    description: 'Troubleshoot shipping label barcodes that will not scan, labels that print too small, and labels cut off at the edges, with practical checks in order.',
    intro: 'When a shipping label prints badly, the cause is usually one of a few settings. Work through the checks below in order and change one thing at a time.',
    sections: [
      { h: 'Label prints too small', ul: ['Check that scaling is 100% or Actual size, not Fit or Shrink to printable area.', 'Check that the paper size in the print dialog matches the paper in the printer. A4 chosen for a 4×6 roll gives a tiny label.', 'Look at the PDF page size. A cropped label page is the size of the label itself.'] },
      { h: 'Label is cut off', ul: ['Set margins to None or Minimum.', 'Pick the paper size that matches the roll or sheet.', 'Re-check the crop in the preview. If the page was missed by auto-detect, adjust the manual crop area and crop again.', 'Leave a small safety margin on all sides.'] },
      { h: 'Barcode will not scan', ol: ['Confirm the label printed at its original size. Barcodes scaled up or down lose scanning reliability.', 'Increase print darkness or quality a step. Faint bars are a common cause.', 'Clean the thermal print head or the A4 printer nozzles, and run a test page.', 'Check that the roll is loaded the right way round and is not old or damaged.', 'Check the barcode is complete and not sliced by a crop, a fold or tape.', 'Scan with a different app or scanner to rule out the scanner.'] },
      { h: 'Blurry or faded text', p: ['Use a higher quality mode, replace worn ink or toner, and avoid very cheap label stock. On thermal printers, a dirty head and low darkness are the most frequent reasons.'] },
      { h: 'If it still fails', p: ['Re-download the original PDF and [crop it again](/how-to-crop-shipping-labels), then print a single page. Follow the [4×6 thermal setup](/blog/print-shipping-labels-on-4x6-thermal-printer) or [A4 settings](/blog/how-to-print-shipping-labels-on-a4-paper) from the start.'] },
    ],
    resources: [['LabelCropPro: when a barcode will not scan', LP + 'barcode-not-scanning', 'A checklist of reasons barcodes fail at handover.'], ['LabelCropPro: printing at the right size', LP + 'print-settings', 'Where the scale and margin settings are in common browsers.']],
    related: ['print-shipping-labels-on-4x6-thermal-printer', 'how-to-print-shipping-labels-on-a4-paper', 'how-to-crop-flipkart-shipping-label-pdf'],
  },
  {
    slug: 'shipping-label-pdf-privacy-and-security', category: 'Privacy', minutes: 4, date: D,
    title: 'Shipping Label PDF Privacy: Protecting Customer Addresses and Phone Numbers',
    description: 'Shipping label PDFs contain customer names, addresses and phone numbers. Learn how to handle them safely and how browser-based cropping works.',
    intro: 'A day of shipping labels is effectively a customer list. Each label has a name, a delivery address and often a phone number. Handling these files carefully protects your customers and your business.',
    sections: [
      { h: 'What a label PDF contains', p: ['Besides the address and phone number, labels show order and tracking details and SKUs. Treat the PDF like any other file with personal data, and keep it only as long as you need it.'] },
      { h: 'How Label Cropper handles your file', p: ['Label Cropper is a browser-based tool. The PDF is read and cropped by code running in your browser using the pdf.js and pdf-lib libraries, and the cropped PDF is created on your device. The application has no server component that receives your file. This describes how this site is built, not a guarantee about your device, browser extensions or network.'] },
      { h: 'How to check any online tool', ol: ['Read its privacy statement for how files are handled.', 'Open your browser developer tools, go to the Network tab, process a test file and look for upload requests carrying the PDF.', 'Test with a sample label with no real customer data first.', 'Prefer tools that state clearly whether files leave your device.'] },
      { h: 'Good habits for sellers', ul: ['Do not share label PDFs in public chats or social media posts.', 'Delete downloaded label files you no longer need, including from the Downloads folder.', 'Use a device with a screen lock and updated browser.', 'Print only the pages you need and dispose of paper copies carefully.', 'Limit who on your team can access order exports.'] },
      { h: 'Related', p: ['See the [homepage tool](/) or the guides for [Meesho](/blog/how-to-crop-meesho-shipping-label-pdf) and [Flipkart](/blog/how-to-crop-flipkart-shipping-label-pdf) labels.'] },
    ],
    resources: [['LabelCropPro: what is on the label PDF you upload', LP + 'seller-data-privacy', 'Another view of seller data privacy and how to check uploads.']],
    related: ['how-to-crop-meesho-shipping-label-pdf', 'how-to-crop-flipkart-shipping-label-pdf', 'how-to-fix-shipping-label-printing-problems'],
  },
];

export const BLOG_INDEX = {
  title: 'Shipping Label Guides for Flipkart & Meesho Sellers | Label Cropper Blog',
  description: 'Practical guides on cropping, printing and protecting Flipkart and Meesho shipping label PDFs, including thermal 4x6 printing and troubleshooting.',
};
export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
