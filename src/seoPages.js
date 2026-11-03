import { ENGLISH_POSTS, LOCAL_POSTS, BLOG_INDEX } from './blogPosts.js';
import { ORIGIN } from './site.js';
import { PLATFORMS, PLATFORM_ORDER } from './platforms.js';
import { HOME_FAQ, marketFaq } from './faqData.js';
import { LANGS, LANG_BY_CODE, OTHER_LANGS } from './langs/index.js';
import { alternatesFor, hubPath, pathFor } from './guides.js';

export const SEO_PAGES = {
  '/': {
    type: 'home',
    platform: 'flipkart',
    title: 'Free Shipping Label Cropper for Meesho & Flipkart',
    description: 'Free online shipping label cropper for Meesho & Flipkart sellers. Crop PDF labels for 4x6 thermal printing in your browser. No signup, no upload.',
    canonical: `${ORIGIN}/`,
    h1: 'Free Shipping Label Cropper for Meesho & Flipkart',
    intro: 'Crop shipping label PDFs online, preview the result, and download a print-ready PDF. Meesho and Flipkart labels are detected automatically, with an adjustable crop area when you need it. Your files are processed on your device and never uploaded.',
    faq: HOME_FAQ,
  },
  '/how-to-crop-shipping-labels': {
    type: 'tutorial',
    platform: 'flipkart',
    title: 'How to Crop a Shipping Label PDF Online | Label Cropper',
    description: 'A practical guide to cropping Meesho or Flipkart shipping label PDFs, checking the crop, and printing the result on a 4x6 thermal printer.',
    canonical: `${ORIGIN}/how-to-crop-shipping-labels`,
    h1: 'How to Crop a Shipping Label PDF Online',
    intro: 'Prepare a label PDF from your seller panel, review each crop, and print the result with this step-by-step guide.',
  },
};

SEO_PAGES['/privacy'] = {
  type: 'privacy',
  platform: 'flipkart',
  title: 'Privacy Policy | Label Cropper',
  description: 'Learn how Label Cropper handles browser-based PDF processing, theme preferences, and website requests.',
  canonical: `${ORIGIN}/privacy`,
  h1: 'Privacy Policy',
};

SEO_PAGES['/terms'] = {
  type: 'terms',
  platform: 'flipkart',
  title: 'Terms & Conditions | Label Cropper',
  description: 'Terms for using the Label Cropper browser-based shipping label PDF tool and guides.',
  canonical: `${ORIGIN}/terms`,
  h1: 'Terms & Conditions',
};

for (const pid of PLATFORM_ORDER) {
  const p = PLATFORMS[pid];
  SEO_PAGES[p.path] = { type: pid, platform: pid, title: p.title, description: p.description, canonical: `${ORIGIN}${p.path}`, h1: p.h1, intro: p.intro, faq: marketFaq(pid) };
}

SEO_PAGES['/blog'] = { type: 'blog', platform: 'flipkart', ...BLOG_INDEX, canonical: `${ORIGIN}/blog`, h1: 'Shipping Label Guides', intro: 'Guides for Meesho and Flipkart sellers on cropping, printing and protecting shipping label PDFs, in English, Hinglish and 12 Indian languages.' };

const addPost = (post) => {
  const lang = LANG_BY_CODE[post.lang];
  SEO_PAGES[post.path] = {
    type: 'article', platform: post.platform || 'flipkart', lang: lang.hreflang, langCode: lang.code, locale: lang.locale, dir: lang.dir,
    title: post.seoTitle || `${post.title} | Label Cropper`, description: post.description, canonical: `${ORIGIN}${post.path}`, h1: post.title, intro: post.description, post,
    faq: post.faq,
    alternates: post.platform ? alternatesFor(post.platform, ORIGIN) : undefined,
  };
};
ENGLISH_POSTS.forEach(addPost);
LOCAL_POSTS.forEach(addPost);

for (const lang of OTHER_LANGS) {
  SEO_PAGES[hubPath(lang)] = {
    type: 'bloglang', platform: 'flipkart', lang: lang.hreflang, langCode: lang.code, locale: lang.locale, dir: lang.dir,
    title: `${lang.ui.hubH} | Label Cropper`, description: lang.ui.hubIntro, canonical: `${ORIGIN}${hubPath(lang)}`, h1: lang.ui.hubH, intro: lang.ui.hubIntro,
  };
}

export function normalizePath(pathname = '/') {
  const path = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return path || '/';
}

export function getSeoPage(pathname) {
  return SEO_PAGES[normalizePath(pathname)] || SEO_PAGES['/'];
}
export { LANGS, pathFor };
