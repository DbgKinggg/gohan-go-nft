<template>
    <div>
        <BaseSideDrawer :showConnectWallet="false" />
        <div class="min-h-screen bg-violet flex">
            <div class="m-auto">
                <div
                    class="avatar-preview w-[280px] h-[280px] rounded-3xl bg-white relative shadow-md shadow-indigo-800"
                >
                    <div class="w-full h-full" v-html="svgContent" />
                </div>
                <div class="flex mt-12 justify-between">
                    <button type="button">
                        <span
                            class="transition transform rounded-3xl text-sm md:text-base bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-4 border-b-4 border-indigo-800 hover:border-indigo-500 hover:border-b-2 active:border-b-0 active:bg-indigo-800"
                        >Randomize</span>
                    </button>
                    <button type="button">
                        <span
                            class="transition transform rounded-3xl text-sm md:text-base bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-4 border-b-4 border-indigo-800 hover:border-indigo-500 hover:border-b-2 active:border-b-0 active:bg-indigo-800"
                        >Download</span>
                    </button>
                </div>
            </div>
        </div>
        <MakerSideDrawer />
        <MakerBottomMenu />
    </div>
</template>

<script>
import BaseSideDrawer from '../components/Base/BaseSideDrawer.vue'
import MakerSideDrawer from '../components/Maker/MakerSideDrawer.vue'
import MakerBottomMenu from '../components/Maker/MakerBottomMenu.vue'
import { ref } from 'vue'
import { LAYERS } from '../utils/Maker/variables'

export default {
    components: {
        BaseSideDrawer,
        MakerSideDrawer,
        MakerBottomMenu,
    },
    setup() {
        const svgContent = ref('')

        svgContent.value += `<img src="/images/maker/Layers/Body/body.png" class="absolute inset-0 w-full" />`
        svgContent.value += `<img src="/images/maker/Layers/Face/01.png" class="absolute inset-0" />`

        return {
            svgContent,

        }
    },
}
</script>