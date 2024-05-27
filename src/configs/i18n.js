import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enTranslations, arTranslations } from "../translations";
import { get } from "./localstorage.service";

/**
 * A simple custom hook to start the localization throughout the project
 * @param {string} locale define the currently-selected language in the route
 * @returns {func} initializes the i18n configs
 */
const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: get("lang") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
