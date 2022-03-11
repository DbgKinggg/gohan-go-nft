<template>
    <div class="bottom-0 fixed" :class="isOpen ? '' : 'inline-block lg:hidden'">
        <div
            class="relative transition transform ease-out duration-300"
            :class="isOpen ? '' : 'translate-y-[100%]'"
        >
            <nav class="h-48 bg-indigo-500 w-screen p-2">
                <TabGroup class="h-full" as="div">
                    <TabList
                        class="flex p-1 space-x-1 bg-indigo-900/20 rounded-3xl overflow-x-scroll snap-x"
                    >
                        <Tab as="template" key="Background" v-slot="{ selected }">
                            <button
                                :class="[
                                    'w-full px-3 py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-3xl snap-start',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-indigo-100 hover:bg-white/[0.12] hover:text-white',
                                ]"
                            >{{ t('maker.layers.Background') }}</button>
                        </Tab>
                        <Tab
                            v-for="layer in Object.keys(LAYERS)"
                            as="template"
                            :key="layer"
                            v-slot="{ selected }"
                        >
                            <button
                                :class="[
                                    'w-full px-3 py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-3xl snap-start',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-indigo-100 hover:bg-white/[0.12] hover:text-white',
                                ]"
                            >{{ t('maker.layers.' + layer) }}</button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2 h-28">
                        <TabPanel
                            key="Background"
                            :class="[
                                'bg-indigo-900/20 rounded-3xl',
                            ]"
                        >
                            <div
                                class="flex flex-row space-x-3 overflow-x-scroll p-3 justify-start"
                            >
                                <div
                                    class="aspect-square h-24 w-24 my-auto rounded-3xl p-1 shadow-xl hover:brightness-75 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                    v-for="background of BACKGROUNDS"
                                    :key="background"
                                    @click="changeBackground(background, background === selectedBackground)"
                                    :class="[
                                        background,
                                        background === selectedBackground ? 'ring-2 ring-white' : ''
                                    ]"
                                ></div>
                            </div>
                        </TabPanel>
                        <TabPanel
                            v-for="(layer, layerName) in LAYERS"
                            :key="layerName"
                            :class="[
                                'bg-indigo-900/20 rounded-3xl',
                            ]"
                        >
                            <div
                                class="flex flex-row space-x-3 overflow-x-scroll p-3 justify-start"
                            >
                                <div
                                    class="aspect-square h-24 w-24 my-auto rounded-3xl p-1 hover:bg-white/[0.12] focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                    v-for="item in layer.list"
                                    :key="item"
                                    @click="changeTrait(layerName, item, item === avatarOptions?.[layerName]?.item)"
                                    :class="
                                        item === avatarOptions?.[layerName]?.item ? 'bg-white/30' : ''
                                    "
                                >
                                    <img
                                        :src="`/images/maker/Layers/${layerName}/${item}.png`"
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import { LAYERS, BACKGROUNDS } from '../../utils/Maker/variables'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useStore } from 'vuex'

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
        const store = useStore()
        const isOpen = ref(!store.state.maker.showSideBar)
        const { t } = useI18n()
        const avatarOptions = computed(() => store.state.maker.avatarOptions)

        const toggle = () => {
            isOpen.value = !isOpen.value
        }

        const changeTrait = (layer, itemName, hasBeenSelected) => {
            if (hasBeenSelected) {
                store.dispatch(
                    'maker/removeLayer',
                    layer
                )
                return
            }

            store.dispatch(
                'maker/replaceAvatarOption',
                {
                    layer,
                    itemName
                }
            )
        }

        const changeBackground = (color, hasBeenSelected) => {
            if (hasBeenSelected) {
                store.commit(
                    'maker/changeBackground',
                    ''
                )
                return
            }

            store.commit(
                'maker/changeBackground',
                color
            )
        }

        return {
            isOpen,
            toggle,
            t,
            LAYERS,
            changeTrait,
            avatarOptions,
            BACKGROUNDS,
            selectedBackground: computed(() => store.state.maker?.background),
            changeBackground,
        }
    },
}
</script>