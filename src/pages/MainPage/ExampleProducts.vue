<template>
  <div class="w-full px-[80px] pb-[56px]">
    <h2 class="text-[32px] text-dark-primary mb-[33px] font-normal">
      {{ translate("titles.new-ceramics") }}
    </h2>
    <div class="flex justify-center mb-[50px] md:!justify-between">
      <example-product
        v-for="product in ExampleProductsData"
        :product="product"
      />
    </div>

    <div class="w-full overflow-hidden">
      <transition name="bounce">
        <div v-if="shadowBox" class="flex justify-between mb-[50px]">
          <example-product
            v-for="product in ExampleProductsData"
            :product="product"
          />
        </div>
      </transition>
    </div>

    <div @click="toggleBox" class="w-full flex justify-center">
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
import { useTranslate } from "../../utils";
import ExampleProduct from "../../components/ExampleProduct.vue";

const { t: translate } = useTranslate();
import { ref } from "vue";

let shadowBox = ref(false);

const toggleBox = () => {
  shadowBox.value = !shadowBox.value;
};

const ExampleProductsData = [
  {
    name: "The Dandy chair",
    price: "£" + 250,
    imgName: "FurnitureBanerImg",
  },
  {
    name: " Rustic Vase Set",
    price: "£" + 150,
    imgName: "ExampleProduct_2",
  },
  {
    name: "The Silky Vase",
    price: "£" + 125,
    imgName: "ExampleProduct_3",
  },
  {
    name: "The Lucy Lamp",
    price: "£" + 399,
    imgName: "ExampleProduct_2",
  },
];
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 1.5s;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
