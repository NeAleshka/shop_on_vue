<template>
  <div class="h-[730px] w-[1440px]">
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
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
//@ts-ignore
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
