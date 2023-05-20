<template>
  <div class="h-fit w-fit px-3 screen-850:h-[703px] screen-850:min-w-[1440px]">
    <img
      src="../../assets/images/heroBlocks.svg"
      alt="banner"
      class="h-0 w-0 screen-850:h-full screen-850:w-full"
    />
    <div class="smallBannerLuxury screen-850:largeBannerLuxury">
      <h2
        class="text-[#22202E] font-medium text-[32px] mb-[20px] leading-[45px]"
      >
        Luxury homeward for people who love timeless design quality
      </h2>
      <span
        class="block text-[18px] leading-[27px] mb-[20px] text-[#5B5676] screen-850:mb-[157px]"
        >Shop the new Spring 2023 collection today</span
      >
      <q-btn
        class="mb-[46px] !bg-[#F9F9F9] screen-850:mx-auto"
        padding="16px 32px"
        text-color="#2A254B"
        no-caps
      >
        <span class="font-satoshi">{{
          translate("actions.view-collections")
        }}</span>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTranslate } from "../../utils";

const { t: translate } = useTranslate();
</script>
