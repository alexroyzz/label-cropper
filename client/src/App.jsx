import { useRef, useState } from 'react';
import { DEFAULT_PRESETS, cropLabels } from './cropper.js';
import Preview from './Preview.jsx';
import SeoSections from './SeoSections.jsx';

const pct = (v) => String(Math.round(v * 1000) / 10);

export default function App() {
  const [platform, setPlatform] = useState('flipkart');
  const [box, setBox] = useState(DEFAULT_PRESETS.flipkart);
  const [files, setFiles] = useState([]);
  const [sortBySku, setSortBySku] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [autoDetect, setAutoDetect] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const input = useRef(null);

  const pickPlatform = (p) => { setPlatform(p); setBox(DEFAULT_PRESETS[p]); setResult(null); };
  const setField = (k, v) => setBox((b) => ({ ...b, [k]: Math.min(Math.max(Number(v) / 100, 0), 1) }));

  const addFiles = (list) => {
    const pdfs = [...list].filter((f) => f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf'));
    if (!pdfs.length) return setError('Choose PDF files downloaded from your seller panel.');
    setError(''); setResult(null); setFiles(pdfs);
  };

  const run = async () => {
    setBusy(true); setError('');
    try {
      const res = await cropLabels(files, box, { sortBySku, autoDetect, platform });
      setResult(res);
      setShowPreview(true);
    } catch (e) {
      setError('Could not read this PDF. Check that it is an unlocked label PDF for the platform you selected.');
    } finally { setBusy(false); }
  };

  const download = (blob, name) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  const fileName = result ? `Labels_${platform === 'flipkart' ? 'Flipkart' : 'Meesho'}_${result.count}.pdf` : '';
  const downloadResult = () => download(new Blob([result.bytes], { type: 'application/pdf' }), fileName);
  const copyPicklist = () => navigator.clipboard.writeText(result.picklist.map(([s, n]) => `${s}\t${n}`).join('\n'));

  return (
    <main>
      <header>
        <h1>Free Online Shipping Label Cropper</h1>
        <p>Crop Flipkart and Meesho shipping label PDFs. Your PDFs are processed locally in your browser. They are not uploaded to a server.</p>
      </header>

      <div className="platforms" role="radiogroup" aria-label="Platform">
        {['flipkart', 'meesho'].map((p) => (
          <button key={p} role="radio" aria-checked={platform === p} className={platform === p ? 'on' : ''} onClick={() => pickPlatform(p)}>
            {p === 'flipkart' ? 'Flipkart' : 'Meesho'}
          </button>
        ))}
      </div>

      <div
        className="drop"
        onClick={() => input.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}
        tabIndex={0}
        role="button"
        aria-label="Choose label PDF files"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.current.click(); } }}
      >
        <input ref={input} type="file" accept="application/pdf" multiple hidden aria-label="Label PDF files" onChange={(e) => addFiles(e.target.files)} />
        {files.length ? <strong>{files.length} PDF{files.length > 1 ? 's' : ''} ready</strong> : <strong>Drop label PDFs here</strong>}
        <span>{files.length ? files.map((f) => f.name).join(', ') : 'or tap to choose files'}</span>
      </div>

      <section className="opts">
        <label><input type="checkbox" checked={sortBySku} onChange={(e) => setSortBySku(e.target.checked)} /> Group labels by SKU</label>
        <label><input type="checkbox" checked={autoDetect} onChange={(e) => setAutoDetect(e.target.checked)} /> Auto-detect label position on every page (recommended)</label>
        <details>
          <summary>Fine tune crop area (% of page){autoDetect ? ' - only used if auto-detect is off or fails' : ''}</summary>
          <div className="grid">
            {[['x', 'Left'], ['y', 'Top'], ['w', 'Width'], ['h', 'Height']].map(([k, l]) => (
              <label key={k}>{l}<input type="number" min="0" max="100" step="0.5" value={pct(box[k])} onChange={(e) => setField(k, e.target.value)} /></label>
            ))}
          </div>
        </details>
      </section>

      {error && <p className="error" role="alert">{error}</p>}
      <button className="go" disabled={!files.length || busy} onClick={run}>{busy ? 'Cropping...' : 'Crop labels'}</button>

      {result && (
        <section className="result" aria-live="polite" aria-label="Cropped labels result">
          <div>
            <p><strong>{result.count}</strong> labels cropped.</p>
            {result.undetected > 0 && <p className="error">Label position was not found on {result.undetected} page{result.undetected > 1 ? 's' : ''}; the fine-tune area was used there. Please check them in the preview.</p>}
            <div className="actions">
              <button className="go" onClick={() => setShowPreview(true)}>View PDF</button>
              <button className="ghost" onClick={downloadResult}>Download labels PDF</button>
            </div>
            <table aria-label="SKU picklist">
              <thead><tr><th>SKU</th><th>Qty</th></tr></thead>
              <tbody>{result.picklist.map(([s, n]) => <tr key={s}><td>{s}</td><td>{n}</td></tr>)}</tbody>
            </table>
            <button className="ghost" onClick={copyPicklist}>Copy picklist</button>
          </div>
        </section>
      )}

      {result && showPreview && <Preview bytes={result.bytes} filename={fileName} onClose={() => setShowPreview(false)} />}

      <SeoSections />

      <footer>
        <p>Free for Flipkart and Meesho sellers. Your PDFs never leave your browser.</p>
        <p>Not affiliated with Flipkart or Meesho. Names are used only to describe supported label formats.</p>
      </footer>
    </main>
  );
}
