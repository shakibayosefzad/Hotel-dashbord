import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import enTranslation from "../locales/en.json";
import faTranslation from "../locales/fa.json";

i18n
  .use(Backend) // برای لود کردن فایل‌های ترجمه
  .use(LanguageDetector) // برای تشخیص زبان از مرورگر
  .use(initReactI18next) // ادغام با react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fa: { translation: faTranslation }
    },
    lng: "fa", // زبان پیش‌فرض
    fallbackLng: "en", // اگر ترجمه‌ای نبود، انگلیسی نمایش بده
    interpolation: { escapeValue: false }
  });

export default i18n;
