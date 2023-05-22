<template>
  <div class="max-w-[1440px]">
    <hero-block />
    <features-block />
    <example-products />
    <popular-products />
    <email-sing-up />
  </div>
</template>

<script lang="ts" setup>
import HeroBlock from "./HeroBlock.vue";
import FeaturesBlock from "./FeaturesBlocks.vue";
import ExampleProducts from "./ExampleProducts.vue";
import PopularProducts from "./PopularProducts.vue";
import EmailSingUp from "./EmailSingUp.vue";
</script>
