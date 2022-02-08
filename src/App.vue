<template>
  <div :class="[bgColour]" class="transition-color duration-1000 ease-in-out">
    <BaseHeader />
    <div
      class="grid min-h-screen overflow-hidden m-0 p-0 relative"
      data-color="bg-purple-400"
      v-observe-visibility="visibilityChanged"
    >
      <img
        src="images/bento.png"
        alt="Angelfish"
        class="absolute w-48 top-12 md:top-24 left-6 md:left-16"
      />
      <img
        src="images/curry_rice.png"
        alt="Angelfish"
        class="absolute w-48 bottom-12 md:bottom-24 right-6 md:right-16"
      />
      <img src="images/bubble.png" alt="Angelfish" class="absolute w-100 top-1/2" />
      <div class="m-auto max-w-6xl p-12 z-10">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 max-w-md flex flex-col justify-center">
            <div class="md:text-8xl text-6xl uppercase font-black text-indigo-900">GohanGo!!</div>
            <div
              class="text-xl mt-4"
            >GohanGo!! is a programmatic generated NFT collection on the Solana blockchain. There will be 8,866 unique digital collectibles in total.</div>
          </div>
          <div class="flex md:justify-end justify-center w-full md:w-1/2 mt-5">
            <img src="images/monkey.png" alt="GohanGo!!" class="max-h-40" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src="images/background_front.png" alt="background" class="w-100" />
    </div>
    <div class="min-h-screen" data-color="bg-violet-400" v-observe-visibility="visibilityChanged"></div>
    <div class="min-h-screen" data-color="bg-indigo-500" v-observe-visibility="visibilityChanged"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseHeader from './components/Base/BaseHeader.vue'

export default {
  components: {
    BaseHeader
  },
  setup() {
    const bgColour = ref('');

    // change page background color
    const visibilityChanged = (isVisible, entry) => {
      if (
        isVisible
        && entry.target.dataset.color
      ) {
        bgColour.value = entry.target.dataset.color
      }
    }

    return { visibilityChanged, bgColour }
  }
}
</script>

<style>
</style>
