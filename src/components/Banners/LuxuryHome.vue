<template>
  <div>
    <img src="../../assets/images/heroBlocks.svg" />
    <div
      class="absolute top-[130px] bg-white pl-[56px] pt-[50px] pr-[60px] max-w-[630px] rounded-2xl"
      :style="{
        left: width < 1500 ? `${width - 830}px` : '',
        right: width > 1500 ? '80px' : '',
      }"
    >
      <h2
        class="text-[#22202E] font-medium text-[32px] mb-[20px] leading-[45px]"
      >
        Luxury homeward for people who love timeless design quality
      </h2>
      <span class="block text-[18px] leading-[27px] mb-[157px] text-[#5B5676]"
        >Shop the new Spring 2023 collection today</span
      >
      <q-btn
        class="no-hover mb-[46px] !bg-[#F9F9F9]"
        padding="16px 32px"
        text-color="#2A254B"
        no-caps
      >
        <span class="font-satoshi">View collection</span>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWindowSize } from "@vueuse/core";

export default defineComponent({
  data() {
    return {
      width: useWindowSize().width,
    };
  },
});
</script>
