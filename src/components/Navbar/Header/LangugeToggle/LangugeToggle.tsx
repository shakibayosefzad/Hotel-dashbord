import React from "react";
import { useTranslation } from "react-i18next";
import "../../../../../src/i18n";

function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
  };

  return (
    <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg mx-5">
      {i18n.language === "fa" ? (
        <button onClick={() => changeLanguage("en")}>🇺🇸</button>
      ) : (
        <button onClick={() => changeLanguage("fa")}>🇮🇷</button>
      )}
    </div>
  );
}

export default LanguageToggle;
