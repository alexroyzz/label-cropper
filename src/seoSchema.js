import { ORIGIN } from './site.js';
import { PLATFORM_ORDER, platformNames } from './platforms.js';
import { stripLinks } from './text.js';

export function createSeoSchema(page) {
  const applicationId = `${ORIGIN}/#app`;
  const websiteId = `${ORIGIN}/#website`;
  const inLanguage = page.lang || 'en';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${ORIGIN}/`,
        name: 'Label Cropper',
        inLanguage: 'en',
      },
      {
        '@type': 'WebApplication',
        '@id': applicationId,
        url: `${ORIGIN}/`,
        name: 'Label Cropper',
        description: `Free browser-based tool for cropping shipping label PDFs for ${platformNames().join(' and ')}. Meesho and Flipkart labels are detected automatically, with an adjustable crop area when needed. PDF files are processed locally in the browser.`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any modern web browser',
        browserRequirements: 'Requires JavaScript and a modern web browser',
        isAccessibleForFree: true,
        inLanguage: 'en',
        featureList: [
          'Crop Meesho and Flipkart shipping label PDFs with automatic label detection',
          'Adjust the crop area manually when a page needs it',
          'Process multiple PDFs of one selected marketplace',
          'Preview and download cropped PDF pages',
          'Optionally sort detected labels by SKU and copy a picklist',
          'Processed in the browser, no upload',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${page.canonical}#webpage`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage,
        isPartOf: { '@id': websiteId },
        about: { '@id': applicationId },
      },
      ...(page.type === 'article' || page.type === 'blog' || page.type === 'bloglang' ? [{
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ORIGIN}/blog` },
          ...(page.type === 'bloglang' ? [{ '@type': 'ListItem', position: 3, name: page.h1, item: page.canonical }] : []),
          ...(page.type === 'article' ? [{ '@type': 'ListItem', position: 3, name: page.post.title, item: page.canonical }] : []),
        ],
      }] : []),
      ...(page.type === 'article' ? [{
        '@type': 'BlogPosting',
        '@id': `${page.canonical}#article`,
        headline: page.post.title,
        description: page.post.description,
        mainEntityOfPage: page.canonical,
        datePublished: page.post.date,
        dateModified: page.post.updated || page.post.date,
        author: { '@type': 'Organization', name: 'Label Cropper', url: `${ORIGIN}/` },
        inLanguage,
        publisher: { '@id': websiteId },
      }] : []),
      ...(page.faq && page.faq.length ? [{
        '@type': 'FAQPage',
        '@id': `${page.canonical}#faq`,
        inLanguage,
        mainEntity: page.faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: stripLinks(a).replace(/\n\n/g, ' ') } })),
      }] : []),
    ],
  };
}

export function serializeSeoSchema(page) {
  return JSON.stringify(createSeoSchema(page)).replaceAll('<', '\\u003c');
}
export { PLATFORM_ORDER };
