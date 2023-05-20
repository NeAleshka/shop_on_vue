<template>
  <div class="w-fit mx-auto flex !flex-nowrap px-3">
    <div
      class="bg-dark-primary py-[60px] px-[20px] flex flex-col justify-between xl:px-[60px]"
    >
      <div class="w-full">
        <h2 class="bannerTitle text-[20px] leading-[25px] text-white mb-[40px]">
          The furniture brand for the future, with timeless designs
        </h2>
        <q-btn
          class="no-hover mb-[46px] !bg-[#F9F9F926]"
          padding="16px 32px"
          no-caps
        >
          <span class="font-satoshi text-light-grey">View collection</span>
        </q-btn>
      </div>
      <p
        class="bannerDescription font-satoshi text-[18px] leading-[27px] text-light-grey"
      >
        A new era in eco friendly furniture with Avelon, the French luxury
        retail brand with nice fonts, tasteful colors and a beautiful way to
        display things digitally using modern web technologies.
      </p>
    </div>
    <img
      src="../../assets/images/FurnitureBanerImg.svg"
      alt="image"
      class="bannerImg"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FurnitureBaner",
  data() {
    return {};
  },
});
</script>

<style>
.bannerTitle {
  max-width: 400px;
}
.bannerImg {
  display: block;
}

.bannerDescription {
  max-width: 600px;
}

@media screen and (max-width: 1200px) {
  .bannerTitle {
    max-width: 100%;
  }
  .bannerDescription {
    max-width: 100%;
  }
}

@media screen and (max-width: 1000px) {
  .bannerImg {
    display: none;
  }
}
</style>
