import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ja from './locales/ja.json'
import zh_Hans from './locales/zh_Hans.json'
import zh_Hant from './locales/zh_Hant.json'

export default createI18n({
    locale: "en",
    legacy: false,
    messages: {
        en,
        ja,
        zh_Hans,
        zh_Hant
    }
  })