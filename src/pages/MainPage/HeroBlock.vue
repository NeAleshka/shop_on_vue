<template>
  <div class="h-auto max-w-[1440px]">
    <swiper
      :pagination="{
        type: 'bullets',
        clickable: true,
      }"
      :modules="modules"
      :loop="true"
      :autoHeight="true"
      effect="flip"
      :mousewheel="true"
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
import { Pagination, EffectCube, EffectFlip, Mousewheel } from "swiper";
import LuxuryBanner from "../../components/Banners/LuxuryHome.vue";
import FurnitureBrand from "../../components/Banners/FurnitureBrand.vue";

export default defineComponent({
  name: "HeroBlock",

  setup() {
    return {
      modules: [Pagination, EffectFlip, Mousewheel],
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
