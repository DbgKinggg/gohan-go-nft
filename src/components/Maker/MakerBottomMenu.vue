<template>
    <div class="bottom-0 fixed" :class="isOpen ? '' : 'inline-block lg:hidden'">
        <div
            class="relative transition transform ease-out duration-300"
            :class="isOpen ? '' : 'translate-y-[100%]'"
        >
            <nav class="h-48 bg-indigo-500 w-screen py-3">
                <ul class="list-none text-white text-center text-xl">
                    <li class="my-8">1</li>
                    <li class="my-8">2</li>
                </ul>
            </nav>
            <div
                @click="toggle()"
                :class="isOpen ? '' : '-translate-y-[100%]'"
                class="absolute top-0 left-1/2 w-20 h-6 flex bg-indigo-400 rounded-t-3xl transition-all transform -translate-y-[100%] -translate-x-1/2 z-[100] hover:bg-indigo-300 hover:h-7 hover:text-lg"
            >
                <ChevronDownIcon class="mx-auto text-white" v-if="isOpen" />
                <ChevronUpIcon class="mx-auto text-white" v-else />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'

export default {
    components: {
        ChevronUpIcon,
        ChevronDownIcon
    },
    name: "Maker Right Side Drawer",
    setup() {
        const isOpen = ref(true)
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