import { PLATFORMS, PLATFORM_ORDER } from './platforms.js';
import { LANGS, LANG_BY_CODE } from './langs/index.js';
import { GUIDE_LINKS } from './guideLinks.js';

export const GUIDE_DATE = '2026-11-03';

export const slugFor = (lang, pid) => (lang.code === 'en' ? `how-to-crop-${pid}-shipping-label-pdf` : `${pid}-label-cropper${lang.suffix}`);
export const pathFor = (lang, pid) => (lang.code === 'en' ? `/blog/${slugFor(lang, pid)}` : `/blog/${lang.code}/${slugFor(lang, pid)}`);
export const hubPath = (lang) => `/blog/${lang.code}`;
export const guideCopy = (lang, pid) => lang.t(PLATFORMS[pid].name, PLATFORMS[pid].auto);

// English Meesho and Flipkart guides are written by hand in blogPosts.js; every other language/platform pair is generated here.
const handWritten = (lang, pid) => lang.code === 'en' && (pid === 'meesho' || pid === 'flipkart');

function buildPost(lang, pid) {
  const P = PLATFORMS[pid].name;
  const t = guideCopy(lang, pid);
  return {
    lang: lang.code, platform: pid, slug: slugFor(lang, pid), path: pathFor(lang, pid), category: P, minutes: 3, date: GUIDE_DATE,
    title: t.title, description: t.desc, summary: t.desc, intro: t.intro,
    sections: [{ h: t.stepsH, ol: t.steps }, { h: t.checkH, p: [t.check] }, { h: t.modeH, p: [t.mode] }],
    faq: t.faq.map(([q, a]) => ({ q, a })),
    resources: [],
    relatedLinks: [
      ...PLATFORM_ORDER.filter((o) => o !== pid).map((o) => ({ href: pathFor(lang, o), title: guideCopy(lang, o).title })),
      // The detailed guides exist in English (and one in Hinglish), so only the Hinglish pages link to them.
      ...(lang.code === 'hinglish' ? GUIDE_LINKS[pid].map(([title, href]) => ({ href, title })) : []),
    ],
    relatedH: lang.code === 'hinglish' ? 'Ye guides bhi padho' : undefined,
  };
}

export function buildGeneratedPosts() {
  const out = [];
  for (const lang of LANGS) for (const pid of PLATFORM_ORDER) if (!handWritten(lang, pid)) out.push(buildPost(lang, pid));
  return out;
}

export const enFaq = (pid) => guideCopy(LANG_BY_CODE.en, pid).faq.map(([q, a]) => ({ q, a }));
export const enSummary = (pid) => guideCopy(LANG_BY_CODE.en, pid).desc;

// hreflang alternates for one platform guide across every language.
export function alternatesFor(pid, origin) {
  const list = LANGS.map((l) => ({ hreflang: l.hreflang, href: `${origin}${pathFor(l, pid)}` }));
  list.push({ hreflang: 'x-default', href: `${origin}${pathFor(LANG_BY_CODE.en, pid)}` });
  return list;
}
