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
      <img src="images/background_front.png" alt="background" class="w-100 h-100" />
    </div>
    <div
      class="min-h-screen flex"
      data-color="bg-violet-400"
      v-observe-visibility="visibilityChanged"
    >
      <div class="m-auto grid md:grid-cols-2 lg:grid-cols-3 lg:px-32">
        <div class="mx-auto md:mr-0 md:ml-auto p-3 w-96 md:w-full lg:w-3/5 lg:col-span-2">
          <img src="images/examples/01.jpg" alt="example NFT" class="rounded-3xl" />
        </div>
        <div class="mt-5 md:my-auto px-6 text-xl md:mr-auto xl:pr-36 xl:pl-6">
          <span>Rice feed more than half of the world's population. We want to share our love to rice with the you.</span>
          <h2
            class="text-6xl text-center mt-3 md:text-left md:text-7xl font-black text-orange-300 md:-ml-20 uppercase"
          >
            Made By
            <br />Rice Lover
          </h2>
        </div>
      </div>
    </div>
    <div
      class="min-h-screen flex"
      data-color="bg-indigo-400"
      v-observe-visibility="visibilityChanged"
    >
      <div class="m-auto grid md:grid-cols-2 lg:grid-cols-3 lg:px-32">
        <div class="mx-auto md:ml-0 md:mr-auto p-3 w-96 md:w-full lg:w-3/5 lg:col-span-2">
          <img src="images/examples/01.jpg" alt="example NFT" class="rounded-3xl" />
        </div>
        <div class="mt-5 md:my-auto px-6 text-xl md:ml-auto md:-order-1 z-20 xl:pl-36 xl:pr-6">
          <span>Always start with the community, building and respecting our community is the #1 thing of GohanGo!!. We believe together we can make the word a little bit different.</span>
          <h2
            class="text-6xl text-center mt-3 md:text-right md:text-7xl font-black text-orange-300 md:-mr-32 uppercase"
          >
            Community
            <br />First
          </h2>
        </div>
      </div>
    </div>
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
