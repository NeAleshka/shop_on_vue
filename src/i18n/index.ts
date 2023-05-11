import { createI18n } from "vue-i18n";
import en from "./en.json";
import ru from "./ru.json";

const langs = {
  ru,
  en,
};

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages: Object.assign(langs),
});
