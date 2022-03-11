<template>
    <div
        class="transition-color duration-1000 ease-in-out selection:bg-sky-600 selection:text-white bg-violet"
    >
        <BaseSideDrawer />
        <HomeMain />
        <HomeStory />
        <HomePromo />
        <HomeRoadMap />
        <HomeTeam />
        <HomeFaq />
        <HomeFooter />
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HomeRoadMap from '../components/Home/HomeRoadMap.vue'
import HomeFaq from '../components/Home/HomeFaq.vue'
import HomeMain from '../components/Home/HomeMain.vue'
import HomeStory from '../components/Home/HomeStory.vue'
import HomeFooter from '../components/Home/HomeFooter.vue'
import HomePromo from '../components/Home/HomePromo.vue'
import HomeTeam from '../components/Home/HomeTeam.vue'
import BaseSideDrawer from '../components/Base/BaseSideDrawer.vue'

export default {
    components: {
        HomeRoadMap,
        HomeFaq,
        HomeMain,
        HomeFooter,
        HomePromo,
        HomeStory,
        HomeTeam,
        BaseSideDrawer,
    },
    setup() {
        const timeline = gsap.timeline()

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

        return {}
    }
}
</script>

<style>
</style>
