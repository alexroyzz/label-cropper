// New Meesho guides. Every claim here is limited to what the app does (see cropper.js / labelLogic.js).
const D = '2026-11-03';

export const MEESHO_GUIDE_POSTS = [
  {
    slug: 'meesho-label-cropper-guide', category: 'Meesho', minutes: 5, date: D, lang: 'en', cta: '/meesho-label-cropper#label-tool',
    covers: [2, 3],
    title: 'Free Meesho Label Cropper Online: What It Does and What It Does Not',
    seoTitle: 'Free Meesho Label Cropper Online: Features and Limits | Label Cropper',
    description: 'A plain guide to the free Meesho label cropper: what it crops, how SKU grouping works, and the limits to know before you print, such as no exact 4x6 resize.',
    intro: 'Yes, a free Meesho label cropper exists: Label Cropper on this site crops Meesho label PDFs in your browser with no sign-up and no watermark. This guide explains what it does, what it does not do, and how to check the result. To start straight away, open the [Meesho label cropper](/meesho-label-cropper).',
    sections: [
      { h: 'What the Meesho label cropper does', ul: [
        'Finds the label on every page of a Meesho label PDF by reading the page text (it looks for headings such as "Customer Address" and "Product Details").',
        'Crops each page to that label area. The invoice section that sits below the label is not visible in the cropped pages.',
        'Accepts several Meesho PDFs in one run and merges all the cropped labels into one PDF.',
        'Optionally groups labels by SKU and shows a SKU picklist with quantities that you can copy.',
        'Shows a preview in your browser\'s PDF viewer before you download the file.',
        'Runs entirely in your browser. The PDF is not uploaded to a Label Cropper server.',
      ] },
      { h: 'What it does not do', ul: [
        'It does not resize the label to an exact 4x6 page. Each output page keeps the size of the cropped label, so you set the paper size and scaling when you print. See [Meesho PDF to 4x6](/blog/meesho-pdf-to-4x6-label).',
        'It does not download labels from your Meesho account. You download the PDF yourself first.',
        'It does not put several labels on one A4 sheet.',
        'It does not read scanned or screenshot PDFs well, because detection depends on text inside the PDF.',
        'It does not mix marketplaces. Crop Meesho and Flipkart files in separate runs.',
        'It does not delete or skip pages. Every page of the PDF becomes one cropped page.',
      ] },
      { h: 'How to use it, in short', ol: [
        'Open the [Meesho label cropper](/meesho-label-cropper) and make sure Meesho is selected.',
        'Add your original label PDF or PDFs with drag and drop or Browse Files.',
        'Keep "Auto-detect label position on every page" ticked. Tick "Group labels by SKU" only if you want SKU order.',
        'Press Crop Labels, look through the preview, then press Download Cropped PDF. The file is named like Labels_Meesho_25.pdf, where the number is how many labels it contains.',
      ] },
      { h: 'Free Meesho label cropper online kahan milega? (Hinglish)', lang: 'hi-Latn', p: [
        'Ye site hi free Meesho label cropper hai: croplabelfree.online par PDF daalo, Crop Labels dabao aur download karo. Sign-up ya watermark nahi hai, aur PDF aapke browser se bahar nahi jaati.',
        'Meesho ka label cropper kaise kare? Tool mein Meesho select karo, seller panel se download ki hui original PDF upload karo, preview check karo aur cropped PDF download karo. Poori guide Hinglish mein yahan hai: [Meesho ka Label Cropper Kaise Kare](/blog/hinglish/meesho-label-cropper-kaise-kare).',
      ] },
      { h: 'A practical example', p: ['Example: a seller downloads two Meesho label PDFs with 18 and 22 labels. They add both files, tick Group labels by SKU and crop. The result is one PDF with 40 pages, named Labels_Meesho_40.pdf, with same-SKU labels together and a picklist such as "KURTI-BLUE-M 6". Before printing, they open the preview and check pages from the start, middle and end for a complete barcode and address block.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Selecting Flipkart for a Meesho file: the detector looks for the wrong text and falls back to a fixed crop area. Select Meesho and crop again.',
        'Uploading a screenshot or a scanned copy: no text means no detection. Download the original PDF again.',
        'Skipping the preview: check several pages, not only the first. If the tool reports pages it could not detect, adjust the crop area under Advanced crop settings.',
        'Expecting a perfect 4x6 page: set the 4x6 paper size and scaling in the print dialog, then test one label.',
      ] },
    ],
    faq: [
      { q: 'Is there a limit on how many Meesho labels I can crop?', a: 'The tool does not apply its own label limit, but everything runs in your browser, so very large batches depend on your device\'s memory. If the page slows down, crop in smaller batches.' },
      { q: 'Do I need an account to use the Meesho label cropper?', a: 'No. There is no sign-up and no watermark on the cropped PDF.' },
      { q: 'Can I use the cropper for the Meesho invoice?', a: 'The tool crops the label area, so the invoice is not visible in the output. Keep your original PDF if you need the invoice.' },
    ],
    related: ['how-to-crop-meesho-shipping-label-pdf', 'meesho-pdf-to-4x6-label', 'meesho-bulk-label-cropping'],
  },

  {
    slug: 'meesho-pdf-to-4x6-label', category: 'Meesho', minutes: 6, date: D, lang: 'en', cta: '/meesho-label-cropper#label-tool',
    covers: [4, 5],
    title: 'How to Convert a Meesho PDF Label Into 4x6 Format',
    seoTitle: 'Meesho PDF Label to 4x6: What Works and What Does Not | Label Cropper',
    description: 'Crop a Meesho label PDF, then print it on 4x6 (100x150 mm) stock. Learn what size the cropped label has, how the invoice stays out of view, and what to test first.',
    intro: 'LabelCrop does not convert a Meesho PDF into an exact 4x6 page. It crops the label out of the original page and keeps that label\'s own size, and you then choose 4x6 (100x150 mm) paper and the scaling in your print dialog. This guide shows the steps and the checks that matter. Start with the [Meesho label cropper](/meesho-label-cropper).',
    sections: [
      { h: 'Why a Meesho PDF is not 4x6 to begin with', p: ['A Meesho label PDF is a full page. The shipping label is the top block, and the tax invoice sits underneath it. Printing the page as it is wastes most of the paper, which is why sellers crop it first.'], fig: { kind: 'meesho', alt: 'Illustration of a page with the shipping label in the top part and the invoice area below it. An arrow points to a cropped page that contains only the label.', caption: 'Illustration only: the label is kept, the invoice area below it is not visible in the cropped page.' } },
      { h: 'Steps: crop first, then print at 4x6', ol: [
        'Crop the file in the [Meesho label cropper](/meesho-label-cropper) and download the cropped PDF.',
        'Open the PDF in a PDF viewer and look at its page size in the document properties. This is the size you are printing from.',
        'In the print dialog choose your printer and set paper size to 4x6 in (100x150 mm). If the size is missing, add a custom size in the printer driver.',
        'Set margins to None or Minimum and turn off headers and footers.',
        'Choose the scaling: Actual size if the label fits the page, or Fit to page if it does not. Check the orientation too.',
        'Print only page 1, check all edges and scan the barcode, and only then print the batch.',
      ] },
      { h: 'What size is the cropped Meesho label?', p: ['In the layout this tool is built for, the Meesho label is wider than it is tall, roughly 8 by 4.7 inches. A 4x6 roll is portrait, so the label may need to be rotated, and it will be scaled down to fit. A smaller print means a smaller barcode, which is why testing one label matters.', 'These sizes come from the layout the detector was measured on. Meesho can change its PDF layout, so trust the page size you see in your own cropped file.'] },
      { h: 'How to remove the invoice from a Meesho shipping label PDF', id: 'invoice', p: [
        'The tool has no button that deletes the invoice. Cropping does the job visually: each page is cut down to the label area, so the invoice below it does not show in the output.',
        'On supported pages the label\'s bottom edge is found from the "TAX INVOICE" heading, or from "Product Details" if that heading is missing, so the invoice stays out of the crop.',
      ], ul: [
        'The crop hides the rest of the page, it does not erase it. The new file still contains the original page content, clipped to the label. Do not use it to redact an invoice before sharing the file; use a PDF tool that removes content for that.',
        'Your original PDF is not changed, and the invoice is not saved anywhere separately. Keep the original if you need the invoice.',
        'Every page is cropped. If your PDF has pages that are not labels, remove them with a PDF tool you trust before cropping, or they will appear in the output.',
        'If a page is not detected, a fixed fallback area is used. Check the preview for any part of the invoice or a clipped label.',
      ] },
      { h: 'A practical example', p: ['Example: a seller crops a 25-page Meesho PDF and downloads Labels_Meesho_25.pdf. The viewer shows landscape pages. In the print dialog they pick 4x6, Fit to page, margins None, and print page 1. The barcode scans, so they print the other 24. Had it failed, they would raise print darkness before changing anything else.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Printing with default margins: set margins to None or Minimum.',
        'Choosing A4 paper for a 4x6 roll: the label prints tiny. Match the paper size to the roll.',
        'Assuming the output is already 4x6: check the page size and scaling.',
        'Printing the whole batch before a test: print and scan one label first.',
      ] },
    ],
    faq: [
      { q: 'Can LabelCrop make the Meesho label exactly 100x150 mm?', a: 'No. It keeps the cropped label\'s own size and does not stretch or resize it. Use your print dialog\'s paper size and scaling to fit the label onto 4x6 stock.' },
      { q: 'Will the invoice still be in my original PDF?', a: 'Yes. Cropping creates a new PDF and never edits the one you uploaded.' },
      { q: 'What if part of the invoice shows in my crop?', a: 'The page was probably not detected and used the fallback area. Check the undetected count after cropping, then adjust Left, Top, Width and Height under Advanced crop settings and crop again.' },
    ],
    related: ['meesho-thermal-printer-guide', 'how-to-crop-meesho-shipping-label-pdf', '4x6-thermal-label-cropper-guide'],
  },

  {
    slug: 'meesho-thermal-printer-guide', category: 'Meesho', minutes: 5, date: D, lang: 'hinglish', cta: '/meesho-label-cropper#label-tool', relatedH: 'Ye guides bhi padho',
    covers: [6, 10],
    title: 'Meesho Label Thermal Printer Par Kaise Print Kare (Crop Ke Baad PDF Print)',
    seoTitle: 'Meesho Label Thermal Printer Par Kaise Print Kare | Label Cropper',
    description: 'Meesho label ko thermal printer par print karne ka tarika, aur crop karne ke baad PDF kaise print kare: paper size, margins, scaling aur test label ke steps.',
    intro: 'Meesho label thermal printer par print karne ke liye pehle label PDF ko crop karo, phir cropped PDF ko apne PDF viewer mein kholkar sahi paper size aur scaling ke saath print karo. Neeche pura tarika diya hai. Crop karne ke liye [Meesho label cropper](/meesho-label-cropper) kholo.',
    sections: [
      { h: 'Meesho label thermal printer par kaise print kare', ol: [
        '[Meesho label cropper](/meesho-label-cropper) mein original label PDF daalo aur Crop Labels dabao.',
        'Preview mein check karo ki barcode aur address poora dikh raha hai, phir Download Cropped PDF dabao.',
        'Downloaded PDF ko browser ya PDF viewer mein kholo aur Print dabao.',
        'Printer mein apna thermal printer chuno. Paper size 4x6 inch (100x150 mm) rakho. Agar ye option nahi hai, to printer driver mein custom size banao.',
        'Margins None ya Minimum rakho aur headers/footers band karo.',
        'Scaling dhyan se chuno (neeche samjhaya hai) aur sirf page 1 print karo.',
        'Barcode scan karke dekho. Sahi nikle tab baaki labels print karo.',
      ] },
      { h: 'Meesho label crop karne ke baad PDF kaise print kare', p: ['Crop ke baad "Preview Result" se PDF browser ke apne viewer mein khulti hai, jahan se aap seedha print kar sakte ho. Ya "Download Cropped PDF" se file save karke kisi bhi PDF viewer se print karo. File ka naam Labels_Meesho_25.pdf jaisa hota hai, jahan number labels ki ginti hai.', 'Dhyan rahe: tool label ko 4x6 mein resize nahi karta. Cropped page ka size wahi hota hai jo label ka apna size hai, isliye 4x6 mein fit karna print dialog ka kaam hai.'] },
      { h: 'Scaling aur orientation ka dhyan rakho', p: ['Jis layout ke liye tool bana hai, usmein Meesho label chaude (landscape jaisa) hota hai, jabki 4x6 roll portrait hota hai. Isliye label ko ghumana (rotate) aur chhota karna pad sakta hai. Chhota print matlab chhota barcode, isliye ek label pehle test zaroor karo.', 'Agar "Actual size" par label kat raha hai to "Fit to page" try karo. Agar fit karne ke baad barcode scan nahi hota, to print darkness badhao aur dobara test karo.'] },
      { h: 'Printer compatibility ke baare mein', p: ['Hum kisi specific thermal printer model ki compatibility ka daava nahi karte, kyunki settings har driver mein alag hoti hain. Jo bhi printer ho, wahi steps follow karo aur ek test label print karo. Printer preset save kar lo taaki roz settings na badalni padein.'] },
      { h: 'Ek practical example', p: ['Udaharan: ek seller ne 30 labels crop kiye aur Labels_Meesho_30.pdf print ke liye kholi. Paper size 4x6, margins None, scaling Fit to page rakhi. Pehla label print kiya, barcode scan hua, to baaki 29 print kar diye.'] },
      { h: 'Aam galtiyan aur unka solution', ul: [
        'Paper size A4 rakhna: label bahut chhota print hota hai. Paper size roll ke hisaab se 4x6 rakho.',
        'Margins default chhodna: label kat sakta hai ya shift ho sakta hai. None ya Minimum rakho.',
        'Bina test ke poora batch print karna: pehle ek label print karke scan karo.',
        'Screenshot ya scanned PDF crop karna: original PDF dobara download karo.',
      ] },
    ],
    faq: [
      { q: 'Kya cropped PDF seedha 4x6 aayegi?', a: 'Nahi. Cropped page label ke apne size ki hoti hai. 4x6 paper size aur scaling print dialog mein set karni padti hai.' },
      { q: 'Barcode scan nahi ho raha to kya kare?', a: 'Scaling, print darkness aur print head check karo. Poore steps [shipping label barcode quality](/blog/shipping-label-barcode-quality) guide mein hain.' },
      { q: 'Kya A4 printer par bhi print kar sakte hain?', a: 'Haan, PDF kisi bhi printer par print ho sakti hai. Scaling 100% ke paas rakho aur barcode scan karke test karo. Detail: [A4 paper par print](/blog/how-to-print-shipping-labels-on-a4-paper).' },
    ],
    related: ['meesho-pdf-to-4x6-label', 'shipping-label-barcode-quality', 'print-shipping-labels-on-4x6-thermal-printer'],
  },

  {
    slug: 'meesho-bulk-label-cropping', category: 'Meesho', minutes: 5, date: D, lang: 'en', cta: '/meesho-label-cropper#label-tool',
    covers: [7, 9],
    title: 'How to Crop Multiple Meesho Shipping Labels at Once',
    seoTitle: 'Crop Multiple Meesho Shipping Labels at Once | Label Cropper',
    description: 'Crop many Meesho labels in one run: add several PDFs, merge them into one cropped PDF, optionally group by SKU, plus notes on getting the labels from Meesho.',
    intro: 'To crop multiple Meesho shipping labels at once, add all your Meesho label PDFs to the tool in one go. Every page of every file is cropped and the labels are merged into a single PDF. The [Meesho label cropper](/meesho-label-cropper) supports this, with one limit: only one marketplace per run.',
    sections: [
      { h: 'Steps to crop many Meesho labels together', ol: [
        'Open the [Meesho label cropper](/meesho-label-cropper) and select Meesho.',
        'Select several PDFs in the file picker, or drag them in together. You can also add files in several rounds. Each file appears in the list, and you can remove one with the bin icon.',
        'Keep auto-detect on. Tick "Group labels by SKU" if you want same-SKU labels next to each other.',
        'Press Crop Labels. All labels are merged into one PDF, shown in the preview.',
        'Download the PDF and copy the SKU picklist if you want a packing list.',
      ] },
      { h: 'What the batch output looks like', ul: [
        'One PDF with one page per label, named Labels_Meesho_<count>.pdf.',
        'Without SKU grouping, pages follow the order of your files and their pages.',
        'With SKU grouping, pages are sorted by SKU text and the picklist lists each SKU with its quantity. A label whose SKU cannot be read is listed as UNKNOWN.',
      ] },
      { h: 'How to download Meesho shipping labels from Supplier Panel', id: 'download', p: [
        'Label Cropper cannot download labels from Meesho and we do not describe the Supplier Panel menus, because they can change and we cannot verify them here. Use the label download option in your Meesho supplier account and follow Meesho\'s own current help for the exact steps.',
        'What matters for cropping is the file you end up with:',
      ], ul: [
        'It should be the original label PDF, not a screenshot, photo or print-to-PDF of a screenshot.',
        'It should be unlocked. A password-protected PDF cannot be read.',
        'Keep Meesho files separate from Flipkart files.',
        'If you download in several batches, add all the files to the tool together.',
      ] },
      { h: 'Check a large batch before you print', p: ['Open the preview and look at pages from the start, middle and end. If the tool says labels were not detected on some pages, those used the fallback area, so check them closely. Make sure the page count matches the number of orders you expected.'] },
      { h: 'If your browser slows down', p: ['Everything runs on your device, so very large batches depend on its memory. If the page becomes slow, crop in two or three smaller batches and print them one after another.'] },
      { h: 'A practical example', p: ['Example: a seller has three Meesho PDFs from one day, with 12, 30 and 8 labels. They add all three, tick Group labels by SKU and crop. The output is Labels_Meesho_50.pdf. The preview shows 50 pages, same-SKU labels sit together and the picklist gives quantities for packing.'] },
      { h: 'Common mistakes and fixes', ul: [
        'Mixing Meesho and Flipkart files: crop them in separate runs with the right marketplace selected.',
        'Cropping edited or merged PDFs: use original files where you can. Scaled merged files may still work, but check every page.',
        'Not checking the page count: compare it with your order count.',
      ] },
    ],
    faq: [
      { q: 'Can I add more PDFs after the first ones?', a: 'Yes. Files are added to the list each time, until you press Crop Labels.' },
      { q: 'Are the labels sorted automatically?', a: 'Only if you tick Group labels by SKU. Otherwise the order of your files is kept.' },
      { q: 'Does bulk cropping upload my files?', a: 'No. All files are processed in your browser.' },
    ],
    related: ['meesho-label-cropper-guide', 'how-to-crop-meesho-shipping-label-pdf', 'flipkart-bulk-label-cropping'],
  },
];
