// Marketplaces the site targets. `auto` = the tool can detect the label box from the PDF text.
// To add a marketplace: add an entry here, append its id to PLATFORM_ORDER, and add a crop preset in presets.js.
// Entries with `auto: false` use the manual crop area (full page by default) until a layout is measured.
export const PLATFORMS = {
  meesho: {
    name: 'Meesho', auto: true, path: '/meesho-label-cropper',
    title: 'Meesho Label Cropper Online Free | Crop Shipping Label PDF',
    description: 'Free Meesho shipping label cropper. Crop Meesho seller label PDFs for 4x6 thermal printing, sort by SKU and copy a picklist. No signup, runs in your browser.',
    h1: 'Meesho Label Cropper for Shipping Label PDFs',
    intro: 'Crop a supported Meesho shipping label PDF, check the result in the built-in preview, and download the cropped pages. Processing stays in your browser.',
  },
  flipkart: {
    name: 'Flipkart', auto: true, path: '/flipkart-label-cropper',
    title: 'Flipkart Label Cropper Online Free | Crop & Sort Label Tool',
    description: 'Free Flipkart shipping label cropper and sort tool. Crop Flipkart order PDFs into thermal-ready labels, group by SKU and copy a picklist. Private, no signup.',
    h1: 'Flipkart Label Cropper for Shipping Label PDFs',
    intro: 'Use the Flipkart label cropper to trim supported shipping label pages, review the cropped PDF, and download it for printing. Your files are processed on your device.',
  },
};
export const PLATFORM_ORDER = ['meesho', 'flipkart'];
export const platformNames = () => PLATFORM_ORDER.map((p) => PLATFORMS[p].name);
