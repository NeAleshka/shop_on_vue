<template>
  <div class="hover:transition hover:scale-105 duration-500 mb-[20px]">
    <img
      :src="getImgUrl(props.product.imgName)"
      class="h-[375px] mb-[24px] rounded-xl"
      :style="props.product?.styles"
    />
    <div class="text-[#2A254B] text-[20px] leading-[28px] mb-[8px]">
      {{ props.product.name }}
    </div>
    <div class="text-[18px] leading-[27px]">{{ props.product.price }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const getImgUrl = (imageName: string) => {
  return new URL(`../assets/images/${imageName}.svg`, import.meta.url).href;
};
</script>

<style></style>
