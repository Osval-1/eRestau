import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales, getCalendars } from 'expo-localization';
import en from "./translations/en/en.json";
import fr from "./translations/fr/fr.json";

const resources = {
  en: en,
  fr: fr,
};

const initI18n = async () => {
  console.log(getLocales()[0].languageCode)
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: getLocales()[0].languageCode,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
