import { set } from "@/configs/localstorage.service";
import { Avatar } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header>
      Header
      <Avatar
        src={
          i18n.language === "en"
            ? "https://flagcdn.com/w20/eg.png"
            : "https://flagcdn.com/w20/gb.png"
        }
        onClick={() => {
          i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar").then(() => {
            set("lang", i18n.language);
          });
        }}
      />
    </header>
  );
};

export default Header;
