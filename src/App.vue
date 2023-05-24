<template>
  <q-layout>
    <page-header />
    <router-view />
    <div class="bg-dark-primary">
      <div class="max-w-[1440px] mx-auto">
        <page-footer />
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts" setup>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/Banners/PageFooter.vue";
</script>
