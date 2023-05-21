import { defineStore } from "pinia";
import i18n from "../i18n";

export const useStore = defineStore("AppStore", () => {
  const setLocale = (newLocale: string) => {
    //@ts-ignore
    i18n.global.locale.value = newLocale;
  };

  return { setLocale };
});
