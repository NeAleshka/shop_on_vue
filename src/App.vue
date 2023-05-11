<template>
  <div>
    <page-header />
    <router-view />
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
