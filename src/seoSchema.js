const ORIGIN = 'https://label-cropper-two.vercel.app';

export function createSeoSchema(page) {
  const applicationId = `${ORIGIN}/#app`;
  const websiteId = `${ORIGIN}/#website`;
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
        description: 'Free browser-based tool for cropping supported Flipkart and Meesho shipping label PDFs. PDF files are processed locally in the browser.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any modern web browser',
        browserRequirements: 'Requires JavaScript and a modern web browser',
        isAccessibleForFree: true,
        inLanguage: 'en',
        featureList: [
          'Crop supported Flipkart shipping label PDFs',
          'Crop supported Meesho shipping label PDFs',
          'Process multiple PDFs of one selected marketplace format',
          'Detect label positions from PDF text with a manual crop fallback',
          'Preview and download cropped PDF pages',
          'Optionally sort detected labels by SKU',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${page.canonical}#webpage`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage: 'en',
        isPartOf: { '@id': websiteId },
        about: { '@id': applicationId },
      },
      ...(page.type === 'article' || page.type === 'blog' ? [{
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ORIGIN}/blog` },
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
        dateModified: page.post.date,
        inLanguage: 'en',
        publisher: { '@id': websiteId },
      }] : []),
    ],
  };
}

export function serializeSeoSchema(page) {
  return JSON.stringify(createSeoSchema(page)).replaceAll('<', '\\u003c');
}
