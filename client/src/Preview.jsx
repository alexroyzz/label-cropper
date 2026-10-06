import { useEffect, useState } from 'react';

// Shows the generated PDF in the browser's own PDF viewer (Chrome / Edge / Firefox) through a Blob URL.
// Zoom, page navigation, scroll, download and print all come from the browser's native toolbar.
export default function Preview({ bytes, filename, onClose }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const u = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [bytes]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="pv" role="dialog" aria-modal="true" aria-label="Label PDF">
      <div className="pv-top">
        <strong className="pv-title">{filename}</strong>
        <div className="pv-actions">
          {url && <a className="pv-btn" href={url} target="_blank" rel="noreferrer">Open in new tab</a>}
          <button className="pv-btn" onClick={onClose}>Close</button>
        </div>
      </div>
      {url && <iframe className="pv-frame" src={url} title={filename} />}
    </div>
  );
}
