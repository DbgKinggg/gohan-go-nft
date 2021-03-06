<template>
  <div
    class="
      fixed
      top-0
      w-full
      z-[250]
      grid grid-cols-3
      justify-items-center
      md:flex md:justify-between
      px-1
      py-5
      backdrop-filter backdrop-blur-lg
      bg-opacity-30 bg-black/20
    "
    :class="{ invisible: !showNavbar }"
  >
    <div class="justify-self-start md:hidden">
      <button
        @click="$emit('toggleMenu')"
        class="inline-block max-w-sm text-white text-3xl p-2 font-bold mr-auto"
      >
        &#9776;
      </button>
    </div>
    <div class="my-auto pl-3">
      <localized-link to="/">
        <img
          src="/images/logo.png"
          alt="Logo"
          class="h-8 md:h-12 hover:scale-105 transform transition"
        />
      </localized-link>
    </div>
    <div class="hidden md:flex space-x-6">
      <div class="text-white text-xl flex">
        <div
          class="
            my-auto
            underline underline-offset-8
            hover:text-indigo-400 hover:-translate-y-0.5
            transform
            transition
          "
        >
          <localized-link to="/maker">{{ t("base.maker") }}</localized-link>
        </div>
      </div>
      <div class="text-white text-xl flex">
        <div
          class="
            my-auto
            underline underline-offset-8
            hover:text-indigo-400 hover:-translate-y-0.5
            transform
            transition
          "
        >
          <localized-link to="/mint">{{ t("base.mint") }}</localized-link>
        </div>
      </div>
    </div>
    <div class="px-3 space-x-3">
      <template v-if="!showConnectWalletOnMobile">
        <HomeLocaleSelect />
        <span class="hidden md:inline-block">
          <BaseConnectWallet v-if="showConnectWallet" />
        </span>
      </template>
      <template v-else>
        <BaseConnectWallet v-if="showConnectWallet" />
        <span class="hidden md:inline-block">
          <HomeLocaleSelect />
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import HomeLocaleSelect from "../Home/HomeLocaleSelect.vue";
import BaseConnectWallet from "./BaseConnectWallet.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    HomeLocaleSelect,
    BaseConnectWallet,
  },
  props: {
    showConnectWallet: {
      type: Boolean,
      default: true,
      required: false,
    },
    showConnectWalletOnMobile: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const showNavbar = ref(true);
    const lastScrollPosition = ref(0);
    const OFFSET = 60;

    const onScroll = () => {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - lastScrollPosition.value) < OFFSET) {
        return;
      }
      showNavbar.value = window.pageYOffset < lastScrollPosition.value;
      lastScrollPosition.value = window.pageYOffset;
    };

    onMounted(() => {
      lastScrollPosition.value = window.pageYOffset;
      window.addEventListener("scroll", onScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
      showNavbar,
      lastScrollPosition,
      t,
    };
  },
};
</script>