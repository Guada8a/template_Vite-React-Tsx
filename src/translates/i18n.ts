import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // Usa las traducciones importadas
    fallbackLng: 'es',
    lng: 'es', // Configura el idioma inicial como español
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
