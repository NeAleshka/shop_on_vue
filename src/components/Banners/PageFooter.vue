<template>
  <div class="bg-dark-primary pb-[22px] pt-[58px]">
    <div class="px-[82px] flex justify-between mb-[48px]">
      <div class="text-white">
        <div>Menu</div>
        <ul>
          <li v-for="item in data.menuItems">{{ item }}</li>
        </ul>
      </div>
      <div class="text-white">
        <div>Categories</div>
        <ul>
          <li v-for="item in data.categories">{{ item }}</li>
        </ul>
      </div>
      <div class="text-white">
        <div>Our Company</div>
        <ul>
          <li v-for="item in data.about">{{ item }}</li>
        </ul>
      </div>
      <div>
        <horizontal-input
          :buttonText="'Sing Up'"
          :buttonStyles="{ background: 'white', color: '#2A254B' }"
          :placeHolder="'example@mail.com'"
          :inputStyles="{
            background: 'rgba(255, 255, 255, 0.15)',
            caretColor: 'white',
          }"
        />
      </div>
    </div>
    <div class="px-[82px] mb-[24px]">
      <q-separator class="!bg-cyan-700" />
    </div>
    <div class="px-[82px] flex justify-between">
      <div class="text-white">Desing By Ne_Alesha</div>
      <div class="flex space-x-3">
        <img src="../../assets/images/linkedin.svg" />
        <img src="../../assets/images/facebook.svg" />
        <img src="../../assets/images/instagram.svg" />
        <img src="../../assets/images/skype.svg" />
        <img src="../../assets/images/twitter.svg" />
        <img src="../../assets/images/pinterest.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HorizontalInput from "../HorizontalInput.vue";

const data = {
  menuItems: [
    "New arrivals",
    "Best sellers",
    "Recently viewed",
    "Popular this week",
    "All products",
  ],
  categories: [
    "Crockery",
    "Furniture",
    "Homeware",
    "Plant pots",
    "Chairs",
    "Crockery",
  ],
  about: ["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"],
};
</script>
