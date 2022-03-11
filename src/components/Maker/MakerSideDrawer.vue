<template>
    <div class="top-0 right-0 fixed z-[200]" :class="isOpen ? '' : 'hidden lg:inline-block'">
        <div
            class="relative transition transform ease-out duration-300"
            :class="isOpen ? '' : 'translate-x-[100%]'"
        >
            <nav class="w-[18rem] xl:w-[28rem] overflow-x-scroll bg-indigo-500 h-screen pt-32">
                <div class="my-2 px-3">
                    <h2 class="text-xl text-white">{{ t('maker.layers.Background') }}</h2>
                    <ul class="flex flex-wrap p-3 align-items-center">
                        <li
                            class="p-2"
                            v-for="background of BACKGROUNDS"
                            :key="background"
                            @click="changeBackground(background, background === selectedBackground)"
                        >
                            <div
                                class="aspect-square h-8 w-8 my-1 rounded-3xl hover:brightness-75 focus:outline-none focus:ring-3 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
                                :class="[
                                    background,
                                    background === selectedBackground ? 'ring-2 ring-white' : ''
                                ]"
                            ></div>
                        </li>
                    </ul>
                </div>
                <div v-for="(layer, layerName) in LAYERS" :key="layerName" class="my-2 px-3">
                    <h2 class="text-xl text-white">{{ t('maker.layers.' + layerName) }}</h2>
                    <div class="flex flex-wrap space-x-2 overflow-x-scroll p-3 justify-start">
                        <div
                            class="aspect-square h-28 w-28 my-auto rounded-3xl p-1 hover:bg-white/[0.12] focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
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
                </div>
            </nav>
            <div
                @click="toggle()"
                :class="isOpen ? '' : '-translate-x-[100%]'"
                class="absolute left-0 top-1/2 w-6 h-20 flex bg-indigo-400 rounded-l-3xl transition-all transform -translate-x-[100%] -translate-y-1/2 z-[200] hover:bg-indigo-300 hover:w-7 hover:text-lg"
            >
                <ChevronRightIcon class="m-auto text-white" v-if="isOpen" />
                <ChevronLeftIcon class="m-auto text-white" v-else />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'
import { LAYERS, BACKGROUNDS } from '../../utils/Maker/variables'

const store = useStore()
const isOpen = ref(store.state.maker.showSideBar)
const { t } = useI18n()
const avatarOptions = computed(() => store.state.maker.avatarOptions)
const selectedBackground = computed(() => store.state.maker?.background)

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

</script>