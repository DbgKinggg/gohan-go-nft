<template>
    <TransitionRoot appear :show="props.isModalOpen" as="template">
        <Dialog as="div" @close="$emit('close')">
            <div class="fixed inset-0 z-[100] overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
                    </TransitionChild>

                    <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <div
                            class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-3xl"
                        >
                            <div class="mt-2 flex flex-col">
                                <img
                                    alt="Avatar preview"
                                    :src="props.previewImageUrl"
                                    class="w-[280px] h-[280px] mx-auto"
                                />
                                <p
                                    class="text-sm text-gray-500 mx-auto mt-3"
                                >{{ t('maker.base.downloadMsg') }}</p>
                            </div>

                            <div class="mt-4">
                                <button
                                    type="button"
                                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                                    @click="$emit('close')"
                                >{{ t('maker.base.close') }}</button>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps({
    isModalOpen: {
        type: Boolean,
        required: false,
        default: false
    },
    previewImageUrl: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['close'])

function closeModal() {
    isModalOpen = false
}


</script>