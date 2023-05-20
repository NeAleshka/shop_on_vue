import i18n from ".";

const TransLation = {
  get suportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },

  get CurrentLocales() {
    return i18n.global.locale;
  },

  set currentLocale(newLocale: string) {
    //@ts-ignore
    i18n.global.locale.value = newLocale;
  },

  switchLang(newLocale: string) {
    TransLation.currentLocale = newLocale;
  },
};
export default TransLation;
