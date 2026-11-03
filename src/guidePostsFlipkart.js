// New Flipkart and general guides. Every claim here is limited to what the app does (see cropper.js / labelLogic.js).
const D = '2026-11-03';

export const FLIPKART_GUIDE_POSTS = [
  {
    slug: 'flipkart-label-cropper-guide', category: 'Flipkart', minutes: 5, date: D, lang: 'en', cta: '/flipkart-label-cropper#label-tool',
    covers: [12, 13],
    title: 'Free Flipkart Label Crop and Sort Tool Online: How It Works',
    seoTitle: 'Free Flipkart Label Crop and Sort Tool Online | Label Cropper',
    description: 'How the free Flipkart label cropper crops label PDFs and sorts them by SKU, what the picklist contains, and what the tool cannot sort or resize.',
    intro: 'A free online tool to crop and sort Flipkart labels is the [Flipkart label cropper](/flipkart-label-cropper) on this site. It crops each Flipkart label page in your browser, can group the labels by SKU and shows a SKU picklist you can copy. There is no sign-up and no watermark. This guide explains exactly what "sort" means here.',
    sections: [
      { h: 'What the tool crops', p: ['It finds the Flipkart label on each page by looking for the "Not for resale" text and crops to the label box. The invoice below the label is not visible in the cropped pages. The original text and barcodes are carried into the new PDF without resizing.'], fig: { kind: 'flipkart', alt: 'Illustration of a page with the shipping label in the upper middle and the invoice area below it. An arrow points to a cropped page that contains only the label.', caption: 'Illustration only: the label is kept, the invoice area is not visible in the cropped page.' } },
      { h: 'How sorting by SKU works', ol: [
        'Select Flipkart and add one or more Flipkart label PDFs.',
        'Tick "Group labels by SKU".',
        'Press Crop Labels. The cropped pages are ordered by SKU text, so labels of the same SKU are together.',
        'Use the SKU picklist shown after cropping and press Copy picklist to paste the SKU and quantity list elsewhere.',
      ] },
      { h: 'What it cannot sort', ul: [
        'It sorts by SKU only, not by courier, order date, pincode or product size.',
        'It needs readable SKU text in the PDF. If it cannot find one, the label is listed as UNKNOWN but is still cropped.',
        'It cannot mix marketplaces in one run.',
        'It does not resize labels to 4x6. See [Flipkart PDF to 4x6](/blog/flipkart-pdf-to-4x6-label).',
      ] },
      { h: 'Flipkart ka label cropper kaise kare? (Hinglish)', lang: 'hi-Latn', p: ['Tool mein Flipkart select karo, seller panel se download ki hui label PDF upload karo aur Crop Labels dabao. Agar SKU ke hisaab se order chahiye to "Group labels by SKU" tick karo. Preview mein barcode aur address check karke cropped PDF download karo. Poori Hinglish guide: [Flipkart ka Label Cropper Kaise Kare](/blog/hinglish/flipkart-label-cropper-kaise-kare).'] },
      { h: 'A practical example', p: ['Example: a seller adds two Flipkart PDFs and ticks Group labels by SKU. The picklist reads "MUG-WHITE 14", "MUG-BLACK 9" and "UNKNOWN 1". The UNKNOWN label is a page where the SKU text could not be read, so they check that one by hand in the preview before packing.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Expecting a courier-wise sort: sort and pack by courier yourself after cropping.',
        'Ignoring UNKNOWN entries: open the preview and identify those orders manually.',
        'Using an edited or screenshot PDF: download the original label PDF again.',
      ] },
    ],
    faq: [
      { q: 'Does sorting change which labels are in the PDF?', a: 'No. Sorting only changes the order of the pages. The number of labels is the same.' },
      { q: 'Can I copy the picklist?', a: 'Yes. Press Copy picklist after cropping. It copies each SKU and its quantity.' },
      { q: 'Is the Flipkart label cropper really free?', a: 'Yes. It is free to use, with no sign-up and no watermark.' },
    ],
    related: ['how-to-crop-flipkart-shipping-label-pdf', 'flipkart-bulk-label-cropping', 'flipkart-pdf-to-4x6-label'],
  },

  {
    slug: 'flipkart-pdf-to-4x6-label', category: 'Flipkart', minutes: 6, date: D, lang: 'en', cta: '/flipkart-label-cropper#label-tool',
    covers: [14, 15],
    title: 'How to Convert a Flipkart Shipping Label PDF Into 4x6',
    seoTitle: 'Flipkart Shipping Label PDF to 4x6: Steps and Limits | Label Cropper',
    description: 'Crop a Flipkart label PDF and print it on 4x6 (100x150 mm) stock. Learn the cropped label size, why the invoice does not show and which print checks to run.',
    intro: 'LabelCrop does not convert a Flipkart label PDF into an exact 4x6 page. It crops the label out of the page and keeps the label\'s own size, which in the layout the tool handles is a portrait label of roughly 3 by 5 inches. You then choose 4x6 (100x150 mm) paper and scaling when printing. Start with the [Flipkart label cropper](/flipkart-label-cropper).',
    sections: [
      { h: 'Steps: crop, then fit to 4x6', ol: [
        'Crop the PDF with the [Flipkart label cropper](/flipkart-label-cropper) and download it.',
        'Open the cropped PDF and note its page size in the document properties.',
        'In the print dialog set paper size to 4x6 in (100x150 mm). If it is missing, add a custom size in the printer driver.',
        'Set margins to None or Minimum.',
        'Pick the scaling. A label of about 3 x 5 inches is smaller than 4x6, so Actual size leaves white space and Fit to page enlarges it slightly. Either is fine if the barcode scans.',
        'Print one label first, check all edges and scan it, then print the rest.',
      ] },
      { h: 'Why the size is not exactly 4x6', p: ['The crop follows the label box on the Flipkart page, with a small safety margin. It is not stretched to a fixed paper size, because stretching can distort the barcode. The sizes above come from the layout the detector was measured on and can change if Flipkart changes its PDF, so rely on your own file\'s page size.'] },
      { h: 'How to remove the invoice from a Flipkart shipping label', id: 'invoice', p: ['There is no delete-invoice button. The crop shows only the label area, so the invoice beneath it does not appear in the output.'], ul: [
        'The crop hides the rest of the page, it does not erase it. The new file still contains the original page content, clipped to the label. Do not use it to redact an invoice before sharing the file.',
        'The original PDF is unchanged, and the invoice is not saved separately.',
        'Every page is cropped. If your file contains non-label pages, remove them first with a PDF tool you trust.',
        'If the result says some pages were not detected, those pages used the fallback area. Check them in the preview.',
      ] },
      { h: 'A practical example', p: ['Example: a seller crops a 40-page Flipkart PDF and downloads Labels_Flipkart_40.pdf. They print at 4x6, margins None, Fit to page. The label fills the roll and the barcode scans on page 1, so they print the rest.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Choosing A4 paper for a 4x6 roll: the label prints tiny. Match paper size to the roll.',
        'Leaving default margins: set None or Minimum.',
        'Skipping the test label: always scan one first.',
      ] },
    ],
    faq: [
      { q: 'Does the Flipkart label crop include the invoice?', a: 'No. The output shows the label area only. Your original file still has the invoice, and the cropped file still holds the clipped page data, so it is not a redaction.' },
      { q: 'Can the tool enlarge the label to fill 4x6?', a: 'No. Scaling is done in your print dialog. Test the barcode after scaling.' },
      { q: 'What if the label is clipped?', a: 'Check the undetected count after cropping. Adjust Left, Top, Width and Height under Advanced crop settings, crop again and re-check the preview.' },
    ],
    related: ['flipkart-thermal-printer-guide', 'how-to-crop-flipkart-shipping-label-pdf', '4x6-thermal-label-cropper-guide'],
  },

  {
    slug: 'flipkart-thermal-printer-guide', category: 'Flipkart', minutes: 5, date: D, lang: 'en', cta: '/flipkart-label-cropper#label-tool',
    covers: [16],
    title: 'How to Print Flipkart Labels on a Thermal Printer',
    seoTitle: 'Print Flipkart Labels on a Thermal Printer (4x6) | Label Cropper',
    description: 'Print cropped Flipkart labels on a 4x6 thermal printer: paper size, margins, scaling and the one-label test to run before printing a whole batch.',
    intro: 'To print Flipkart labels on a thermal printer, crop the label PDF first, then print the cropped PDF with the paper size set to 4x6 (100x150 mm), margins at None or Minimum and the scaling checked. Always print and scan one label before the rest. Crop your file in the [Flipkart label cropper](/flipkart-label-cropper).',
    sections: [
      { h: 'Steps', ol: [
        'Crop and download the PDF from the [Flipkart label cropper](/flipkart-label-cropper).',
        'Open it in a PDF viewer and press Print.',
        'Select your thermal printer and set paper size to 4x6 in (100x150 mm), or create that custom size in the driver.',
        'Check that the media type matches your roll, for example labels with gaps.',
        'Set margins to None or Minimum and turn off headers and footers.',
        'Choose scaling (see below), print page 1 only and scan the barcode.',
        'If it passes, print the remaining pages.',
      ] },
      { h: 'Choosing the scaling', ul: [
        'Actual size keeps the original proportions, which suits barcodes. The label (about 3 x 5 inches in the supported layout) will sit on the 4x6 page with some space around it.',
        'Fit to page enlarges the label to fill more of the page. Use it if you want a larger print, then re-test the scan.',
        'Avoid anything that squeezes the label into a different shape.',
      ] },
      { h: 'About printer compatibility', p: ['We cannot test every thermal printer, so we do not claim that any specific model works. The steps above are generic. Driver names and options vary, so run the one-label test on your own printer, and save a printer preset once it works.'] },
      { h: 'A practical example', p: ['Example: a seller crops 60 labels and opens Labels_Flipkart_60.pdf. With paper 4x6, margins None and Actual size they print page 1. The barcode scans on the first try, so they print pages 2 to 60 in one go.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Prints are faint: raise print darkness and clean the print head.',
        'Label is cut off: set margins to None and check the paper size.',
        'Label is tiny: the paper size is probably A4. Choose 4x6.',
        'Label prints on two labels: the paper size or media setting does not match the roll.',
      ] },
    ],
    faq: [
      { q: 'Can I print the cropped Flipkart PDF on an A4 printer?', a: 'Yes, any printer can print a PDF. Keep scaling close to 100% and scan-test one label. See [printing on A4 paper](/blog/how-to-print-shipping-labels-on-a4-paper).' },
      { q: 'My barcode will not scan after printing. What now?', a: 'Check scaling, print darkness, the print head and the scanner. The steps are in [shipping label barcode quality](/blog/shipping-label-barcode-quality).' },
      { q: 'Does LabelCrop connect to my printer?', a: 'No. It creates the PDF. You print it from your PDF viewer or browser using your normal print dialog.' },
    ],
    related: ['flipkart-pdf-to-4x6-label', 'shipping-label-barcode-quality', 'print-shipping-labels-on-4x6-thermal-printer'],
  },

  {
    slug: 'flipkart-bulk-label-cropping', category: 'Flipkart', minutes: 4, date: D, lang: 'en', cta: '/flipkart-label-cropper#label-tool',
    covers: [17],
    title: 'How to Crop Multiple Flipkart Shipping Labels Together',
    seoTitle: 'Crop Multiple Flipkart Shipping Labels Together | Label Cropper',
    description: 'Crop many Flipkart labels in one run: add several PDFs, merge them into a single cropped PDF and optionally group the labels by SKU.',
    intro: 'To crop multiple Flipkart shipping labels together, add all your Flipkart label PDFs in one run. Every page of every file is cropped and the labels are merged into one PDF. Open the [Flipkart label cropper](/flipkart-label-cropper) to try it.',
    sections: [
      { h: 'Steps', ol: [
        'Open the [Flipkart label cropper](/flipkart-label-cropper) and select Flipkart.',
        'Choose several PDFs in the file picker or drag them in. You can add more files in further rounds, and remove one with the bin icon.',
        'Keep auto-detect on. Tick "Group labels by SKU" if you want same-SKU labels together.',
        'Press Crop Labels, check the preview and download the merged PDF, named like Labels_Flipkart_50.pdf.',
        'Copy the SKU picklist if you need a packing list.',
      ] },
      { h: 'Rules for a mixed batch', ul: [
        'One marketplace per run. Flipkart and Meesho files must be cropped separately.',
        'Original label PDFs work best. Scanned copies have no text to detect.',
        'Every page is cropped, so remove non-label pages from the files first.',
      ] },
      { h: 'Check before printing', p: ['Look at pages from the start, middle and end of the preview and compare the page count with your orders. If some pages were reported as undetected, they used the fallback area, so check them closely.'] },
      { h: 'A practical example', p: ['Example: a seller exports labels in two batches, 25 and 35 pages. They add both PDFs, tick Group labels by SKU and press Crop Labels. The output has 60 pages, and the picklist shows how many of each SKU to pack.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Mixing marketplaces: run each marketplace separately.',
        'Very large batches that slow the browser: crop in smaller batches.',
        'Not checking the count: compare pages with orders.',
      ] },
    ],
    faq: [
      { q: 'Is there a fixed limit on the number of Flipkart labels?', a: 'The tool sets no label limit of its own, but processing happens in your browser, so very large batches depend on your device\'s memory.' },
      { q: 'Do the labels keep their original order?', a: 'Yes, unless you tick Group labels by SKU, which sorts them by SKU text.' },
    ],
    related: ['flipkart-label-cropper-guide', 'how-to-crop-flipkart-shipping-label-pdf', 'meesho-bulk-label-cropping'],
  },

  {
    slug: 'shipping-label-barcode-quality', category: 'Printing', minutes: 6, date: D, lang: 'en',
    covers: [8, 18, 20],
    title: 'How to Crop a Shipping Label PDF Without Losing Barcode Quality',
    seoTitle: 'Crop Shipping Label PDF Without Losing Barcode Quality | Label Cropper',
    description: 'How to keep barcodes sharp when cropping and printing shipping labels, and what to check when a Meesho label looks blurry or a Flipkart barcode will not scan.',
    intro: 'To crop a shipping label PDF without losing barcode quality, use a cropper that cuts the original page instead of turning it into a picture. Label Cropper copies the chosen area of the original page without resizing it, so the barcode is as sharp as it was in your file. Most quality loss then happens when printing. The checks below cover both.',
    sections: [
      { h: 'What Label Cropper does to the barcode', ul: [
        'It places the cropped area of the original page into a new PDF. It does not re-draw the page as a low-resolution image.',
        'The output page is exactly the cropped size, with no scaling.',
        'If a barcode is vector in your file it stays vector, and if it is an image it stays that image, untouched.',
        'It cannot make a poor original barcode better, and nobody can promise that every barcode will scan on every printer.',
      ] },
      { h: 'How to keep the quality', ol: [
        'Start from the original label PDF, not a screenshot or a photo.',
        'Crop in the [Meesho](/meesho-label-cropper) or [Flipkart](/flipkart-label-cropper) cropper and check the preview. The barcode must be complete, with its quiet space around it.',
        'Print at Actual size or 100% where you can. If you must fit to the paper, test the scan.',
        'Do not use draft print mode. Raise the darkness if the bars look thin.',
        'Print one label and scan it before the batch.',
      ] },
      { h: 'Meesho shipping label ka barcode blur kyu hota hai? (Hinglish)', lang: 'hi-Latn', p: [
        'Crop karne se barcode blur nahi hota, kyunki tool original text aur barcode ko dobara draw ya resize nahi karta. Blur aksar in karanon se aata hai: print mein page ko zyada chhota ya bada scale karna, draft ya low print quality, kam darkness, dirty print head, ya screen par kam zoom mein dekhna.',
        'Agar original Meesho PDF ka barcode hi low-quality image hai, to crop use behtar nahi bana sakta. Aise mein PDF dobara download karo. Pehle ek label print karke scan karo, phir baaki print karo.',
      ] },
      { h: 'Flipkart shipping label barcode scan nahi ho raha, kya kare? (Hinglish)', lang: 'hi-Latn', ol: [
        'Dekho ki barcode poora print hua hai aur kisi side se kata nahi hai. Agar kata hai to margins None rakho aur preview mein crop check karo.',
        'Scaling 100% ya Actual size ke paas rakho. Zyada chhota ya bada print scan mein dikkat deta hai.',
        'Print darkness ya quality ek step badhao aur dobara print karo.',
        'Thermal printer ka head saaf karo aur roll sahi tarah se lagi hai ye check karo.',
        'Alag scanner ya app se scan karke dekho, taaki pata chale ki problem scanner mein to nahi.',
        'Agar phir bhi na chale, to original PDF dobara download karo, crop karo aur ek label test print karo.',
      ] },
      { h: 'A practical example', p: ['Example: a seller\'s Flipkart barcode failed to scan. The label was printed with "Shrink to printable area", so it came out at about 80%. After switching to Actual size, raising darkness a step and cleaning the head, the barcode scanned.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Cropping a screenshot: the barcode is already a low-resolution picture. Use the original PDF.',
        'Fit to page on a mismatched paper size: match the paper size to the roll.',
        'Folding or taping over the barcode: keep it flat and clear.',
        'Judging by screen zoom: a barcode looks soft at low zoom, so test the print.',
      ] },
    ],
    faq: [
      { q: 'Does the crop resample the PDF?', a: 'No. The cropped area is copied from the original page without resizing, and image streams are not changed.' },
      { q: 'Can you guarantee my barcode will scan?', a: 'No. Scanning depends on your original file, printer, label stock and scanner. Always scan-test one label first.' },
      { q: 'Should I use A4 or 4x6 for the best scan?', a: 'The paper size that matches your stock, with scaling close to 100%. See [printing on a 4x6 thermal printer](/blog/print-shipping-labels-on-4x6-thermal-printer).' },
    ],
    related: ['how-to-fix-shipping-label-printing-problems', 'print-shipping-labels-on-4x6-thermal-printer', '4x6-thermal-label-cropper-guide'],
  },

  {
    slug: '4x6-thermal-label-cropper-guide', category: 'Printing', minutes: 5, date: D, lang: 'en',
    covers: [19],
    title: 'What Is the Best 4x6 Shipping Label Cropper for Thermal Printers?',
    seoTitle: 'Best 4x6 Shipping Label Cropper for Thermal Printers? | Label Cropper',
    description: 'What to look for in a 4x6 shipping label cropper for thermal printers, and where Label Cropper fits for Meesho and Flipkart sellers, including what it cannot do.',
    intro: 'There is no single best 4x6 label cropper for everyone, and we cannot verify claims about other tools. What you can do is check a cropper against the points below. Label Cropper is built for Meesho and Flipkart labels and meets some of them, but not all, and this guide says which.',
    sections: [
      { h: 'A checklist for a 4x6 thermal label cropper', ol: [
        'Does it support your marketplace\'s current label layout?',
        'Does it crop the original page instead of re-rendering it into an image, so barcodes stay sharp?',
        'Does it show a preview before you print?',
        'Does it tell you when it could not detect a label on a page?',
        'Is it clear about the output size, rather than just saying "4x6"?',
        'Does it keep your files on your device, or explain what it uploads?',
        'Is it free of watermarks?',
      ] },
      { h: 'How Label Cropper scores on these points', ul: [
        'Marketplaces: Meesho and Flipkart only, with automatic label detection and a manual crop area.',
        'Quality: crops the original page without resizing, so original text and barcodes are kept.',
        'Preview: yes, in your browser\'s PDF viewer.',
        'Detection report: yes, it tells you how many pages used the fallback area.',
        'Privacy: files are processed in your browser and not uploaded.',
        'Price: free, no sign-up, no watermark.',
      ] },
      { h: 'What it does not do for 4x6', ul: [
        'It does not resize the output to an exact 4x6 page. The page has the label\'s own size, and you set 4x6 paper and scaling in the print dialog.',
        'It does not place several labels on one sheet.',
        'It does not support other marketplaces.',
        'It does not talk to your printer. It makes the PDF you print.',
      ] },
      { h: 'A practical example', p: ['Example: a seller with a 4x6 thermal printer wants Flipkart and Meesho labels on one roll. They crop the Flipkart PDF in one run and the Meesho PDF in another, set the 4x6 paper size, test one label from each and print. If they needed exact 4x6 output pages, they would need a different tool for that step.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Choosing a tool by the "4x6" claim alone: check what size it really outputs.',
        'Skipping the printer test: scan one label first.',
        'Using a screenshot as input: use the original PDF.',
      ] },
    ],
    faq: [
      { q: 'Does Label Cropper output exactly 4x6 pages?', a: 'No. It keeps the cropped label\'s own size. You choose 4x6 paper and scaling when printing.' },
      { q: 'Which printers does it work with?', a: 'It creates a normal PDF that any printer can print. We do not claim compatibility with specific thermal printer models, so test one label on yours.' },
      { q: 'Where do I start?', a: 'Pick your marketplace: [Meesho label cropper](/meesho-label-cropper) or [Flipkart label cropper](/flipkart-label-cropper).' },
    ],
    related: ['print-shipping-labels-on-4x6-thermal-printer', 'shipping-label-barcode-quality', 'meesho-pdf-to-4x6-label'],
  },
];
