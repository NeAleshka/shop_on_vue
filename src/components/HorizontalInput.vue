<template>
  <div class="flex">
    <input
      class="pl-[32px] py-[17px] bg-[#F9F9F9] min-w-[350px]"
      :style="props.inputStyles"
      :placeholder="props.placeHolder"
    />
    <button
      class="px-[32px] py-[16px] text-white bg-[#2A254B]"
      :style="props.buttonStyles"
      @click="btnClick"
    >
      {{ props.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from "vue";

const props = defineProps({
  inputStyles: {
    type: Object as PropType<CSSProperties>,
    required: false,
    default: {},
  },
  buttonStyles: {
    type: Object as PropType<CSSProperties>,
    required: false,
    default: {},
  },
  buttonText: {
    type: String,
    required: false,
    default: "",
  },
  placeHolder: {
    type: String,
    required: false,
    default: "",
  },
});

const emits = defineEmits(["btnClick"]);

const btnClick = () => {
  emits("btnClick");
};
</script>
