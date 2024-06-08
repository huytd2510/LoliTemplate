import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from '@src/assets/i18n';

i18n.use(initReactI18next).init({
  resources: resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
