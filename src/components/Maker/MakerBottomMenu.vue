<template>
  <div
    class="bottom-0 fixed"
    :class="[isOpen ? '' : 'inline-block lg:hidden', buttonClass]"
  >
    <div
      class="relative transition transform ease-out duration-300"
      :class="isOpen ? '' : 'translate-y-[100%]'"
    >
      <nav class="h-48 bg-indigo-500 w-screen p-2">
        <TabGroup class="h-full" as="div">
          <TabList
            class="
              flex
              p-1
              space-x-1
              bg-indigo-900/20
              rounded-3xl
              overflow-x-scroll
              snap-x
            "
          >
            <Tab
              v-for="layer in Object.keys(LAYERS)"
              as="template"
              :key="layer"
              v-slot="{ selected }"
            >
              <button
                :class="[
                  'w-full px-3 py-2.5 text-sm whitespace-nowrap leading-5 font-medium text-indigo-100 rounded-3xl snap-start',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow text-indigo-700'
                    : 'text-indigo-100 hover:bg-white/[0.12] hover:text-white',
                ]"
              >
                {{ t("maker.layers." + layer) }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-2 h-28">
            <TabPanel
              v-for="(layer, layerName) in LAYERS"
              :key="layerName"
              :class="['bg-indigo-900/20 rounded-3xl']"
            >
              <div
                class="
                  flex flex-row
                  space-x-3
                  overflow-x-scroll
                  p-3
                  justify-start
                "
              >
                <div
                  class="
                    aspect-square
                    h-24
                    w-24
                    my-auto
                    rounded-3xl
                    p-1
                    hover:bg-white/[0.12]
                    focus:outline-none focus:ring-2
                    ring-offset-2
                    ring-offset-indigo-400
                    ring-white
                    ring-opacity-60
                  "
                  v-for="item in layer.list"
                  :key="item"
                  @click="
                    changeTrait(
                      layerName,
                      item,
                      item === avatarOptions?.[layerName]?.item
                    )
                  "
                  :class="
                    item === avatarOptions?.[layerName]?.item
                      ? 'bg-white/30'
                      : ''
                  "
                >
                  <img
                    v-lazy="{
                      src: `/images/maker/layers/${layerName}/${item}`,
                    }"
                    class="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </nav>
      <div
        @click="toggle()"
        :class="isOpen ? '' : '-translate-y-[100%]'"
        class="
          absolute
          top-0
          left-1/2
          w-20
          h-6
          flex
          bg-indigo-400
          rounded-t-3xl
          transition-all
          transform
          -translate-y-[100%] -translate-x-1/2
          z-[100]
          hover:bg-indigo-300 hover:h-7 hover:text-lg
        "
      >
        <ChevronDownIcon class="mx-auto text-white" v-if="isOpen" />
        <ChevronUpIcon class="mx-auto text-white" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { useStore } from "vuex";

export default {
  components: {
    ChevronUpIcon,
    ChevronDownIcon,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  name: "Maker Right Side Drawer",
  setup() {
    const store = useStore();
    const isOpen = ref(!store.state.maker.showSideBar);
    const { t } = useI18n();
    const avatarOptions = computed(() => store.state.maker.avatarOptions);
    const LAYERS = computed(() => store.state.maker.layers);
    let buttonClass = ref("z-[120]");

    const toggle = () => {
      isOpen.value = !isOpen.value;

      if (!isOpen.value) {
        setTimeout(() => {
          buttonClass.value = "z-[100]";
        }, 800);
      } else {
        buttonClass.value = "z-[120]";
      }
    };

    watchEffect(() => {
      const contract = store.state.wallet.contract;
      if (contract === null) return;

      const isHolder = store.state.contract.isHolder;
      if (isHolder !== null) return;

      store.dispatch("contract/checkIsGohanHolder");
    });

    watchEffect(() => {
      const isHolder = store.state.contract.isHolder;
      if (isHolder) {
        store.commit("maker/getAllLayers");
      }
    });

    const changeTrait = (layer, itemName, hasBeenSelected) => {
      if (hasBeenSelected) {
        store.dispatch("maker/removeLayer", layer);
        return;
      }

      store.dispatch("maker/replaceAvatarOption", {
        layer,
        itemName,
      });
    };

    const changeBackground = (color, hasBeenSelected) => {
      if (hasBeenSelected) {
        store.commit("maker/changeBackground", "");
        return;
      }

      store.commit("maker/changeBackground", color);
    };

    return {
      isOpen,
      toggle,
      t,
      LAYERS,
      changeTrait,
      avatarOptions,
      selectedBackground: computed(() => store.state.maker?.background),
      changeBackground,
      buttonClass,
    };
  },
};
</script>