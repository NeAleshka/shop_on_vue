<template>
  <div>
    <div class="max-w-[1440px] mx-auto">
      <hero-block />
      <features-block />
      <example-products />
      <popular-products />
    </div>
    <div class="max-w-[1440px] mx-auto">
      <desing-block />
    </div>
    <email-sing-up />
  </div>
</template>

<script lang="ts" setup>
import HeroBlock from "./HeroBlock.vue";
import FeaturesBlock from "./FeaturesBlock.vue";
import ExampleProducts from "./ExampleBlock.vue";
import PopularProducts from "./PopularBlock.vue";
import EmailSingUp from "./EmailBclock.vue";
import DesingBlock from "./DesingBlock.vue";
</script>
