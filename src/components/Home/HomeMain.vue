<template>
    <div
        class="grid min-h-screen overflow-hidden relative"
        data-color="bg-purple-400"
        v-observe-visibility="emitVisibility"
    >
        <img
            src="/images/pinapple.png"
            alt="Pinapple rice"
            class="absolute w-48 top-12 md:top-24 -left-16 md:left-16 hover:animate-spin"
        />
        <img
            src="/images/curry_rice.png"
            alt="Curry rice"
            class="absolute w-48 bottom-12 md:bottom-24 -right-24 md:right-16 z-10 hover:animate-spin"
        />
        <img src="/images/bubble.png" alt="Angelfish" class="absolute w-100 top-1/2 img-animation" />
        <div class="mt-48 md:m-auto max-w-6xl p-12 z-10">
            <div class="flex flex-col md:flex-row">
                <div class="mt-2 md:w-1/2 max-w-md flex flex-col justify-center">
                    <div
                        class="md:text-8xl text-6xl uppercase font-black text-indigo-900 title-animation"
                    >GohanGo!!</div>
                    <div
                        class="text-xl xl:text-2xl mt-4 text-animation"
                    >{{ t('home.main.description') }}</div>
                    <div
                        class="mt-3 md:mt-5 p-2 bg-indigo-800 shadow-md items-center text-indigo-100 rounded-full leading-none lg:rounded-full flex lg:inline-flex transform transition hover:translate-x-1"
                        role="alert"
                    >
                        <span
                            class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
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
                <div class="flex md:justify-end justify-center w-full mt-5 md:w-1/2 md:my-auto">
                    <img
                        src="/images/examples/02_no_background.png"
                        alt="GohanGo!!"
                        class="max-h-80 transform transition-all hover:scale-105 hover:translate-x-1 hover:translate-y-2 hover:rotate-6 ease-in-out"
                    />
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
    setup(props, { emit }) {
        const { t } = useI18n({ useScope: 'global' })
        const emitVisibility = (...args) => {
            emit('observe-visibility', ...args)
        }

        return {
            emitVisibility,
            t,
        }
    },
    emits: ['observe-visibility']
}
</script>