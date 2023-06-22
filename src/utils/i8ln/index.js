import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../../locales/en.json';
import translationID from '../../locales/in.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  in: {
    translation: translationID,
  },
};

const lang = {
  init: () => {
    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources,
        fallbackLng: localStorage.getItem('lang') || 'in', // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
          escapeValue: false, // react already safes from xss
        },
      });
  },
};

export default lang;
