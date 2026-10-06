# Label Cropper - Flipkart & Meesho, 4x6 thermal labels

100% frontend (React + Vite). All PDF processing happens in the browser with pdf.js + pdf-lib.
There is no backend, database or API: your PDFs are never uploaded anywhere.

Flow: PDF chosen in the browser -> pdf.js reads the text -> Flipkart/Meesho label detection ->
pdf-lib crops (original vectors, no resampling) -> generated PDF shown in the browser's native
PDF viewer -> Download / Print.

## Run
    cd client
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # static files in client/dist, host anywhere (Netlify, Vercel, GitHub Pages, ...)

## Crop calibration
Both platforms are auto-detected from the page text (see `client/src/labelLogic.js`).
`DEFAULT_PRESETS` in `client/src/cropper.js` (x/y/w/h as fractions of the page, y from the top)
are only the fallback used when auto-detect is off or fails; they can also be tuned live in the
"Fine tune crop area" box.
