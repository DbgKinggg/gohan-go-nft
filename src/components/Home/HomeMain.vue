<template>
    <div class="grid min-h-screen overflow-hidden relative">
        <img
            src="/images/pinapple.png"
            alt="Pinapple rice"
            class="absolute w-48 bottom-12 md:bottom-24 -right-24 md:left-16 z-10 hover:animate-spin"
        />
        <div class="hidden md:block md:absolute w-2/5 h-2/3 bottom-24 right-0 z-20 relative">
            <img
                src="/images/gohan_main.png"
                alt="GohanGo!!"
                class="z-30 absolute right-12 bottom-96 h-1/2 transform transition-all hover:animate-bounce ease-in-out"
            />
            <img src="/images/earth.png" alt="Earth" class="absolute w-full object-cover" />
        </div>
        <img src="/images/bubble.png" alt="Bubble" class="absolute w-full top-1/2 img-animation" />
        <div class="mt-20 md:mt-48 md:m-auto max-w-6xl p-12 z-40">
            <div class="flex flex-col md:flex-row">
                <div class="mt-2 max-w-md flex flex-col justify-center md:mr-24">
                    <div class="text-center mb-12 text-white">
                        <h1
                            class="-rotate-12 md:text-8xl text-7xl uppercase font-black title-animation tracking-wide"
                        >
                            <span>Go</span>
                            <span class="text-stroke">han</span>Go!!
                        </h1>
                        <h2 class="-rotate-12 text-left ml-12 text-2xl">Be a Rice Person</h2>
                    </div>
                    <div class="hidden md:block">
                        <div
                            class="text-xl xl:text-2xl mt-4 text-animation text-white"
                        >{{ t('home.main.description') }}</div>
                        <div
                            class="mt-3 md:mt-5 p-2 w-4/5 bg-nepal shadow-md items-center text-white rounded-full leading-none lg:rounded-full flex lg:inline-flex transform transition hover:translate-x-1"
                            role="alert"
                        >
                            <span
                                class="flex rounded-full bg-blue-300 uppercase px-2 py-1 text-xs font-bold mr-3"
                            >New</span>
                            <span
                                class="font-semibold mr-2 text-left flex-auto"
                            >{{ t('home.main.tag') }}</span>
                            <ChevronRightIcon class="h-5 w-5" />
                        </div>
                        <div class="mt-5 flex justify-center space-x-5">
                            <BaseIconTwitter />
                            <BaseIconDiscord />
                        </div>
                    </div>
                </div>
                <div class="md:hidden h-96 relative mt-24 px-0 mx-0">
                    <img
                        src="/images/gohan_main.png"
                        alt="GohanGo!!"
                        class="absolute -inset-y-20 -right-8 z-20 h-2/3 transform transition-all hover:scale-105 hover:translate-x-1 hover:translate-y-2 hover:rotate-6 ease-in-out"
                    />
                    <img
                        src="/images/earth.png"
                        alt="Earth"
                        class="absolute w-full max-h-96 inset-y-12 object-cover -right-12"
                    />
                </div>
                <div class="block md:hidden mt-20">
                    <div
                        class="text-xl xl:text-2xl mt-4 text-animation text-white"
                    >{{ t('home.main.description') }}</div>
                    <div
                        class="mt-3 md:mt-5 p-2 bg-nepal shadow-md items-center text-white rounded-full leading-none lg:rounded-full flex lg:inline-flex transform transition hover:translate-x-1"
                        role="alert"
                    >
                        <span
                            class="flex rounded-full bg-blue-300 uppercase px-2 py-1 text-xs font-bold mr-3"
                        >New</span>
                        <span
                            class="font-semibold mr-2 text-left flex-auto"
                        >{{ t('home.main.tag') }}</span>
                        <ChevronRightIcon class="h-5 w-5" />
                    </div>
                    <div class="mt-5 flex justify-center space-x-5">
                        <BaseIconTwitter />
                        <BaseIconDiscord />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'
import BaseIconTwitter from '../Base/Icon/BaseIconTwitter.vue'
import BaseIconDiscord from '../Base/Icon/BaseIconDiscord.vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        ChevronRightIcon,
        BaseIconTwitter,
        BaseIconDiscord,
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        return {
            t,
        }
    },
}
</script>

<style scoped>
.text-stroke {
    color: white;
    -webkit-text-fill-color: #0a0d34; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
}
</style>