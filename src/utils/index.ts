import { useI18n } from "vue-i18n";
import { MessageSchema } from "../i18n";
import en from "../i18n/locales/en.json";

export const useTranslate = () => {
  const { t, locale } = useI18n<
    {
      message: MessageSchema;
    },
    "en"
  >({
    inheritLocale: true,
    useScope: "global",
    messages: {
      en: en,
    },
  });
  return { t, locale };
};

