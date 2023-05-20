<template>
  <select @change="switchLang">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ traslate(`langs.${sLocale}`) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import Trans from "../i18n/translation";
import { useTranslate } from "../utils";

const { t: traslate, locale } = useTranslate();

const supportedLocales = Trans.suportedLocales;

const switchLang = async (event: any) => {
  const newLocale = event.target.value;
  await Trans.switchLang(newLocale);
};
</script>
