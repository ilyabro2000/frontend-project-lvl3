import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from './ru';
import en from './en';

const initObj = {
  fallbackLng: 'ru',
  load: 'languageOnly',
  whitelist: ['en', 'ru'],
  debug: false,
  resources: {
    ru,
    en,
  },
};

i18next.use(LanguageDetector);

export { i18next, initObj };
