// The 20 researched search questions this content set targets. Wording is kept exactly as researched.
// `lang`: 'hinglish' questions are answered in Hinglish. Used by faqData.js and scripts/verify-seo.mjs.
export const Q = {
  1: { q: 'How to crop Meesho shipping labels online?' },
  2: { q: 'Meesho ka label cropper kaise kare?', lang: 'hi-Latn' },
  3: { q: 'Free Meesho label cropper online kahan milega?', lang: 'hi-Latn' },
  4: { q: 'How to convert Meesho PDF labels into 4x6 format?' },
  5: { q: 'How to remove invoice from Meesho shipping label PDF?' },
  6: { q: 'Meesho label thermal printer par kaise print kare?', lang: 'hi-Latn' },
  7: { q: 'How to crop multiple Meesho shipping labels at once?' },
  8: { q: 'Meesho shipping label ka barcode blur kyu hota hai?', lang: 'hi-Latn' },
  9: { q: 'How to download Meesho shipping labels from Supplier Panel?' },
  10: { q: 'Meesho label crop karne ke baad PDF kaise print kare?', lang: 'hi-Latn' },
  11: { q: 'How to crop Flipkart shipping labels online?' },
  12: { q: 'Flipkart ka label cropper kaise kare?', lang: 'hi-Latn' },
  13: { q: 'Free Flipkart label crop and sort tool online?' },
  14: { q: 'How to convert Flipkart shipping label PDF into 4x6?' },
  15: { q: 'How to remove invoice from Flipkart shipping label?' },
  16: { q: 'How to print Flipkart labels on a thermal printer?' },
  17: { q: 'How to crop multiple Flipkart shipping labels together?' },
  18: { q: 'Flipkart shipping label barcode scan nahi ho raha kya kare?', lang: 'hi-Latn' },
  19: { q: 'What is the best 4x6 shipping label cropper for thermal printers?' },
  20: { q: 'How to crop shipping label PDF without losing barcode quality?' },
};
export const qa = (n, a) => ({ q: Q[n].q, a, lang: Q[n].lang, qid: n });
