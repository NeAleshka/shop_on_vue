<template>
  <div class="w-[305px] bg-light-grey p-[48px]">
    <img :src="getImgUrl(dataBlock.icon)" alt="icon" />
    <p>{{ dataBlock.title }}</p>
    <span>{{ dataBlock.sub }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeatureBlock",
  props: {
    dataBlock: Object,
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(imageName) {
      return new URL(`../assets/images/${imageName}.svg`, import.meta.url).href;
    },
  },
});
</script>
