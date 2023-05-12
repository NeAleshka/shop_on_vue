<template>
  <div class="w-screen bg-blue-600 h-[60px] flex justify-center items-center">
    <div
      class="max-w-[900px] flex space-x-0 text-white font-bold md:space-x-10"
    >
      <q-btn flat :noCaps="true"
        ><span class="font-bold">{{ $t("header.categories") }}</span>
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
        ><span class="font-bold" @click="$router.push('/about_us')">{{
          $t("header.about_us")
        }}</span></q-btn
      >
      <q-btn flat :noCaps="true" @click="$router.push('/delivery')">
        <span class="font-bold">{{ $t("header.delivery") }}</span>
      </q-btn>
      <q-btn flat :noCaps="true" @click="$router.push('/payment')"
        ><span class="font-bold">{{ $t("header.payment") }}</span></q-btn
      >
      <q-btn flat :noCaps="true" @click="$router.push('/warranty')"
        ><span class="font-bold">{{ $t("header.warranty") }}</span></q-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",

  methods: {
    changeLocale(locale: string) {
      this.$i18n.locale = locale;
    },
  },
});
</script>
