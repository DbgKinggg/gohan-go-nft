<template>
    <div class="flex fixed top-5 right-5 md:right-10 space-x-3 z-50">
        <HomeLocaleSelect />
        <button
            @click="openModal"
            class="p-3 shadow-md text-sm md:text-base bg-white hover:bg-gray-200 active:bg-gray-300 rounded-3xl hover:-translate-y-0.5 transform transition focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:outline-none focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500"
            type="button"
        >Connect Wallet Soon</button>
        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal">
                <div class="fixed inset-0 z-10 overflow-y-auto">
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
                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                >Please come back later</DialogTitle>
                                <div class="mt-2">
                                    <p
                                        class="text-sm text-gray-500"
                                    >You will be able to connect your wallet and mint your GohanGo!! NFT when mint is live, thanks!</p>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="button"
                                        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                                        @click="closeModal"
                                    >Close</button>
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
import HomeLocaleSelect from '../Home/HomeLocaleSelect.vue'
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue'

export default {
    components: {
        HomeLocaleSelect,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        DialogTitle,
    },
    setup() {
        const isOpen = ref(false)

        return {
            isOpen,
            closeModal() {
                isOpen.value = false
            },
            openModal() {
                isOpen.value = true
            },
        }
    }
}
</script>