<template>
  <q-drawer
    :width="200"
    :breakpoint="700"
    overlay
    bordered
    @click.stop
    :modelValue="true"
    class="flex flex-col justify-between"
  >
    <q-list>
      <template v-for="(menuItem, index) in menuList" :key="index">
        <q-item
          v-if="!menuItem.hasChildren"
          clickable
          :active="menuItem.label === 'Outbox'"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
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
              @click="childClick(node)"
            >
              <q-icon :name="node.icon" v-if="node.icon" class="mr-[10px]" />
              {{ node.label }}
            </div>
          </template>
        </q-tree>
        <q-separator :key="'sep' + index" v-if="menuItem.separator" />
      </template>
    </q-list>
    <div>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="o_account_circle" />
        </q-item-section>
        <q-item-section>
          {{ translate("header.account") }}
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="o_shopping_cart" />
        </q-item-section>
        <q-item-section>
          {{ translate("header.backet") }}
        </q-item-section>
      </q-item>
    </div>
  </q-drawer>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useTranslate } from "../utils";
import { INavBarItems } from "../interfaces";
import { useRouter } from "vue-router";

defineProps({
  openDrawer: {
    type: Boolean,
    requreid: true,
  },
});

const { t: translate } = useTranslate();

const router = useRouter();

let menuList: INavBarItems[] = reactive([
  {
    icon: "o_shop",
    label: translate("header.categories"),
    separator: false,
    hasChildren: true,
  },
  {
    icon: "o_local_shipping",
    label: translate("header.delivery"),
    separator: false,
  },

  {
    icon: "o_payment",
    label: translate("header.payment"),
    separator: false,
  },
  {
    icon: "o_paid",
    label: translate("header.warranty"),
    separator: false,
  },
]);

const navBarCategories = reactive([
  {
    label: translate("header.categories"),
    icon: "o_shop",
    children: [
      {
        label: translate("categories.laptops"),
        path: "/categories",
      },
      {
        label: translate("categories.smartphones"),
        path: "/categories",
      },
      {
        label: translate("categories.womens-dresses"),
        path: "/categories",
      },
      {
        label: translate("categories.womens-shoes"),
        path: "/categories",
      },
    ],
  },
]);



const childClick = (node: any) => {
  if (node.children) return;
  router.push(`${node.path}`);
};
</script>
