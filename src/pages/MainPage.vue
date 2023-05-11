<template>
  <div>{{$t('header.delivery')}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "../components/PageHeader.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    PageHeader,
  },
});
</script>
