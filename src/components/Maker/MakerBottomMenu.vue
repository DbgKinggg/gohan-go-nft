<template>
    <div class="bottom-0 fixed" :class="isOpen ? '' : 'inline-block lg:hidden'">
        <div
            class="relative transition transform ease-out duration-300"
            :class="isOpen ? '' : 'translate-y-[100%]'"
        >
            <nav class="h-48 bg-indigo-500 w-screen p-2">
                <TabGroup class="h-full" as="div">
                    <TabList
                        class="flex p-1 space-x-1 bg-indigo-900/20 rounded-3xl overflow-x-scroll"
                    >
                        <Tab
                            v-for="layer in Object.keys(LAYERS)"
                            as="template"
                            :key="layer"
                            v-slot="{ selected }"
                        >
                            <button
                                :class="[
                                    'w-full px-3 py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-3xl',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-indigo-100 hover:bg-white/[0.12] hover:text-white',
                                ]"
                            >{{ layer }}</button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2 h-28">
                        <TabPanel
                            v-for="(layer, idx) in Object.values(LAYERS)"
                            :key="idx"
                            :class="[
                                'bg-indigo-900/20 rounded-3xl',
                            ]"
                        >
                            <div class="flex flex-row space-x-3 overflow-x-scroll p-3 snap-x">
                                <div
                                    class="aspect-square h-24 w-24 m-auto rounded-3xl p-1 bg-white/30 snap-start focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                >
                                    <img
                                        src="/images/maker/Layers/Body/body.png"
                                        class="object-cover"
                                    />
                                </div>
                                <div
                                    class="aspect-square h-24 w-24 m-auto rounded-3xl p-1 hover:bg-white/[0.12] snap-start focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                >
                                    <img
                                        src="/images/maker/Layers/Body/body.png"
                                        class="object-cover"
                                    />
                                </div>
                                <div
                                    class="aspect-square h-24 w-24 m-auto rounded-3xl p-1 hover:bg-white/[0.12] snap-start focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                >
                                    <img
                                        src="/images/maker/Layers/Body/body.png"
                                        class="object-cover"
                                    />
                                </div>
                                <div
                                    class="aspect-square h-24 w-24 m-auto rounded-3xl p-1 hover:bg-white/[0.12] snap-start focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                >
                                    <img
                                        src="/images/maker/Layers/Body/body.png"
                                        class="object-cover"
                                    />
                                </div>
                                <div
                                    class="aspect-square h-24 w-24 m-auto rounded-3xl p-1 hover:bg-white/[0.12] snap-start focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                >
                                    <img
                                        src="/images/maker/Layers/Body/body.png"
                                        class="object-cover"
                                    />
                                </div>
                                <div
                                    class="aspect-square h-24 w-24 m-auto rounded-3xl p-1 hover:bg-white/[0.12] snap-start focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                >
                                    <img
                                        src="/images/maker/Layers/Body/body.png"
                                        class="object-cover"
                                    />
                                </div>
                                <div
                                    class="aspect-square h-24 w-24 m-auto rounded-3xl p-1 hover:bg-white/[0.12] snap-start focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                >
                                    <img
                                        src="/images/maker/Layers/Body/body.png"
                                        class="object-cover"
                                    />
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
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
import { LAYERS } from '../../utils/Maker/variables'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
    components: {
        ChevronUpIcon,
        ChevronDownIcon,
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
    },
    name: "Maker Right Side Drawer",
    setup() {
        const isOpen = ref(true)
        const { t } = useI18n({ useScope: 'global' })

        const toggle = () => {
            isOpen.value = !isOpen.value
        }

        const list = [
            'test1',
            'test2'
        ]

        return {
            isOpen,
            toggle,
            t,
            list,
            LAYERS,
        }
    },
}
</script>