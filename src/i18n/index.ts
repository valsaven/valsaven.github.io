import type { Translations } from './types.ts';

import enTranslations from './en';
import jaTranslations from './ja';

const translations: Translations = {
  en: enTranslations,
  ja: jaTranslations,
};

const t = (key: string, locale: keyof Translations = 'en') => {
  const levels = key.split('.');
  let result: any = translations[locale];

  for (let level of levels) {
    result = result[level];
    if (result === undefined) {
      return undefined;
    }
  }

  return result;
};

export { t };
