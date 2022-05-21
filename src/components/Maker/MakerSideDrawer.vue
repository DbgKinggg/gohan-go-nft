<template>
  <div
    class="top-0 right-0 fixed z-[200]"
    :class="isOpen ? '' : 'hidden lg:inline-block'"
  >
    <div
      class="relative transition transform ease-out duration-300"
      :class="isOpen ? '' : 'translate-x-[100%]'"
    >
      <nav
        class="
          w-[18rem]
          xl:w-[28rem]
          overflow-x-scroll
          bg-indigo-500
          h-screen
          pt-20
        "
      >
        <div v-for="(layer, layerName) in LAYERS" :key="layerName">
          <Disclosure
            v-slot="{ open }"
            :default-open="layerName === 'Background'"
          >
            <DisclosureButton
              class="
                text-xl text-white
                w-full
                sticky
                top-0
                hover:bg-indigo-300/80
              "
            >
              <div
                class="flex justify-between p-2"
                :class="open ? 'bg-indigo-900/80' : 'bg-indigo-700/80'"
              >
                <span>{{ t("maker.layers." + layerName) }}</span>
                <ChevronUpIcon
                  :class="open ? 'rotate-180 transform' : ''"
                  class="h-6 w-6"
                />
              </div>
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel
                class="
                  flex flex-wrap
                  px-3
                  justify-between
                  overflow-x-scroll
                  p-3
                "
              >
                <div
                  class="
                    aspect-square
                    overflow-hidden
                    h-28
                    w-28
                    rounded-3xl
                    p-1
                    hover:bg-white/[0.12]
                    focus:outline-none focus:ring-2
                    ring-offset-2
                    ring-offset-indigo-400
                    ring-white
                    ring-opacity-60
                    my-1
                    disable-scrollbars
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
                    class="object-cover rounded-3xl transition hover:scale-125"
                  />
                </div>
              </DisclosurePanel>
            </transition>
          </Disclosure>
          <div
            class="
              flex-grow
              border-t border-2
              w-11/12
              mx-auto
              border-indigo-400/50
            "
          ></div>
        </div>
      </nav>
      <div
        @click="toggle()"
        :class="isOpen ? '' : '-translate-x-[100%]'"
        class="
          absolute
          left-0
          top-1/2
          w-6
          h-20
          flex
          bg-indigo-400
          rounded-l-3xl
          transition-all
          transform
          -translate-x-[100%] -translate-y-1/2
          z-[200]
          hover:bg-indigo-300 hover:w-7 hover:text-lg
        "
      >
        <ChevronRightIcon class="m-auto text-white" v-if="isOpen" />
        <ChevronLeftIcon class="m-auto text-white" v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

const store = useStore();
const isOpen = ref(store.state.maker.showSideBar);
const { t } = useI18n();
const avatarOptions = computed(() => store.state.maker.avatarOptions);
const LAYERS = computed(() => store.state.maker.layers);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

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
</script>

<style scoped>
.disable-scrollbars::-webkit-scrollbar {
  background: transparent; /* Chrome/Safari/Webkit */
  width: 0px;
}

.disable-scrollbars {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
</style>