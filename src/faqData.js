import { PLATFORMS } from './platforms.js';
import { qa } from './seoQuestions.js';

export const HOME_FAQ = [
  { q: 'What is a shipping label cropper?', a: 'A shipping label cropper trims a marketplace PDF down to just the shipping label. Seller panels usually give you a full A4 page with the label plus an invoice or other details; the cropper keeps only the label so it can be printed on a label printer.' },
  { q: 'Which marketplaces does it work with?', a: 'Meesho and Flipkart labels are detected automatically. You can also adjust the crop area yourself in Advanced crop settings and check it in the preview.' },
  { q: 'How do I crop a Flipkart shipping label?', a: 'Select Flipkart, drop your label PDF(s) into the tool and click Crop labels. The label position is detected automatically on every page. Then preview the result, download the cropped PDF, or copy the SKU picklist.' },
  { q: 'How do I crop a Meesho shipping label?', a: 'Select Meesho, drop your label PDF(s) into the tool and click Crop labels. The label is detected automatically and the invoice section below it is left out. Then preview, download the PDF, or copy the SKU picklist.' },
  { q: 'Can I crop multiple shipping label PDFs?', a: 'Yes. You can choose several PDF files at once. All their labels are cropped and combined into a single PDF, and you can optionally group them by SKU. Choose one marketplace per run.' },
  { q: 'Can I prepare labels for a 4x6 thermal printer?', a: 'Yes, that is what the tool is for. Each page of the output is just the label, with no margins or extra text, and the original text and barcodes are kept sharp. The pages keep the label’s original size, so in your print dialog choose your 4x6 (100x150mm) paper size and check the scaling.' },
  { q: 'Are my PDF files uploaded to a server?', a: 'No. Your PDFs are processed locally in your browser. They are not uploaded to a server.' },
  { q: 'Is this shipping label cropper free?', a: 'Yes. It is free to use, with no sign-up.' },
  qa(19, `There is no single tool that is best for everyone, and we cannot verify claims about other tools, so here is what to check instead. For 4x6 thermal printing you want reliable label detection for your marketplace, output that keeps barcodes sharp instead of turning the page into a picture, a preview before you print, and clear information about the output size.

Label Cropper is built for Meesho and Flipkart labels only. It keeps the original text and barcodes, shows a preview and can group labels by SKU. It does not resize labels to an exact 4x6 page or place several labels on one sheet, so you set the 4x6 paper size and scaling in your print dialog. The full checklist is in the [4x6 thermal label cropper guide](/blog/4x6-thermal-label-cropper-guide).`),
  qa(20, `Use a cropper that crops the original PDF instead of re-drawing the page as an image. Label Cropper copies the chosen area of each original page into the new PDF without resizing it, so the text and barcodes stay as they were in your file. It cannot improve a barcode that was low quality in the original.

After cropping, most quality loss happens at print time: scaling the page up or down, a draft print mode, low darkness or a dirty print head. Print at 100% or Actual size where you can, and scan-test one label before printing a batch. No tool can promise that every barcode will scan on every printer, so always test. More in [shipping label barcode quality](/blog/shipping-label-barcode-quality).`),
];

const MARKET_QA = {
  meesho: [
    qa(1, `Select Meesho in the tool, add your unedited Meesho label PDF (one or several files), leave "Auto-detect label position on every page" ticked and press Crop Labels. Check the preview, then download the cropped PDF. The file is processed in your browser and is not uploaded.

Step-by-step with a checklist: [how to crop a Meesho shipping label PDF](/blog/how-to-crop-meesho-shipping-label-pdf).`),
    qa(2, `Tool mein Meesho select karo, seller panel se download ki hui original label PDF upload karo aur Crop Labels dabao. Preview mein barcode aur address check karo, phir cropped PDF download kar lo. File aapke browser mein hi process hoti hai, kisi server par upload nahi hoti.

Poori Hinglish guide: [Meesho ka label cropper kaise kare](/blog/hinglish/meesho-label-cropper-kaise-kare).`),
    qa(3, `Ye site hi ek free Meesho label cropper hai. Is page ke upar wale tool mein PDF daalo aur crop karo: sign-up aur watermark ki zaroorat nahi. Tool kya karta hai aur kya nahi (jaise exact 4x6 resize nahi karta), ye English mein [Meesho label cropper guide](/blog/meesho-label-cropper-guide) mein likha hai.`),
    qa(4, `Label Cropper crops the Meesho label out of the page but does not resize it to an exact 4x6. Each output page keeps the cropped label's own size. To print on a 4x6 (100x150 mm) roll, choose that paper size in the print dialog and set the scaling. In the layout this tool handles, the Meesho label is wider than it is tall, so test the scaling and scan the barcode on one label first. Details: [Meesho PDF to 4x6 label](/blog/meesho-pdf-to-4x6-label).`),
    qa(5, `The tool does not delete the invoice from your file. It crops each page down to the label area, so the invoice that sits below the label is not visible in the cropped PDF. The crop hides the rest of the page rather than erasing it: the new file still carries the original page content, clipped to the label, so do not rely on it to redact the invoice before sharing the file. Your original PDF is unchanged and the invoice is not saved separately. Check a few pages in the preview. More in [removing the invoice from a Meesho label PDF](/blog/meesho-pdf-to-4x6-label#invoice).`),
    qa(6, `Cropped PDF download karo, use PDF viewer mein kholo, print dialog mein paper size 4x6 (100x150 mm) chuno, margins None ya Minimum rakho aur scaling check karo. Pehle sirf ek label print karke barcode scan karke dekho, phir baaki print karo. Printer ke model ke hisaab se settings alag ho sakti hain, isliye hum kisi specific printer ki compatibility ka daava nahi karte. Poori guide: [Meesho thermal printer guide](/blog/meesho-thermal-printer-guide).`),
    qa(7, `Yes. Add several Meesho PDFs at once, or add more files one after another, then press Crop Labels. Every page of every file is cropped and the labels are merged into a single PDF, which you can optionally group by SKU. Use one marketplace per run: Meesho and Flipkart PDFs have to be cropped separately. See [bulk Meesho label cropping](/blog/meesho-bulk-label-cropping).`),
    qa(8, `Cropping se barcode blur nahi hota: tool original text aur barcode ko dobara draw ya resize nahi karta. Blur aksar print ke samay hota hai: page ko zyada chhota ya bada scale karna, low print quality ya darkness, dirty print head, ya sirf screen par kam zoom hona. Agar original PDF ka barcode hi low-quality image hai, to crop use behtar nahi bana sakta. Check karne ke steps: [shipping label barcode quality](/blog/shipping-label-barcode-quality).`),
    qa(9, `Label Cropper does not download labels from Meesho. You download the label PDF yourself from your Meesho supplier account, and because the menus and options can change, follow Meesho's own current instructions for that step. What matters for cropping is that the file is the original PDF: unlocked, unedited and not a screenshot. Then add it to the tool. More in [bulk Meesho label cropping](/blog/meesho-bulk-label-cropping#download).`),
    qa(10, `Cropped PDF download karo (ya Preview Result se browser ke PDF viewer mein kholo) aur Print dabao. Sahi paper size chuno, margins None ya Minimum rakho aur scaling dhyan se set karo. Pehle sirf page 1 print karke barcode scan karke dekho, phir poora batch print karo. Steps aur common galtiyan: [Meesho thermal printer guide](/blog/meesho-thermal-printer-guide).`),
  ],
  flipkart: [
    qa(11, `Select Flipkart in the tool, add your unedited Flipkart label PDF (one or several files), leave "Auto-detect label position on every page" ticked and press Crop Labels. Review the preview, then download the cropped PDF. Your file is processed in the browser and is not uploaded.

Step-by-step with a checklist: [how to crop Flipkart shipping label PDFs](/blog/how-to-crop-flipkart-shipping-label-pdf).`),
    qa(12, `Tool mein Flipkart select karo, seller panel se download ki hui label PDF upload karo aur Crop Labels dabao. Preview mein barcode aur address poora dikhe to cropped PDF download karo. Aur detail mein: [Flipkart label cropper guide](/blog/flipkart-label-cropper-guide) aur Hinglish mein [Flipkart ka label cropper kaise kare](/blog/hinglish/flipkart-label-cropper-kaise-kare).`),
    qa(13, `Yes. This tool is free, needs no sign-up and adds no watermark. Add one or more Flipkart label PDFs, tick "Group labels by SKU" and press Crop Labels: the cropped labels are sorted by the SKU text the tool can read, and a SKU picklist with quantities is shown that you can copy. Sorting is by SKU only, not by courier, order date or pincode, and a label without readable SKU text is listed as UNKNOWN. See the [Flipkart label cropper guide](/blog/flipkart-label-cropper-guide).`),
    qa(14, `Label Cropper crops the Flipkart label out of the page but does not resize it to an exact 4x6. Each output page keeps the cropped label's size, which in the layout this tool handles is a portrait label of roughly 3 x 5 inches. For a 4x6 (100x150 mm) roll, choose that paper size when printing and check the scaling, then test one label. Details: [Flipkart PDF to 4x6 label](/blog/flipkart-pdf-to-4x6-label).`),
    qa(15, `The tool does not delete the invoice from your file. It finds the Flipkart label on each page and crops to it, so the invoice below the label is not visible in the cropped PDF. The crop hides the rest of the page rather than erasing it, so do not rely on it to redact the invoice before sharing the file. The original PDF is unchanged and the invoice is not saved separately. Check the preview, and see [removing the invoice from a Flipkart label](/blog/flipkart-pdf-to-4x6-label#invoice).`),
    qa(16, `Crop the PDF, download it and open it in a PDF viewer. In the print dialog choose your thermal printer, set the paper size to 4x6 (100x150 mm), set margins to None or Minimum and check the scaling. Print one label first and scan its barcode before printing the rest. Settings differ between printer models, so we do not claim support for any specific model. Full steps: [Flipkart thermal printer guide](/blog/flipkart-thermal-printer-guide).`),
    qa(17, `Add all your Flipkart PDFs at once (or add more files one after another) and press Crop Labels. All pages are cropped and merged into one PDF. Tick "Group labels by SKU" if you want same-SKU labels together. Flipkart and Meesho files must be cropped in separate runs. More in [bulk Flipkart label cropping](/blog/flipkart-bulk-label-cropping).`),
    qa(18, `Pehle check karo ki barcode poora print hua hai aur crop se kata nahi. Phir print scaling 100% ya Actual size ke paas rakho, print darkness/quality badhao, print head saaf karo aur alag scanner ya app se scan karke dekho. Crop karne se barcode ki quality kam nahi hoti, par original PDF ya print settings kharab ho to scan fail ho sakta hai. Poore steps: [shipping label barcode quality](/blog/shipping-label-barcode-quality).`),
  ],
};

export function marketFaq(pid) {
  const { name, auto } = PLATFORMS[pid];
  return [
    ...MARKET_QA[pid],
    { q: `Is the ${name} label cropper free?`, a: 'Yes. It is free to use, with no sign-up and no watermark.' },
    auto
      ? { q: `Does it detect the ${name} label automatically?`, a: `Yes. The ${name} layout is detected from the PDF text on each page. If a page is not detected, the tool reports it and uses the manual crop area for that page, so check the preview.` }
      : { q: `Does it detect the ${name} label automatically?`, a: `Not yet. Automatic detection is built for the Flipkart and Meesho layouts. For ${name}, set Left, Top, Width and Height in Advanced crop settings, crop, and check the preview. The same area is used on every page.` },
    { q: `Can I crop and sort ${name} labels by SKU?`, a: 'You can add several PDFs from one marketplace, tick Group labels by SKU and copy the SKU picklist. This needs readable SKU text in the PDF; otherwise the picklist shows UNKNOWN for that label.' },
    { q: 'Are my label PDFs uploaded?', a: 'No. The PDF is read and cropped in your browser and is not sent to a Label Cropper server.' },
  ];
}
