<template>
    <div class="relative">
        <img v-lazy="{ src: '/images/banner.jpg' }" alt="background" class="w-full" />
        <div
            class="relative mt-24 mx-3 md:mt-0 md:mx-0 md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 rounded-2xl p-5 text-white bg-nepal/80"
        >
            <img
                src="/images/monkey_horizontal.png"
                alt="GohanGo!!"
                class="absolute w-36 -bottom-16 right-0 rotate-12"
            />
            <div class="text-xl" v-html="t('home.backstories')"></div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
    setup() {
        const { t } = useI18n({ useScope: 'global' })

        return {
            t
        }
    },
}
</script>