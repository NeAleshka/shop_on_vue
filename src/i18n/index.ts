import en from "./locales/en.json";
import ru from "./locales/ru.json";
import { createI18n } from "vue-i18n";
export const langs = {
  ru,
  en,
};

export type MessageSchema = typeof en;

export default createI18n<[MessageSchema], "en" | "ru">({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  globalInjection: true,
  legacy: false,
  messages: langs,
});

