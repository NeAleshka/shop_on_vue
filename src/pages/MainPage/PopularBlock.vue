<template>
  <div class="pt-[56px] pb-[48px]">
    <h2 class="text-[32px] text-dark-primary mb-[33px] font-normal">
      {{ translate("titles.our-popular-products") }}
    </h2>
    <swiper
      :slides-per-view="3"
      :space-between="80"
      :loop="true"
      :modules="module"
      :autoplay="{
        delay: 2500,
      }"
      class="mb-[35px]"
    >
      <swiper-slide v-for="product in popularProductsData">
        <example-product :product="product" />
      </swiper-slide>
    </swiper>
    <div class="w-full flex justify-center">
      <q-btn
        class="!bg-[#F9F9F9]"
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

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
//@ts-ignore
import { Autoplay } from "swiper";
import ExampleProduct from "../../components/ExampleProduct.vue";
import { useTranslate } from "../../utils";

const module = [Autoplay];
const { t: translate } = useTranslate();

const popularProductsData = [
  {
    name: "The Poplar suede sofa",
    price: "£" + 980,
    imgName: "PopularItem_1",
    styles: {
      maxWidth: "630px",
    },
  },
  {
    name: "The Dandy chair",
    price: "£" + 250,
    imgName: "FurnitureBanerImg",
    styles: {
      maxWidth: "630px",
    },
  },
  {
    name: "The Dandy chair",
    price: "£" + 250,
    imgName: "PopularItem_2",
  },
  {
    name: "The Poplar suede sofa",
    price: "£" + 980,
    imgName: "PopularItem_1",
    styles: {
      maxWidth: "630px",
    },
  },
  {
    name: "The Dandy chair",
    price: "£" + 250,
    imgName: "FurnitureBanerImg",
    styles: {
      maxWidth: "630px",
    },
  },
  {
    name: "The Dandy chair",
    price: "£" + 250,
    imgName: "PopularItem_2",
  },
];
</script>
<style scoped>
.swiper-slide {
  width: fit-content !important;
}
</style>
