<template>
  <q-drawer
    :width="200"
    :breakpoint="700"
    overlay
    bordered
    @click.stop
    :model-value="props.openDrawer"
    class="flex flex-col justify-between"
    @before-hide="closeNavBar('label')"
  >
    <q-list>
      <template v-for="menuItem in menuList">
        <nav-bar-item :menuItem="menuItem" />
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
import { INavBarItem } from "../interfaces";
import NavBarItem from "./NabBarItem.vue";

const props = defineProps({
  openDrawer: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits<{
  closeNavBar: [label: string];
}>();
const { t: translate } = useTranslate();

const closeNavBar = (label: string) => {
  emit("closeNavBar", label);
};

let menuList: INavBarItem[] = reactive([
  {
    icon: "o_shop",
    label: "header.categories",
    separator: false,
    hasChildren: true,
  },
  {
    icon: "o_local_shipping",
    label: "header.delivery",
    separator: false,
    path: "/delivery",
  },

  {
    icon: "o_payment",
    label: "header.payment",
    separator: false,
    path: "/payment",
  },
  {
    icon: "o_paid",
    label: "header.warranty",
    separator: false,
    path: "/warranty",
  },
]);
</script>
