import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      rooms : "Rooms",
      guests:"Guests",
      dashboard: "Dashboard",
      prices: "Prices",
      receptionDesk:"Reception Desk",
      transactions: 'Transactions'
    },
  },
  fa: {
    translation: {
      rooms: "اتاق ها",
      guests: "مهمانان",
      dashboard: "داشبورد",
      prices: "قیمت ها",
      receptionDesk: 'میز پذیرش',
      transactions:'معاملات'
    },
  },
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: "fa", 
    interpolation: { escapeValue: false }, 
  });

export default i18n;
