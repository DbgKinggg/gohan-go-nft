<template>
    <div
        class="fixed top-5 w-full z-50 flex justify-between px-1 justify-items-center"
        :class="{ 'invisible': !showNavbar }"
    >
        <localized-link to="/">
            <img src="/images/logo.png" alt="Logo" class="h-8 md:h-12" />
        </localized-link>
        <div class="px-3 space-x-3">
            <HomeLocaleSelect />
            <button
                v-if="showConnectWallet"
                @click="openModal"
                class="p-3 shadow-md text-sm md:text-base bg-white hover:bg-gray-200 active:bg-gray-300 rounded-3xl hover:-translate-y-0.5 transform transition focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:outline-none focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500"
                type="button"
            >{{ t('base.connectWallet') }}</button>
            <TransitionRoot appear :show="isOpen" as="template" v-if="showConnectWallet">
                <Dialog as="div" @close="closeModal">
                    <div class="fixed inset-0 z-50 overflow-y-auto">
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

                            <span
                                class="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >&#8203;</span>

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
                                    >{{ t('base.warningTitle') }}</DialogTitle>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">{{ t('base.warningMsg') }}</p>
                                    </div>

                                    <div class="mt-4">
                                        <button
                                            type="button"
                                            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                                            @click="closeModal"
                                        >{{ t('base.close') }}</button>
                                    </div>
                                </div>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </div>
    </div>
</template>

<script>
import HomeLocaleSelect from '../Home/HomeLocaleSelect.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        HomeLocaleSelect,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        DialogTitle,
    },
    props: {
        showConnectWallet: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })
        const isOpen = ref(false)
        const showNavbar = ref(true)
        const lastScrollPosition = ref(0)
        const OFFSET = 60

        const onScroll = () => {
            if (window.pageYOffset < 0) {
                return
            }
            if (Math.abs(window.pageYOffset - lastScrollPosition.value) < OFFSET) {
                return
            }
            showNavbar.value = window.pageYOffset < lastScrollPosition.value
            lastScrollPosition.value = window.pageYOffset

        }

        onMounted(() => {
            lastScrollPosition.value = window.pageYOffset
            window.addEventListener('scroll', onScroll)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', onScroll)
        })

        return {
            isOpen,
            closeModal() {
                isOpen.value = false
            },
            openModal() {
                isOpen.value = true
            },
            t,
            showNavbar,
            lastScrollPosition,
        }
    }
}
</script>