<template>
  <div class="w-full px-[80px]">
    <h2
      class="mt-[80px] text-[24px] text-dark-primary w-fit mx-auto font-normal"
    >
      What makes our brand different
    </h2>
    <div class="flex justify-between">
      <FeatureBlock v-for="block in dataBlocks" :data-block="block" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeaturesData from "./FeaturesData";
import FeatureBlock from "../../components/FeatureBlock.vue";

export default defineComponent({
  name: "FeaturesBlock",
  components: {
    FeatureBlock,
  },
  data() {
    return {
      dataBlocks: FeaturesData,
    };
  },
  methods: {},
});
</script>
