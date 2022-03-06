<template>
    <div class="z-50">
        <div
            v-if="isOpen"
            :class="isOpen ? 'bg-black opacity-25' : 'opacity-0'"
            class="fixed top-0 left-0 h-screen w-screen z-50"
            @click="toggle()"
        ></div>
        <BaseHeader @toggle-menu="toggle" />
        <nav
            :class="isOpen ? 'translate-x-0' : '-translate-x-[100%]'"
            class="transition transform ease-out duration-300 w-64 fixed overflow-x-scroll bg-nepal top-0 h-screen z-50"
        >
            <div class="flex pr-2 justify-end">
                <button @click="toggle()" class="p-2 text-white text-xl font-bold">&#9747;</button>
            </div>
            <ul class="list-none text-white text-center text-xl">
                <li class="my-8">
                    <localized-link to="/">{{ t('base.home') }}</localized-link>
                </li>
                <li class="my-8">
                    <localized-link to="/maker">{{ t('base.maker') }}</localized-link>
                </li>
                <li class="my-8">
                    <BaseConnectWallet />
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { ref } from 'vue'
import BaseHeader from '../Base/BaseHeader.vue'
import BaseConnectWallet from '../Base/BaseConnectWallet.vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        BaseHeader,
        BaseConnectWallet,
    },
    name: "Side Drawer",
    setup() {
        const isOpen = ref(false)
        const { t } = useI18n({ useScope: 'global' })

        const toggle = () => {
            isOpen.value = !isOpen.value
        }

        return {
            isOpen,
            toggle,
            t
        }
    },
}
</script>