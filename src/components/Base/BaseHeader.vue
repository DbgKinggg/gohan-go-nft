<template>
    <div
        class="fixed top-5 w-full z-50 flex justify-between px-1 justify-items-center"
        :class="{ 'invisible': !showNavbar }"
    >
        <button
            @click="$emit('toggleMenu')"
            class="inline-block md:hidden text-white text-3xl p-2 font-bold"
        >&#9776;</button>
        <div class="my-auto pl-3">
            <localized-link to="/">
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    class="h-8 md:h-12 hover:scale-105 transform transition"
                />
            </localized-link>
        </div>
        <div class="text-white text-xl hidden md:flex">
            <div class="my-auto hover:text-nepal hover:-translate-y-0.5 transform transition">
                <localized-link to="/maker">{{ t('base.maker') }}</localized-link>
            </div>
        </div>
        <div class="px-3 space-x-3">
            <HomeLocaleSelect />
            <span class="hidden md:inline-block">
                <BaseConnectWallet v-if="showConnectWallet" />
            </span>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import HomeLocaleSelect from '../Home/HomeLocaleSelect.vue'
import BaseConnectWallet from './BaseConnectWallet.vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        HomeLocaleSelect,
        BaseConnectWallet,
    },
    props: {
        showConnectWallet: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        const showNavbar = ref(true)
        const lastScrollPosition = ref(0)
        const OFFSET = 60

        const onScroll = () => {
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - lastScrollPosition.value) < OFFSET) {
                return
            }
            showNavbar.value = window.pageYOffset < lastScrollPosition.value
            lastScrollPosition.value = window.pageYOffset

        }

        onMounted(() => {
            lastScrollPosition.value = window.pageYOffset
            window.addEventListener('scroll', onScroll)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', onScroll)
        })

        return {
            showNavbar,
            lastScrollPosition,
            t,
        }
    }
}
</script>