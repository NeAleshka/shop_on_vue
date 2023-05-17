<template>
  <div
    class="flex mx-auto"
    :style="{
      width: windowWidth < 1460 ? `${windowWidth}px` : '',
    }"
  >
    <div
      class="bg-dark-primary py-[60px] pl-[20px] grow flex flex-col justify-between xl:px-[60px]"
    >
      <div>
        <h2
          class="max-w-[400px] text-[20px] leading-[25px] text-white mb-[40px] xl:text-[32px] xl:max-w-[600px] xl:leading-[45px]"
        >
          The furniture brand for the future, with timeless designs
        </h2>
        <q-btn
          class="no-hover mb-[46px] !bg-[#F9F9F926]"
          padding="16px 32px"
          no-caps
        >
          <span class="font-satoshi text-light-grey">View collection</span>
        </q-btn>
      </div>
      <p
        class="max-w-[400px] w-fit font-satoshi text-[18px] leading-[27px] text-light-grey xl:max-w-[600px]"
      >
        A new era in eco friendly furniture with Avelon, the French luxury
        retail brand with nice fonts, tasteful colors and a beautiful way to
        display things digitally using modern web technologies.
      </p>
    </div>
    <!-- <img src="../../assets/images/FurnitureBanerImg.svg" class="h-[703px]" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWindowSize } from "@vueuse/core";
export default defineComponent({
  name: "FurnitureBaner",
  data() {
    return {
      windowWidth: useWindowSize().width,
    };
  },
});
</script>
