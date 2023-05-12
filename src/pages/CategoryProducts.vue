<template>
  <div>
    <q-breadcrumbs separator="-">
      <q-breadcrumbs-el label="Home" to="/" icon="home" />
      <q-breadcrumbs-el
        :to="{
          path: `/category/${category}`,
        }"
      >
        <span>{{ category }}</span>
      </q-breadcrumbs-el>
    </q-breadcrumbs>
    <div v-for="product in products">
      {{ product.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "../interfaces";
import { defineComponent } from "vue";
import { getCategoryProducts } from "../api";

export default defineComponent({
  name: "CategoryProducts",
  data() {
    return {
      products: [] as Product[],
      category: this.$route.params.category,
    };
  },
  created() {
    getCategoryProducts(`${this.$route.params.category}`).then((res) => {
      this.products = res.products;
    });
  },
  updated() {
    this.category = this.$route.params.category;
  },
  watch: {
    category() {
      getCategoryProducts(`${this.category}`).then((res) => {
        this.products = res.products;
      });
    },
  },
});
</script>
