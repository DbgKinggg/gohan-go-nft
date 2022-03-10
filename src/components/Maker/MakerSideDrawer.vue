<template>
    <div class="top-0 right-0 fixed" :class="isOpen ? '' : 'hidden lg:inline-block'">
        <div
            class="relative transition transform ease-out duration-300"
            :class="isOpen ? '' : 'translate-x-[100%]'"
        >
            <nav class="w-[18rem] overflow-x-scroll bg-indigo-500 h-screen">
                <ul class="list-none text-white text-center text-xl mt-36">
                    <li class="my-8">1</li>
                    <li class="my-8">2</li>
                </ul>
            </nav>
            <div
                @click="toggle()"
                :class="isOpen ? '' : '-translate-x-[100%]'"
                class="absolute left-0 top-1/2 w-6 h-20 flex bg-indigo-400 rounded-l-3xl transition-all transform -translate-x-[100%] -translate-y-1/2 z-[100] hover:bg-indigo-300 hover:w-7 hover:text-lg"
            >
                <ChevronRightIcon class="m-auto text-white" v-if="isOpen" />
                <ChevronLeftIcon class="m-auto text-white" v-else />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'

export default {
    components: {
        ChevronRightIcon,
        ChevronLeftIcon
    },
    name: "Maker Right Side Drawer",
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        const store = useStore()
        const isOpen = ref(store.state.maker.showSideBar)

        const toggle = () => {
            isOpen.value = !isOpen.value
        }

        return {
            isOpen,
            toggle,
            t,
        }
    },
}
</script>