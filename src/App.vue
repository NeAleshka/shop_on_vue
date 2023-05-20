<template>
  <q-layout>
    <div class="max-w-[1440px] mx-auto">
      <page-header />
      <router-view />
    </div>
  </q-layout>
</template>

<script lang="ts" setup>
import PageHeader from "./components/PageHeader.vue";
</script>
