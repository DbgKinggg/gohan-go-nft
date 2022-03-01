import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import zh_Hans from "./locales/zh_Hans.json";
import zh_Hant from "./locales/zh_Hant.json";

const defaultLocale = "en";

export default (localeFromUrl) => {
  return createI18n({
    locale: "en",
    legacy: false,
    messages: {
      en,
      zh_Hans,
      zh_Hant,
    },
  });
};
