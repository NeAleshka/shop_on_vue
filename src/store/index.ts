import { defineStore } from "pinia";
import i18n from "../i18n";
import { ref } from "vue";

export const useStore = defineStore("AppStore", () => {
  const setLocale = (newLocale: string) => {
    //@ts-ignore
    i18n.global.locale.value = newLocale;
  };

  const featuresData = ref([
    {
      icon: "Delivery",
      title: "Next day as standard",
      sub: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: "Checkmark",
      title: "Made by true artisans",
      sub: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: "Purchase",
      title: "Unbeatable prices",
      sub: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      icon: "Sprout",
      title: "Recycled packaging",
      sub: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ]);

  let selectedLabel = ref("");
  const setLabel = (label: string) => {
    selectedLabel.value = label;
  };

  return { setLocale, setLabel, selectedLabel, featuresData };
});
