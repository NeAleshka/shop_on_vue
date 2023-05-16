<template>
  <swiper
    :pagination="{
      type: 'bullets',
      clickable: true,
    }"
    :modules="modules"
    effect="cube"
    :loop="true"
  >
    <swiper-slide>
      <luxury-banner />
    </swiper-slide>
    <swiper-slide>
      <furniture-brand />
    </swiper-slide>
    <swiper-slide>
      <furniture-brand />
    </swiper-slide>
    <swiper-slide>
      <furniture-brand />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, EffectCube } from "swiper";
import LuxuryBanner from "../../components/Banners/LuxuryHome.vue";
import FurnitureBrand from "../../components/Banners/FurnitureBrand.vue";
export default defineComponent({
  name: "HeroBlock",

  setup() {
    return {
      modules: [Pagination, EffectCube],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    LuxuryBanner,
    FurnitureBrand,
  },
});
</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #000;
}
</style>
