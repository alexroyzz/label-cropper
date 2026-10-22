import { useEffect, useRef, useState } from 'react';
import { DEFAULT_PRESETS } from './presets.js';
import Preview from './Preview.jsx';
import SeoSections from './SeoSections.jsx';
import SeoPageContent from './SeoPageContent.jsx';
import BlogPage from './Blog.jsx';
import { getSeoPage } from './seoPages.js';

const pct = (v) => String(Math.round(v * 1000) / 10);
const sizeLabel = (n) => n < 1048576 ? `${Math.max(1, Math.round(n / 1024))} KB` : `${(n / 1048576).toFixed(1)} MB`;
function Icon({ name, size = 20 }) {
  const base = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const shapes = {
    upload: <><path d="M12 16V4m-5 5 5-5 5 5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5"/></>,
    check: <path d="m5 12 4 4L19 6"/>, close: <path d="m18 6-12 12M6 6l12 12"/>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></>,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
    scissors: <><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="m8.1 8.1 11.9 11.9M8.1 15.9 20 4"/></>,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>,
    printer: <><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
    folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>,
    trash: <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>,
    moon: <path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10Z"/>,
    download: <path d="M12 4v12m-5-5 5 5 5-5M4 20h16"/>,
    refresh: <path d="M20 11a8 8 0 0 0-14-4L4 9m0-5v5h5M4 13a8 8 0 0 0 14 4l2-2m0 5v-5h-5"/>,
    chevron: <path d="m6 9 6 6 6-6"/>,
  };
  return <svg {...base}>{shapes[name]}</svg>;
}

export default function App({ pathname = typeof window === 'undefined' ? '/' : window.location.pathname }) {
  const seoPage = getSeoPage(pathname);
  const [platform, setPlatform] = useState(seoPage.platform);
  const [box, setBox] = useState(DEFAULT_PRESETS[seoPage.platform]);
  const [files, setFiles] = useState([]);
  const [sortBySku, setSortBySku] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [autoDetect, setAutoDetect] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [dark, setDark] = useState(false);
  const input = useRef(null);

  useEffect(() => { try { if (localStorage.getItem('lc-theme') === 'dark') setDark(true); } catch (e) {} }, []);
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; try { localStorage.setItem('lc-theme', dark ? 'dark' : 'light'); } catch (e) {} }, [dark]);
  const accent = (t) => t.split(/(Flipkart & Meesho|Flipkart|Meesho)/).map((x, i) => i % 2 ? <span key={i} className="accent">{x}</span> : x);
  const nav = [['/', 'Home', 'home'], ['/meesho-label-cropper', 'Meesho Cropper', 'meesho'], ['/flipkart-label-cropper', 'Flipkart Cropper', 'flipkart'], ['/how-to-crop-shipping-labels', 'How-to Guide', 'tutorial'], ['/blog', 'Blog', 'blog']];

  const pickPlatform = (p) => { setPlatform(p); setBox(DEFAULT_PRESETS[p]); setResult(null); };
  const setField = (k, v) => setBox((b) => ({ ...b, [k]: Math.min(Math.max(Number(v) / 100, 0), 1) }));

  const addFiles = (list) => {
    const pdfs = [...list].filter((f) => f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf'));
    if (!pdfs.length) return setError('Choose PDF files downloaded from your seller panel.');
    setError(''); setResult(null); setFiles((current) => [...current, ...pdfs]);
  };

  const run = async () => {
    setBusy(true); setError('');
    try {
      const { cropLabels } = await import('./cropper.js');
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
  const reset = () => { setFiles([]); setResult(null); setError(''); setShowPreview(false); if (input.current) input.current.value = ''; };

  if (seoPage.type === 'blog' || seoPage.type === 'article') return <BlogPage page={seoPage} />;
  const brand = <a className="brand" href="/"><span className="brand-mark"><Icon name="layers" size={20}/></span><span>Label Cropper</span></a>;
  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Main navigation">{brand}
        <div className="nav-links">{nav.map(([h, l, t]) => <a key={h} href={h} className={seoPage.type === t ? 'active' : ''}>{l}</a>)}</div>
        <div className="nav-end"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle dark mode"><Icon name="moon" size={18}/></button><a href="#label-tool" className="nav-cta">Free Tool</a>
        <details className="mobile-nav"><summary aria-label="Menu">&#9776;</summary><div>{nav.map(([h, l]) => <a key={h} href={h}>{l}</a>)}</div></details></div>
      </nav>
      <section className="hero"><div className="hero-copy"><div className="eyebrow"><i/> 100% Free &bull; No Upload &bull; Works in Browser</div><h1>{accent(seoPage.h1)}</h1><p>{seoPage.intro}</p>
        <div className="market-switch" role="radiogroup" aria-label="Marketplace">{['flipkart', 'meesho'].map((p) => <button key={p} role="radio" aria-checked={platform === p} className={`market-option ${platform === p ? 'selected' : ''}`} onClick={() => pickPlatform(p)}>{p === 'flipkart' ? 'Flipkart' : 'Meesho'}</button>)}</div></div>
        <div className="hero-art" aria-hidden="true"><div className="art-circle"/><div className="label-illustration back-label"><i/><i/><b/></div><div className="label-illustration front-label"><small>SHIPPING LABEL</small><strong>DELIVERY</strong><span/><small>TRACKING &middot; 4028 6913</small></div><span className="art-market flip">Flipkart</span><span className="art-market meesho">Meesho</span><span className="art-scissors"><Icon name="scissors" size={26}/></span></div></section>
      <section className="tool-card" id="label-tool" aria-label="Shipping label crop tool">
      {result ? <section className="success-panel" aria-live="polite"><span className="success-check"><Icon name="check" size={30}/></span><h2>Labels Cropped Successfully!</h2><p>{result.count} {result.count === 1 ? 'label has' : 'labels have'} been cropped and merged into a single PDF.</p>
        <button className="button-primary big" onClick={downloadResult}><Icon name="download" size={18}/> Download Cropped PDF</button>
        <div className="success-actions"><button className="button-secondary" onClick={() => setShowPreview(true)}>Preview Result</button><button className="button-secondary" onClick={reset}><Icon name="refresh" size={16}/> Crop Another PDF</button></div>
        {result.undetected > 0 && <p className="error">Label position was not found on {result.undetected} page{result.undetected > 1 ? 's' : ''}; the fine-tune area was used. Check the preview.</p>}
        {result.picklist.length > 0 && <div className="picklist-box"><strong>SKU picklist</strong><table aria-label="SKU picklist"><thead><tr><th>SKU</th><th>Qty</th></tr></thead><tbody>{result.picklist.map(([s, n]) => <tr key={s}><td>{s}</td><td>{n}</td></tr>)}</tbody></table><button className="text-button" onClick={copyPicklist}>Copy picklist</button></div>}
        <p className="privacy-note"><Icon name="shield" size={14}/> All processing was done in your browser. Your files are not uploaded to any server.</p></section> : <>
      <div className="dropzone" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}><input ref={input} type="file" accept="application/pdf,.pdf" multiple aria-label="Choose shipping label PDF files" onChange={(e) => { addFiles(e.target.files); e.target.value = ''; }}/><span className="upload-icon"><Icon name="upload" size={44}/></span><div className="drop-copy"><strong>Drag &amp; drop your PDF here</strong><span>or <u>click to browse</u> files</span><small>Supports {platform === 'flipkart' ? 'Flipkart' : 'Meesho'} shipping labels, invoices and multi-page PDFs.</small><button type="button" className="button-primary" onClick={() => input.current?.click()}><Icon name="folder" size={17}/> Browse Files</button></div></div>
      {files.length > 0 && <div className="file-list" aria-label="Selected PDF files">{files.map((f, i) => <div className="file-row" key={`${f.name}-${f.size}-${i}`}><span className="file-icon"><Icon name="file" size={26}/></span><span className="file-name"><strong>{f.name}</strong><small>{sizeLabel(f.size)}</small></span><span className="file-status"><Icon name="check" size={15}/> Ready</span><button type="button" className="icon-button" onClick={() => setFiles((c) => c.filter((_, j) => i !== j))} aria-label={`Remove ${f.name}`}><Icon name="trash" size={18}/></button></div>)}</div>}
      <div className="settings"><label className="setting-row"><input type="checkbox" checked={sortBySku} onChange={(e) => setSortBySku(e.target.checked)}/><span className="setting-copy"><strong>Group labels by SKU</strong><small>Keep labels of the same SKU together in the output PDF.</small></span></label>
      <label className="setting-row"><input type="checkbox" checked={autoDetect} onChange={(e) => setAutoDetect(e.target.checked)}/><span className="setting-copy"><strong>Auto-detect label position on every page (recommended)</strong><small>Automatically find label areas on each page.</small></span></label></div>
      <details className="advanced-settings"><summary><span><strong>Advanced crop settings</strong><small>Fine tune crop area (% of page) - {autoDetect ? 'only used if auto-detect is off or fails' : 'used for every page'}</small></span><Icon name="chevron" size={18}/></summary><div className="crop-grid">{[['x', 'Left'], ['y', 'Top'], ['w', 'Width'], ['h', 'Height']].map(([k, l]) => <label key={k}>{l} (%)<input type="number" min="0" max="100" step="0.5" value={pct(box[k])} onChange={(e) => setField(k, e.target.value)}/></label>)}</div></details>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="button-primary crop-button" disabled={!files.length || busy} onClick={run}>{busy ? <><span className="spinner"/> Cropping your labels…</> : <><Icon name="scissors" size={20}/> Crop Labels <Icon name="arrow" size={18}/></>}</button></>}
      </section>
      <section className="feature-strip" aria-label="Tool features"><article><span><Icon name="bolt" size={26}/></span><div><h3>Fast &amp; Easy</h3><p>Upload, crop and download in seconds.</p></div></article><article><span><Icon name="shield" size={26}/></span><div><h3>100% Private</h3><p>All processing happens in your browser.</p></div></article><article><span><Icon name="printer" size={26}/></span><div><h3>Print-Ready</h3><p>Download high-quality cropped PDFs.</p></div></article><article><span><Icon name="grid" size={26}/></span><div><h3>Supports Both</h3><p>Works with Flipkart and Meesho labels.</p></div></article></section>

      {seoPage.type === 'home' ? <SeoSections /> : <SeoPageContent page={seoPage} />}

      <footer className="site-footer"><a className="brand" href="/"><span className="brand-mark"><Icon name="layers" size={18}/></span><span>Label Cropper</span></a><p><a href="/blog">Blog</a> &middot; Free for Flipkart and Meesho sellers. Not affiliated with either marketplace.</p></footer>
      {result && showPreview && <Preview bytes={result.bytes} filename={fileName} onClose={() => setShowPreview(false)} />}
    </main>
  );
}
