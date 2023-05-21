<template>
  <q-item
    v-if="!props.menuItem.hasChildren"
    clickable
    v-ripple
    @click="itemClick(props.menuItem)"
  >
    <q-item-section avatar>
      <q-icon :name="menuItem.icon" />
    </q-item-section>
    <q-item-section>
      {{ translate(`${menuItem.label}`) }}
    </q-item-section>
  </q-item>
  <q-tree
    icon="chevron_right"
    :nodes="navBarCategories"
    nodeKey="label"
    noConnectors
    accordion
    v-else
  >
    <template #default-header="{ node }">
      <div
        :class="[
          'py-[8px] pl-[5px] cursor-pointer w-full',
          { 'hover:bg-[#E8E8E8]': !node.children },
        ]"
        @click="itemClick(node)"
      >
        <q-icon :name="node.icon" v-if="node.icon" class="mr-[10px]" />
        {{ translate(`${node.label}`) }}
      </div>
    </template>
  </q-tree>
  <q-separator :key="'sep' + menuItem.label" v-if="menuItem.separator" />
</template>

<script lang="ts" setup>
import { defineProps, PropType, reactive } from "vue";
import { INavBarItem } from "../interfaces";
import { useRouter } from "vue-router";
import { useTranslate } from "../utils";

const props = defineProps({
  menuItem: {
    type: Object as PropType<INavBarItem>,
    required: true,
  },
});
const { t: translate } = useTranslate();
const router = useRouter();

const itemClick = (node: any) => {
  if (node.children || !node.path) return;
  router.push(`${node.path}`);
};
// there you should give categories from server
const navBarCategories = reactive([
  {
    label: "header.categories",
    icon: "o_shop",
    children: [
      {
        label: "categories.laptops",
        path: "/categories",
      },
      {
        label: "categories.smartphones",
        path: "/categories",
      },
      {
        label: "categories.womens-dresses",
        path: "/categories",
      },
      {
        label: "categories.womens-shoes",
        path: "/categories",
      },
    ],
  },
]);
</script>
