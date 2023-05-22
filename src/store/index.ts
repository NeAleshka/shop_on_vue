import { defineStore } from "pinia";
import i18n from "../i18n";
import { ref } from "vue";

export const useStore = defineStore("AppStore", () => {
  const setLocale = (newLocale: string) => {
    //@ts-ignore
    i18n.global.locale.value = newLocale;
  };

  let selectedLabel = ref("");
  const setLabel = (label: string) => {
    selectedLabel.value = label;
  };

  return { setLocale, setLabel, selectedLabel };
});
