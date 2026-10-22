import { POSTS, BLOG_INDEX } from './blogPosts.js';

const ORIGIN = 'https://label-cropper-two.vercel.app';

export const SEO_PAGES = {
  '/': {
    type: 'home',
    platform: 'flipkart',
    title: 'Free Shipping Label Cropper Online | Flipkart & Meesho',
    description: 'Crop Flipkart and Meesho shipping label PDFs online for free. Upload PDFs, preview cropped labels, and download results directly in your browser.',
    canonical: `${ORIGIN}/`,
    h1: 'Free Shipping Label Cropper for Flipkart & Meesho',
    intro: 'Crop shipping label PDFs online, preview the result, and download a print-ready PDF. This browser-based shipping label PDF cutter processes your files on your device; they are not uploaded to a server.',
  },
  '/meesho-label-cropper': {
    type: 'meesho',
    platform: 'meesho',
    title: 'Meesho Label Cropper Online Free | Crop Shipping Label PDF',
    description: 'Crop supported Meesho shipping label PDFs in your browser. Review automatic detection, adjust the crop if needed, and download the label PDF.',
    canonical: `${ORIGIN}/meesho-label-cropper`,
    h1: 'Meesho Label Cropper for Shipping Label PDFs',
    intro: 'Crop a supported Meesho shipping label PDF, check the result in the built-in preview, and download the cropped pages. Processing stays in your browser.',
  },
  '/flipkart-label-cropper': {
    type: 'flipkart',
    platform: 'flipkart',
    title: 'Flipkart Label Cropper Online Free | Shipping Label PDF Tool',
    description: 'Crop supported Flipkart shipping label PDFs online. Preview detected labels, fine-tune the crop area when needed, and download the PDF in your browser.',
    canonical: `${ORIGIN}/flipkart-label-cropper`,
    h1: 'Flipkart Label Cropper for Shipping Label PDFs',
    intro: 'Use the Flipkart label cropper to trim supported shipping label pages, review the cropped PDF, and download it for printing. Your files are processed on your device.',
  },
  '/how-to-crop-shipping-labels': {
    type: 'tutorial',
    platform: 'flipkart',
    title: 'How to Crop a Shipping Label PDF Online | Label Cropper',
    description: 'Follow a practical guide to cropping supported Flipkart or Meesho shipping label PDFs, checking detection, adjusting a crop, and printing the result.',
    canonical: `${ORIGIN}/how-to-crop-shipping-labels`,
    h1: 'How to Crop a Shipping Label PDF Online',
    intro: 'Prepare a supported Flipkart or Meesho label PDF, review each crop, and print the result with this step-by-step guide.',
  },
};

SEO_PAGES['/blog'] = { type: 'blog', platform: 'flipkart', ...BLOG_INDEX, canonical: `${ORIGIN}/blog`, h1: 'Shipping Label Guides', intro: 'Guides for Flipkart and Meesho sellers on cropping, printing and protecting shipping label PDFs.' };
for (const post of POSTS) {
  SEO_PAGES[`/blog/${post.slug}`] = { type: 'article', platform: 'flipkart', title: `${post.title} | Label Cropper`, description: post.description, canonical: `${ORIGIN}/blog/${post.slug}`, h1: post.title, intro: post.description, post };
}

export function normalizePath(pathname = '/') {
  const path = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return path || '/';
}

export function getSeoPage(pathname) {
  return SEO_PAGES[normalizePath(pathname)] || SEO_PAGES['/'];
}
