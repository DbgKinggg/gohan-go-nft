<template>
    <div>
        <BaseSideDrawer :showConnectWallet="false" />
        <MakerSideDrawer />
        <div class="min-h-screen bg-violet flex">
            <div class="m-auto">
                <div class="avatar-preview w-[280px] h-[280px] rounded-3xl bg-white"></div>
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
    </div>
</template>

<script>
import BaseSideDrawer from '../components/Base/BaseSideDrawer.vue'
import MakerSideDrawer from '../components/Maker/MakerSideDrawer.vue'

export default {
    components: {
        BaseSideDrawer,
        MakerSideDrawer,
    },
    setup() {

    },
}
</script>