<template>
  <div
    class="flex justify-center bg-cover bg-[url('./src/assets/images/EmailBackground.svg')]"
  >
    <div class="w-full h-full pt-[97px] flex flex-col items-center">
      <h2 class="font-normal text-[36px] text-white leading-[50px] mb-[16px]">
        Join the club and get the benefits
      </h2>
      <p
        class="text-white text-[16px] leading-[24px] font-satoshi mb-[30px] max-w-[470px] text-center"
      >
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <div class="flex justify-between space-x-11 mb-[40px]">
        <div v-for="item in advantages">
          <div class="flex items-center">
            <q-icon name="check_circle" size="16px" color="white" />
            <div class="ml-[10px] text-white">{{ item }}</div>
          </div>
        </div>
      </div>
      <horizontal-input
        :placeHolder="'your@email.com'"
        :buttonText="'Sing Up'"
        @btn-click="btnClick"
        class="mb-[86px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HorizontalInput from "../../components/HorizontalInput.vue";

const advantages = ["Exclusive offers", "Free events", "Large discounts"];

const btnClick = () => {
  console.log("btn was clicked");
};
</script>
