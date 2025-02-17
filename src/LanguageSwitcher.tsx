import React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("welcome")}</h1>
      <button onClick={changeLanguage}>{t("click_me")}</button>
    </div>
  );
};

export default LanguageSwitcher;
