import { PDFDocument } from 'pdf-lib';
import * as pdfjs from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { extractSku, findFlipkartBox, findMeeshoBox } from './labelLogic.js';
import { DEFAULT_PRESETS } from './presets.js';

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

// Reads, for every page: the SKU, and the exact label box found from the page text (Flipkart or Meesho layout).
async function readPages(bytes, platform) {
  const doc = await pdfjs.getDocument({ data: bytes.slice(0) }).promise;
  const pages = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const { items } = await page.getTextContent();
    const t = items.filter((it) => it.str.trim()).map((it) => ({ s: it.str.trim(), x: it.transform[4], y: it.transform[5], w: it.width }));
    const [x0, y0, x1, y1] = page.view;
    const plain = page.rotate === 0 && x0 === 0 && y0 === 0; // detection assumes an unrotated, origin-based page
    const find = platform === 'meesho' ? findMeeshoBox : findFlipkartBox;
    pages.push({ sku: extractSku(t), auto: plain ? find(t, x1, y1) : null });
  }
  await doc.destroy();
  return pages;
}

export async function cropLabels(files, box, { sortBySku, autoDetect, platform = 'flipkart' }) {
  const items = [];
  for (const file of files) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const src = await PDFDocument.load(bytes);
    const info = await readPages(bytes, platform);
    src.getPages().forEach((page, i) => items.push({ page, sku: info[i]?.sku || 'UNKNOWN', auto: info[i]?.auto || null }));
  }
  if (sortBySku) items.sort((a, b) => a.sku.localeCompare(b.sku));

  const out = await PDFDocument.create();
  let undetected = 0;

  for (const { page, sku, auto } of items) {
    const { width, height } = page.getSize();
    let left, right, top, bottom;
    if (autoDetect && auto) {
      ({ left, right, top, bottom } = auto);
    } else {
      if (autoDetect) undetected += 1;
      left = box.x * width;
      right = Math.min(left + box.w * width, width);
      top = height - box.y * height;
      bottom = Math.max(top - box.h * height, 0);
    }
    const emb = await out.embedPage(page, { left, right, top, bottom });
    // The output page is exactly the cropped label: same size, no scaling, no margins, no extra text.
    // embedPage keeps the original vector text/barcodes and the original image streams untouched.
    const bw = right - left;
    const bh = top - bottom;
    const p = out.addPage([bw, bh]);
    p.drawPage(emb, { x: 0, y: 0, width: bw, height: bh });
  }

  const picklist = {};
  items.forEach(({ sku }) => { picklist[sku] = (picklist[sku] || 0) + 1; });
  return {
    bytes: await out.save(),
    count: items.length,
    undetected,
    picklist: Object.entries(picklist).sort((a, b) => a[0].localeCompare(b[0])),
  };
}
