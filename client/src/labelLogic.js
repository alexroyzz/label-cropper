// Pure helpers: no browser or Vite imports, so they can be unit-tested in Node.
// "t" = array of text items { s, x, y } in PDF user space (origin bottom-left, y grows upward).

// ---------- Flipkart label geometry (measured from a real seller PDF, A4 595x842) ----------
// Everything is relative to the "Not for resale." text that sits just above the label's bottom border.
const FK = {
  ref: 'Not for resale',
  refWidth: 48.8,   // width of that text at scale 1
  left: 2.3,        // border is this far LEFT of the text's x
  below: 7.5,       // border is this far BELOW the text's baseline
  w: 213.7,         // label width
  h: 352.5,         // label height
  pad: 2,           // breathing room added on every side (the dashed cut line is ~4pt below the border)
};

// Returns { left, right, top, bottom } in PDF user space, or null if this is not a Flipkart label.
export function findFlipkartBox(items, pageW, pageH) {
  const ref = items.find((it) => it.s.startsWith(FK.ref));
  if (!ref) return null;
  let s = ref.w ? ref.w / FK.refWidth : 1;      // handles PDFs that were scaled when merged
  s = s < 0.4 || s > 2.5 ? 1 : Math.abs(s - 1) < 0.03 ? 1 : s;
  const p = FK.pad * s;
  const left = ref.x - FK.left * s;
  const bottom = ref.y - FK.below * s;
  const box = {
    left: Math.max(left - p, 0),
    right: Math.min(left + FK.w * s + p, pageW),
    bottom: Math.max(bottom - p, 0),
    top: Math.min(bottom + FK.h * s + p, pageH),
  };
  return box.right - box.left > 50 && box.top - box.bottom > 50 ? box : null;
}

// ---------- Meesho label geometry (measured from a real Meesho seller PDF, A4 595x842) ----------
// The label is the top block of the page: Customer Address / Return Address / COD / Valmo / QR / routing / barcode /
// Product Details. The "TAX INVOICE" strip and the invoice below it are NOT part of the label.
// Anchors (PDF user space, y up): "Customer Address" heading (top-left) and the "TAX INVOICE" heading, which sits
// directly under the label's bottom border (fallback anchor: the "Product Details" heading).
const MS = {
  ref: /^customer address/i,
  refWidth: 89.46,   // width of the "Customer Address" heading at scale 1
  left: 7,           // outer edge of the left border is this far LEFT of the heading's x (border is 2pt wide)
  top: 17.56,        // outer edge of the top border is this far ABOVE the heading's baseline
  w: 571,            // label width, outer edge to outer edge (x 12 -> 583)
  taxAbove: 12.56,   // bottom border's outer edge is this far ABOVE the "TAX INVOICE" baseline
  pdAbove: 41.83,    // ... or this far ABOVE the "Product Details" baseline (fallback)
  minH: 200,         // sanity limits for the label height at scale 1
  maxH: 500,
};

// Returns { left, right, top, bottom } in PDF user space, or null if this is not a Meesho label.
// The box ends exactly at the bottom border of the Product Details section: no TAX INVOICE, no extra margin.
export function findMeeshoBox(items, pageW, pageH) {
  const ref = items.filter((it) => MS.ref.test(it.s)).sort((a, b) => b.y - a.y)[0];
  const pd = ref && items.filter((it) => /^product details/i.test(it.s) && it.y < ref.y).sort((a, b) => b.y - a.y)[0];
  if (!ref || !pd) return null;
  let s = ref.w ? ref.w / MS.refWidth : 1;      // handles PDFs that were scaled when merged
  s = s < 0.4 || s > 2.5 ? 1 : Math.abs(s - 1) < 0.03 ? 1 : s;

  const tax = items.filter((it) => /^tax invoice/i.test(it.s) && it.y < pd.y).sort((a, b) => b.y - a.y)[0];
  const bottomY = tax ? tax.y + MS.taxAbove * s : pd.y - MS.pdAbove * s;

  const left = ref.x - MS.left * s;
  const box = {
    left: Math.max(left, 0),
    right: Math.min(left + MS.w * s, pageW),
    top: Math.min(ref.y + MS.top * s, pageH),
    bottom: Math.max(bottomY, 0),
  };
  const h = box.top - box.bottom;
  return box.right - box.left > 50 && h > MS.minH * s && h < MS.maxH * s ? box : null;
}

// ---------- SKU extraction ----------
const SKU_RE = /SKU(?:\s*ID)?\s*[:|]?\s*([A-Za-z0-9][A-Za-z0-9_\-.]{1,40})/i;
const HEADER_WORDS = /^(description|id|qty|size|color)$/i;

// Meesho: header row "SKU | Size | Qty | Color | Order No." with the value in the row below the SKU column.
function meeshoSku(t) {
  const head = t.find((it) => it.s === 'SKU');
  const size = head && t.find((it) => it.s === 'Size' && Math.abs(it.y - head.y) < 3);
  if (!head || !size) return null;
  const row = t.filter((it) => it.y < head.y - 2 && it.y > head.y - 30 && it.x >= head.x - 2 && it.x < size.x - 2);
  row.sort((a, b) => b.y - a.y || a.x - b.x);
  return row.map((it) => it.s).join(' ') || null;
}

// Flipkart: table "SKU ID | Description | QTY". Rows below it look like "1  <SKU ID> | <description>   <qty>".
// We take the text before the first "|" of each numbered row. Several products -> joined with " + ".
function flipkartSku(t) {
  const head = t.find((it) => /^SKU\s*ID\b/i.test(it.s));
  if (!head) return null;
  const qty = t.find((it) => it.s === 'QTY' && Math.abs(it.y - head.y) < 3);
  const rightLimit = qty ? qty.x - 2 : Infinity;
  const serialLimit = head.x - 40;               // the "1", "2" serial numbers sit far left of the header text
  const rows = t.filter((it) => it.y < head.y - 2 && it.y > head.y - 50 && it.x < rightLimit);
  rows.sort((a, b) => b.y - a.y || a.x - b.x);

  const lines = [];                                // group by baseline
  for (const it of rows) {
    const last = lines[lines.length - 1];
    if (last && Math.abs(last.y - it.y) < 2) last.items.push(it); else lines.push({ y: it.y, items: [it] });
  }
  const products = [];
  for (const ln of lines) {
    ln.items.sort((a, b) => a.x - b.x);
    const first = ln.items[0];
    const isNew = /^\d{1,2}$/.test(first.s) && first.x < serialLimit;
    const text = ln.items.slice(isNew ? 1 : 0).map((it) => it.s).join(' ');
    if (isNew || !products.length) products.push(text); else products[products.length - 1] += ' ' + text;
  }
  const skus = products.map((p) => p.split('|')[0].replace(/\s+/g, ' ').trim()).filter(Boolean);
  return skus.length ? skus.join(' + ') : null;
}

export function extractSku(t) {
  const sku = meeshoSku(t) || flipkartSku(t);
  if (sku) return sku;
  const m = t.map((it) => it.s).join(' ').match(SKU_RE);
  return m && !HEADER_WORDS.test(m[1]) ? m[1] : 'UNKNOWN';
}
