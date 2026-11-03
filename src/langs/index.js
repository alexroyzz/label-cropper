import { en, hinglish, hi, bn } from './set1.js';
import { mr, te, ta, gu } from './set2.js';
import { kn, ml, pa, or } from './set3.js';
import { as, ur } from './set4.js';

export const LANGS = [en, hinglish, hi, bn, mr, te, ta, gu, kn, ml, pa, or, as, ur];
export const LANG_BY_CODE = Object.fromEntries(LANGS.map((l) => [l.code, l]));
export const OTHER_LANGS = LANGS.filter((l) => l.code !== 'en');
