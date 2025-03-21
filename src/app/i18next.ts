import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { getUserLanguage } from '@/shared/lib/hooks/useLanguage/getUserLanguage';

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: getUserLanguage() || 'ru',
    fallbackLng: 'ru',
    debug: true,
    supportedLngs: ['ru', 'en'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

export default i18next;
