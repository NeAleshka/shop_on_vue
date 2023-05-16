import { useI18n } from "vue-i18n";
import { MessageSchema } from "../i18n";
import en from "../i18n/en.json";

export const useTraslate = () => {
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
  return { t,locale };
};
