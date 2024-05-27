import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return <footer>{i18n.language === "en" ? "footer" : "فووتر"}</footer>;
};

export default Footer;
