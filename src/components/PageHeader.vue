<template>
  <div class="w-full justify-center h-[130px] px-[26px]">
    <div class="flex h-[69px] w-full justify-between items-center">
      <q-icon name="search" size="20px" />
      <span class="text-[#22202E] text-[24px]" @click="$router.push('/')"
        >Avion</span
      >
      <div>
        <q-icon name="o_shopping_cart" size="20px" class="mr-[16px]" />
        <q-icon name="o_account_circle" size="20px" />
      </div>
    </div>
    <q-separator color="#0000001A" />
    <div
      class="w-full mt-[10px] flex space-x-0 justify-center md:space-x-[44px]"
    >
      <q-btn flat :noCaps="true"
        ><span>{{ translate("header.categories") }}</span>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              @click="$router.push('/category/smartphones')"
            >
              <q-item-section>Смартфоны</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="$router.push('/category/womens-dresses')"
            >
              <q-item-section>Платья</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="$router.push('/category/laptops')"
            >
              <q-item-section>Ноутбуки</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="$router.push('/category/womens-shoes')"
            >
              <q-item-section>Туфли женские</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      <q-btn flat :noCaps="true"
        ><span @click="$router.push('/about_us')">{{
          translate("header.about_us")
        }}</span></q-btn
      >
      <q-btn flat :noCaps="true" @click="$router.push('/delivery')">
        <span>{{ translate("header.delivery") }}</span>
      </q-btn>
      <q-btn flat :noCaps="true" @click="$router.push('/payment')"
        ><span>{{ translate("header.payment") }}</span></q-btn
      >
      <q-btn flat :noCaps="true" @click="$router.push('/warranty')"
        ><span>{{ translate("header.warranty") }}</span></q-btn
      >
      <!--    <button @click="changeLocale('en')">En</button>
      <button @click="changeLocale('ru')">Ru</button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTranslate } from "../utils";

export default defineComponent({
  name: "PageHeader",
  setup() {
    const translate = useTranslate().t;
    const locale = useTranslate().locale;
    return {
      translate,
      locale,
    };
  },

  methods: {
    changeLocale(newLocale: any) {
      this.locale = newLocale;
    },
  },
});
</script>
