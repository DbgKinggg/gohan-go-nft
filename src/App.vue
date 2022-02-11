<template>
  <div
    :class="[bgColour]"
    class="transition-color duration-1000 ease-in-out selection:bg-sky-600 selection:text-white"
  >
    <!-- <img src="images/monkey.png" alt="GohanGo!!" class="max-h-40 fixed top-1/2 left-1/2" /> -->
    <BaseHeader />
    <HomeMain @observe-visibility="visibilityChanged" />
    <img src="images/background_front.png" alt="background" class="w-100 h-100" />
    <HomePromoItem
      imageSrc="images/examples/01.jpg"
      :isRight="true"
      titleId="title-one-animation"
      color="bg-violet-400"
      @observe-visibility="visibilityChanged"
    >
      <template v-slot:title>
        Made By
        <br />Rice Lover
      </template>
      <template
        v-slot:description
      >Rice feed more than half of the world's population. We want to share our love to rice with the you.</template>
    </HomePromoItem>
    <img
      id="rice-example-1"
      src="images/bibimbap.png"
      alt="Bibimbap"
      class="w-28 mt-5 ml-10 mb-0 md:w-48 md:ml-2"
    />
    <HomePromoItem
      imageSrc="images/examples/01.jpg"
      :isRight="false"
      titleId="title-two-animation"
      color="bg-indigo-400"
      @observe-visibility="visibilityChanged"
    >
      <template v-slot:title>
        Community
        <br />First
      </template>
      <template
        v-slot:description
      >Always start with the community, building and respecting our community is the #1 thing of GohanGo!!. We believe together we can make the word a little bit different.</template>
    </HomePromoItem>
    <img
      src="images/hainanese_chicken.png"
      id="rice-example-2"
      alt="Hainanese Chicken"
      class="w-28 mt-5 mr-10 mb-0 md:w-48 md:mr-2 ml-auto"
    />
    <HomePromoItem
      imageSrc="images/examples/01.jpg"
      color="bg-blue-400"
      titleId="title-three-animation"
      :isRight="true"
      @observe-visibility="visibilityChanged"
    >
      <template v-slot:title>Something Different</template>
      <template
        v-slot:description
      >We don't want to be yet another NFT project, we want to be "the" NFT project. We want to support.</template>
    </HomePromoItem>
    <img
      id="rice-example-3"
      src="images/curry_rice.png"
      alt="Curry rice"
      class="w-28 mt-5 ml-10 mb-0 md:w-48 md:ml-2"
    />
    <HomeRoadMap @observe-visibility="visibilityChanged" />
    <HomeFaq @observe-visibility="visibilityChanged" />
    <HomeFooter />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import BaseHeader from './components/Base/BaseHeader.vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HomeRoadMap from './components/Home/HomeRoadMap.vue'
import HomeFaq from './components/Home/HomeFaq.vue'
import HomeMain from './components/Home/HomeMain.vue'
import HomePromoItem from './components/Home/HomePromoItem.vue'
import HomeFooter from './components/Home/HomeFooter.vue'

export default {
  components: {
    BaseHeader,
    HomeRoadMap,
    HomeFaq,
    HomeMain,
    HomePromoItem,
    HomeFooter
  },
  setup() {
    const bgColour = ref('');
    const timeline = gsap.timeline()

    // change page background color
    const visibilityChanged = (isVisible, entry) => {
      if (
        isVisible
        && entry.target.dataset.color
      ) {
        bgColour.value = entry.target.dataset.color
      }
    }

    gsap.registerPlugin(ScrollTrigger)

    const titleAnimation = (selector) => {
      gsap.from(
        selector,
        {
          scrollTrigger: {
            trigger: selector,
            toggleActions: "restart pause resume pause",
            start: "top bottom",
          },
          duration: 0.75, opacity: 0, y: 150, stagger: 0.25
        }
      )
    }

    const imageAnimation = (selector, goRight) => {
      gsap.to(
        selector,
        {
          scrollTrigger: {
            trigger: selector,
            start: "bottom center",
            scrub: true,
          },
          x: goRight ? window.innerWidth : -window.innerWidth
        }
      )
    }

    onMounted(() => {
      timeline.from(
        '.title-animation',
        { duration: 0.75, opacity: 0, y: 150, stagger: 0.25, delay: 0.5 }
      )

      timeline.from(
        '.text-animation',
        { duration: 0.75, opacity: 0, y: 150, stagger: 0.25 }
      )

      // === titles animation ===
      titleAnimation('#title-one-animation')
      titleAnimation('#title-two-animation')
      titleAnimation('#title-three-animation')

      // === images animation ===
      imageAnimation('#rice-example-1', true)
      imageAnimation('#rice-example-2', false)
      imageAnimation('#rice-example-3', true)
    })

    return { visibilityChanged, bgColour }
  }
}
</script>

<style>
</style>
