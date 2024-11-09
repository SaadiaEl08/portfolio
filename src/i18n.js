import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import engTranslation from './translations/eng.json';
import arTranslation from './translations/ar.json';
import frTranslation from './translations/fr.json';
import reducer from './store/reducer';
import { legacy_createStore } from 'redux';

const store = legacy_createStore(reducer);
i18n
  .use(initReactI18next)
  .init({
    resources: {
      eng: { translation: engTranslation },
      ar: { translation: arTranslation },
      fr: { translation: frTranslation }
    },
    lng: store.getState().language,
    fallbackLng: 'eng',
    interpolation: {
      escapeValue: false
    },
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation key: ${key} in language: ${lng}`);
    }, returnEmptyString: true,
  });


export default i18n;
