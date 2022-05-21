<template>
  <div class="z-50">
    <div
      v-if="isOpen"
      :class="isOpen ? 'bg-black opacity-25' : 'opacity-0'"
      class="fixed top-0 left-0 h-screen w-screen z-[150]"
      @click="toggle()"
    ></div>
    <BaseHeader
      @toggle-menu="toggle"
      :showConnectWallet="showConnectWallet"
      :showConnectWalletOnMobile="showConnectWalletOnMobile"
    />
    <nav
      :class="isOpen ? 'translate-x-0' : '-translate-x-[100%]'"
      class="
        transition
        transform
        ease-out
        duration-300
        w-64
        fixed
        overflow-x-scroll
        bg-nepal
        top-0
        h-screen
        z-[260]
      "
    >
      <div class="flex pr-2 justify-end">
        <button @click="toggle()" class="p-2 text-white text-xl font-bold">
          &#9747;
        </button>
      </div>
      <ul class="list-none text-center text-xl space-y-8">
        <li class="text-white">
          <localized-link to="/">{{ t("base.home") }}</localized-link>
        </li>
        <li class="text-white">
          <localized-link to="/mint">{{ t("base.mint") }}</localized-link>
        </li>
        <li class="text-white">
          <localized-link to="/maker">{{ t("base.maker") }}</localized-link>
        </li>
        <li class="text-white">
          <a
            href="https://twitter.com/GohanGoNFT"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
            >Twitter</a
          >
        </li>
        <li class="text-white">
          <a
            href="https://discord.gg/GSgmWYQUPD"
            target="_blank"
            rel="noopener"
            aria-label="Discord"
            >Discord</a
          >
        </li>
        <li class="my-8">
          <HomeLocaleSelect />
        </li>
        <li class="my-8" v-if="showConnectWallet">
          <BaseConnectWallet />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import BaseHeader from "../Base/BaseHeader.vue";
import HomeLocaleSelect from "../Home/HomeLocaleSelect.vue";
import BaseConnectWallet from "../Base/BaseConnectWallet.vue";
import { useI18n } from "vue-i18n";

export default {
  components: {
    BaseHeader,
    BaseConnectWallet,
    HomeLocaleSelect,
  },
  name: "Side Drawer",
  props: {
    showConnectWallet: {
      type: Boolean,
      default: true,
    },
    showConnectWalletOnMobile: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup() {
    const isOpen = ref(false);
    const { t } = useI18n({ useScope: "global" });

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggle,
      t,
    };
  },
};
</script>