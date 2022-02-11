<template>
  <div :class="[bgColour]" class="transition-color duration-1000 ease-in-out">
    <!-- <img src="images/monkey.png" alt="GohanGo!!" class="max-h-40 fixed top-1/2 left-1/2" /> -->
    <BaseHeader />
    <HomeMain @observe-visibility="visibilityChanged" />
    <div>
      <img src="images/background_front.png" alt="background" class="w-100 h-100" />
    </div>
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
    <img src="images/bibimbap.png" alt="Bibimbap" class="w-28 mt-5 ml-10 mb-0 md:w-48 md:ml-2" />
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

    onMounted(() => {
      timeline.from(
        '.title-animation',
        { duration: 0.75, opacity: 0, y: 150, stagger: 0.25, delay: 0.5 }
      )

      timeline.from(
        '.text-animation',
        { duration: 0.75, opacity: 0, y: 150, stagger: 0.25 }
      )

      // gsap.tweenTo(
      //   '.img-animation',
      //   { duration: 0.75, }
      // )

      gsap.from(
        '#title-one-animation',
        {
          scrollTrigger: '#title-one-animation',
          duration: 0.75, opacity: 0, y: 150, stagger: 0.25
        }
      )

      gsap.from(
        '#title-two-animation',
        {
          scrollTrigger: '#title-two-animation',
          duration: 0.75, opacity: 0, y: 150, stagger: 0.25
        }
      )

      gsap.from(
        '#title-three-animation',
        {
          scrollTrigger: '#title-three-animation',
          duration: 0.75, opacity: 0, y: 150, stagger: 0.25
        }
      )
    })

    return { visibilityChanged, bgColour }
  }
}
</script>

<style>
</style>
