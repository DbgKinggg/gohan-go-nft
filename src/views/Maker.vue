<template>
    <div>
        <BaseSideDrawer :showConnectWallet="false" />
        <div class="min-h-screen bg-violet flex">
            <div class="m-auto">
                <MakerAvatarPreview ref="avatarPreviewEle" />
                <div class="flex justify-between py-12">
                    <button type="button">
                        <span
                            class="transition transform rounded-3xl text-sm md:text-base bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-4 border-b-4 border-indigo-800 hover:border-indigo-500 hover:border-b-2 active:border-b-0 active:bg-indigo-800"
                        >Randomize</span>
                    </button>
                    <button
                        v-if="downloading"
                        type="button"
                        class="rounded-3xl text-sm md:text-base bg-indigo-800 text-white font-bold py-3 px-4 flex"
                        disable
                    >
                        <BaseIconSpinner extraClasses="mr-2 text-white" />Downloading
                    </button>
                    <button type="button" @click="downloadImg" v-else>
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
import MakerAvatarPreview from '../components/Maker/MakerAvatarPreview.vue'
import BaseIconSpinner from '../components/Base/Icon/BaseIconSpinner.vue'
import { ref } from 'vue'
import { LAYERS } from '../utils/Maker/variables'

export default {
    components: {
        BaseSideDrawer,
        MakerSideDrawer,
        MakerBottomMenu,
        MakerAvatarPreview,
        BaseIconSpinner,
    },
    setup() {
        const downloading = ref(false)
        const avatarPreviewEle = ref(null)

        async function downloadImg() {
            try {
                downloading.value = true
                const avatarEle = avatarPreviewEle.value.$el

                // const userAgent = window.navigator.userAgent.toLowerCase()
                // const notCompatible = NOT_COMPATIBLE_AGENTS.some(
                //     (agent) => userAgent.indexOf(agent) !== -1
                // )

                const notCompatible = false
                if (avatarEle) {
                    const html2canvas = (await import('html2canvas')).default
                    const canvas = await html2canvas(avatarEle, {
                        backgroundColor: null,
                    })

                    const dataURL = canvas.toDataURL()

                    if (notCompatible) {
                        imageDataURL.value = dataURL
                        downloadModalVisible.value = true
                    } else {
                        const trigger = document.createElement('a')
                        trigger.href = dataURL
                        trigger.download = 'gohango-avatar.png'
                        trigger.click()
                    }
                }

                // recordEvent('click_download', {
                //     event_category: 'click',
                // })
            } finally {
                setTimeout(() => {
                    downloading.value = false
                }, 500)
            }
        }


        return {
            downloadImg,
            downloading,
            avatarPreviewEle,
        }
    },
}
</script>