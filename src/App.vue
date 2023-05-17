<template>
  <div class="flex justify-center">
    <div
      class="max-w-[1440px]"
      :style="{
        width: `${windowWidth}px`,
      }"
    >
      <page-header />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import PageHeader from "./components/PageHeader.vue";
import { useWindowSize } from "@vueuse/core";

export default {
  components: {
    PageHeader,
  },

  computed: {
    resizeWindow() {
      return useWindowSize().width;
    },
  },

  data() {
    return {
      windowWidth: useWindowSize().width,
    };
  },

  watch: {
    windowWidth() {
      console.log(this.windowWidth);
    },
  },
};
</script>
