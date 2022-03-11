<template>
    <div>
        <BaseSideDrawer :showConnectWallet="false" />
        <div class="min-h-screen bg-violet flex">
            <div class="m-auto">
                <MakerAvatarPreview ref="avatarPreviewEle" />
                <div class="flex justify-between py-12">
                    <button
                        type="button"
                        class="transition transform rounded-3xl text-sm md:text-base bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-4 border-b-4 border-indigo-800 hover:border-indigo-500 hover:border-b-2 active:border-b-0 active:bg-indigo-800"
                        @click="randomizeAvatar"
                    >
                        <SparklesIcon class="w-5 h-5 mr-2 inline-block" />
                        <span>{{ t('maker.base.randomize') }}</span>
                    </button>
                    <button
                        v-if="downloading"
                        type="button"
                        class="rounded-3xl text-sm md:text-base bg-indigo-800 text-white font-bold py-3 px-4"
                        disable
                    >
                        <BaseIconSpinner extraClasses="mr-2 inline-block text-white" />
                        <span>{{ t('maker.base.downloading') }}</span>
                    </button>
                    <button
                        type="button"
                        @click="downloadImg"
                        class="transition transform rounded-3xl text-sm md:text-base bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-4 border-b-4 border-indigo-800 hover:border-indigo-500 hover:border-b-2 active:border-b-0 active:bg-indigo-800"
                        v-else
                    >
                        <DocumentDownloadIcon class="w-5 h-5 mr-2 inline-block" />
                        <span>{{ t('maker.base.download') }}</span>
                    </button>
                </div>
            </div>
        </div>
        <MakerSideDrawer />
        <MakerBottomMenu />
        <MakerDownloadModal
            :is-modal-open="isModalOpen"
            :preview-image-url="previewImageUrl"
            @close="; (isModalOpen = false), (previewImageUrl = '')"
        />
    </div>
</template>

<script setup>
import BaseSideDrawer from '../components/Base/BaseSideDrawer.vue'
import MakerSideDrawer from '../components/Maker/MakerSideDrawer.vue'
import MakerBottomMenu from '../components/Maker/MakerBottomMenu.vue'
import MakerAvatarPreview from '../components/Maker/MakerAvatarPreview.vue'
import BaseIconSpinner from '../components/Base/Icon/BaseIconSpinner.vue'
import MakerDownloadModal from '../components/Maker/MakerDownloadModal.vue'
import { ref } from 'vue'
import { LAYERS, BACKGROUNDS, NOT_COMPATIBLE_AGENTS } from '../utils/Maker/variables'
import { SparklesIcon, DocumentDownloadIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'


const store = useStore()
const { t } = useI18n({ useScope: 'global' })
const downloading = ref(false)
const avatarPreviewEle = ref(null)
const isModalOpen = ref(false)
const previewImageUrl = ref('')

async function downloadImg() {
    try {
        downloading.value = true
        const avatarEle = avatarPreviewEle.value.$el

        const userAgent = window.navigator.userAgent.toLowerCase()
        // const notCompatible = NOT_COMPATIBLE_AGENTS.some(
        //     (agent) => userAgent.indexOf(agent) !== -1
        // )

        const notCompatible = true
        if (avatarEle) {
            const html2canvas = (await import('html2canvas')).default
            const canvas = await html2canvas(avatarEle, {
                backgroundColor: null,
            })

            const dataURL = canvas.toDataURL()

            if (notCompatible) {
                previewImageUrl.value = dataURL
                isModalOpen.value = true
            } else {
                const trigger = document.createElement('a')
                trigger.href = dataURL
                trigger.download = 'gohango-avatar.png'
                trigger.click()
            }
        }
    } finally {
        setTimeout(() => {
            downloading.value = false
        }, 500)
    }
}

const randomSelectItem = (items) => {
    return items[items.length * Math.random() | 0]
}

const randomizeAvatar = async () => {
    let avatarOptions = {};
    for (const layerName in LAYERS) {
        const layer = LAYERS[layerName]
        const list = layer.list

        avatarOptions[layerName] = {
            class: layer.class,
            name: layer.name,
            item: await randomSelectItem(list),
        }
    }

    store.commit(
        'maker/setAvatarOptions',
        avatarOptions
    )

    store.commit(
        'maker/changeBackground',
        randomSelectItem(BACKGROUNDS)
    )
}
</script>