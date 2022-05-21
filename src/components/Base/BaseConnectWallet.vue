<template>
  <button
    @click="connectWallet"
    class="
      p-3
      text-sm
      md:text-base
      bg-indigo-500
      hover:bg-indigo-400
      text-white
      shadow-xl
      rounded-3xl
      hover:-translate-y-0.5
      transform
      transition
      focus:ring-2 focus:ring-offset-2 focus:ring-orange-300
      focus-visible:ring-2
      focus-visible:ring-opacity-75
      focus-visible:outline-none
      focus-visible:ring-orange-300
      focus-visible:ring-offset-2
      focus-visible:border-indigo-500
    "
    type="button"
    v-if="!signer"
  >
    {{ t("base.connectWallet") }}
  </button>
  <button
    @click="disconnectWallet"
    class="
      p-3
      shadow-md
      text-sm
      md:text-base
      text-black
      bg-red-100
      hover:bg-red-200
      active:bg-red-300
      rounded-3xl
      hover:-translate-y-0.5
      transform
      transition
      focus:ring-2 focus:ring-offset-2 focus:ring-orange-300
      focus-visible:ring-2
      focus-visible:ring-opacity-75
      focus-visible:outline-none
      focus-visible:ring-orange-300
      focus-visible:ring-offset-2
      focus-visible:border-indigo-500
    "
    type="button"
    v-else
  >
    {{ t("base.disconnectWallet") }}
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

const store = useStore();
const signer = computed(() => store.state.wallet.signer);

defineProps({
  showConnectWallet: {
    type: Boolean,
    default: true,
    required: false,
  },
});

const { t } = useI18n({ useScope: "global" });

const connectWallet = async () => {
  await store.dispatch("wallet/connect");
};

const disconnectWallet = async () => {
  await store.dispatch("wallet/disconnect");
};
</script>