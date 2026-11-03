// Small explanatory illustrations for the guides. They show where the crop falls on a page; they are not real labels.
// Proportions follow the layouts the detector is built for (A4 page, label near the top, invoice below).
const LAYOUTS = {
  meesho: { x: 0.02, y: 0.015, w: 0.96, h: 0.4 },
  flipkart: { x: 0.317, y: 0.03, w: 0.366, h: 0.425 },
};

export default function CropFigure({ kind, alt, caption }) {
  const L = LAYOUTS[kind];
  const W = 119;
  const H = 168;
  const id = `fig-${kind}`;
  // The output box is the label drawn at a size that keeps its text inside it.
  const k = Math.min(1.5, 84 / (L.w * W));
  const out = { w: L.w * W * k, h: L.h * H * k };
  return (
    <figure className="crop-fig">
      <svg viewBox="0 0 300 198" role="img" aria-labelledby={`${id}-t`} focusable="false">
        <title id={`${id}-t`}>{alt}</title>
        <g transform="translate(14 11)">
          <rect width={W} height={H} rx="3" className="fig-page" />
          <rect x={L.x * W} y={L.y * H} width={L.w * W} height={L.h * H} className="fig-label" />
          <text x={(L.x + L.w / 2) * W} y={(L.y + L.h / 2) * H + 3} textAnchor="middle" className="fig-text">Label</text>
          <rect x={5} y={(L.y + L.h) * H + 8} width={W - 10} height={H - (L.y + L.h) * H - 16} className="fig-invoice" />
          <text x={W / 2} y={(L.y + L.h) * H + (H - (L.y + L.h) * H) / 2 + 3} textAnchor="middle" className="fig-text muted-text">Invoice</text>
        </g>
        <path d="M146 95h34m-8-7 8 7-8 7" className="fig-arrow" />
        <g transform={`translate(${200 + (80 - out.w) / 2} ${95 - out.h / 2})`}>
          <rect width={out.w} height={out.h} className="fig-label" />
          <text x={out.w / 2} y={out.h / 2 + 3} textAnchor="middle" className="fig-text">Label only</text>
        </g>
        <text x="14" y="195" className="fig-cap">Original A4 page</text>
        <text x="240" y="195" textAnchor="middle" className="fig-cap">Output</text>
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
