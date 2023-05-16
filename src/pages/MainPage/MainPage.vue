<template>
  <div class="relative max-w-[1440px]">
    <hero-block />
    <features-block />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroBlock from "./HeroBlock.vue";
import FeaturesBlock from "./FeaturesBlocks.vue";

export default defineComponent({
  name: "MainPge",
  components: {
    HeroBlock,
    FeaturesBlock,
  },
});
</script>
