<template>
  <div class="px-[20px] xl:px-[80px] mx-auto w-full mb-[90px]">
    <h2
      class="mt-[80px] w-fit text-[24px] text-dark-primary mx-auto font-normal"
    >
      What makes our brand different
    </h2>
    <div class="flex justify-center w-full md:!justify-between">
      <feature-block v-for="block in featuresData" :data-block="block" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "../../store";
import FeatureBlock from "../../components/FeatureBlock.vue";
import { storeToRefs } from "pinia";


const store = useStore();
const { featuresData } = storeToRefs(store);
</script>
