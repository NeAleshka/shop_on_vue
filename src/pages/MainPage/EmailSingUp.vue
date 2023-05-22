<template>
  <div class="flex justify-center py-[58px] px-[80px] bg-light-grey">
    <div
      class="w-full h-full bg-white pt-[68px] pb-[54px] flex flex-col items-center"
    >
      <h2
        class="font-normal text-[36px] text-dark-primary leading-[50px] mb-[16px]"
      >
        Join the club and get the benefits
      </h2>
      <p
        class="text-dark-primary text-[16px] leading-[24px] font-satoshi mb-[72px] max-w-[470px] text-center"
      >
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </p>
      <horizontal-input
        :placeHolder="'your@email.com'"
        :buttonText="'Sing Up'"
        @btn-click="btnClick"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import HorizontalInput from "../../components/HorizontalInput.vue";

const btnClick = () => {
  console.log("btn was clicked");
};
</script>
