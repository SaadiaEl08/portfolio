import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import arTranslation from './translations/ar.json';
import frTranslation from './translations/fr.json';
import reducer from './store/reducer';
import { legacy_createStore } from 'redux';

const store = legacy_createStore(reducer);
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      fr: { translation: frTranslation }
    },
    lng: store.getState().language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation key: ${key} in language: ${lng}`);
    }, returnEmptyString: true,
  });


export default i18n;
