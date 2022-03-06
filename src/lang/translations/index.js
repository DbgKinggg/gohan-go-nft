export default {
  en: {
    name: "English",
    load: () => {
      return import("./en.json");
    },
  },
  zh_Hans: {
    name: "简体中文",
    load: () => {
      return import("./zh_Hans.json");
    },
  },
  zh_Hant: {
    name: "繁體中文",
    load: () => {
      return import("./zh_Hant.json");
    },
  },
};
