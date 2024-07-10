// eslint-disable-next-line import/extensions
/* eslint-disable import/extensions */
import enLang from './entries/en-us.js';
import itLang from './entries/it-it.js';
import vnLang from './entries/vi-vn.js';

export const AppLanguages = [
  {
    languageId: 'vietnamese',
    locale: 'vi',
    name: 'Vietnamese',
    icon: 'vn',
  },
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  {
    languageId: 'italian',
    locale: 'it',
    name: 'Italiano',
    icon: 'it',
  },
];

const AppLocale = {
  en: enLang,
  vi: vnLang,
  it: itLang,
};

export default AppLocale;
