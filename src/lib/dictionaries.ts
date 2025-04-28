import 'server-only';
import { Locale } from './i18n/config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Default to 'en' if the locale is not supported
  const validLocale = (Object.keys(dictionaries).includes(locale) 
    ? locale 
    : 'en') as Locale;
    
  return dictionaries[validLocale]();
};