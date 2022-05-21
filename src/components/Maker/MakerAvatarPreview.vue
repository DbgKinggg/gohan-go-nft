<template>
  <div
    class="
      avatar-preview
      w-[320px]
      h-[320px]
      md:w-[350px] md:h-[350px]
      rounded-3xl
      relative
      overflow-hidden
      shadow-md shadow-indigo-800
    "
  >
    <div class="w-full h-full" v-html="avatarHtml" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

// set initial layers
const store = useStore();
store.commit("maker/setAvatarOptions", {
  Body: {
    class: "z-30",
    name: "body",
    item: "Naked Gohan.png",
  },
  Gohanmoji: {
    class: "z-50",
    name: "gohanmoji",
    item: "Normal.png",
  },
});

const avatarHtml = computed(() => {
  let html = "";
  for (const option in store.state.maker.avatarOptions) {
    const item = store.state.maker.avatarOptions[option];
    html += `<img src="/images/maker/layers/${option}/${item.item}" class="absolute inset-0 w-full ${item.class}" />`;
  }
  return html;
});
</script>