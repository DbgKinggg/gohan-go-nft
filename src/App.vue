<template>
  <div
    :class="[bgColour]"
    class="transition-color duration-1000 ease-in-out selection:bg-sky-600 selection:text-white"
  >
    <BaseHeader />
    <HomeMain @observe-visibility="visibilityChanged" />
    <HomeStory />
    <HomePromo @observe-visibility="visibilityChanged" />
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
import HomeStory from './components/Home/HomeStory.vue'
import HomeFooter from './components/Home/HomeFooter.vue'
import HomePromo from './components/Home/HomePromo.vue'

export default {
  components: {
    BaseHeader,
    HomeRoadMap,
    HomeFaq,
    HomeMain,
    HomeFooter,
    HomePromo,
    HomeStory,
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
