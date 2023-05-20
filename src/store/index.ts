import { defineStore } from "pinia";
import { ref } from "vue";
// import { useTranslate } from "../utils";
import i18n from "../i18n";

export const useStore = defineStore("AppStore", () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  const currentLocale = ref(localStorage.getItem("locale") || "en");
  const setLocale = (newLocale: string) => {
    //@ts-ignore
    i18n.global.locale.value = newLocale;
    currentLocale.value = newLocale;
  };

  return { increment, count, currentLocale, setLocale };
});
