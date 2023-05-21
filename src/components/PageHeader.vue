<template>
  <div
    class="w-full justify-center h-fit px-[26px] pb-5"
    @click="openDrawer = false"
  >
    <div class="flex h-[69px] w-full justify-between items-center">
      <q-icon name="search" size="20px" />
      <span class="text-[#22202E] text-[24px]" @click="$router.push('/')"
        >Avion</span
      >
      <q-btn
        flat
        round
        dense
        icon="menu"
        @click.stop="openNavBar"
        class="navBarBtn"
      />
      <div class="leftButtuns">
        <q-icon name="o_shopping_cart" size="20px" class="mr-[16px]" />
        <q-icon name="o_account_circle" size="20px" />
      </div>
    </div>

    <nav-bar :openDrawer="openDrawer" @closeNavBar="closeNavBar" />
    <q-separator color="#0000001A" />
    <div
      class="headerBottum w-full mt-[10px] space-x-0 justify-center md:space-x-[44px]"
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTranslate } from "../utils";
import NavBar from "./NavBar.vue";
import { ref } from "vue";

let { t: translate } = useTranslate();

let openDrawer = ref(false);

const openNavBar = () => {
  openDrawer.value = true;
};

const closeNavBar = () => {
  openDrawer.value = false;
};
</script>
<style>
.leftButtuns {
  display: inline-flex;
}

.navBarBtn {
  display: none !important;
}

.headerBottum {
  display: flex;
}

@media screen and (max-width: 640px) {
  .leftButtuns {
    display: none;
  }

  .navBarBtn {
    display: inline-flex !important;
  }

  .headerBottum {
    display: none;
  }
}
</style>
