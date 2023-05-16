<template>
  <div class="flex justify-center">
    <div class="max-w-[1440px]">
      <page-header />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "./components/PageHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    PageHeader,
  },
});
</script>
