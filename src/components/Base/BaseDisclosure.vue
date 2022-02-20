<template>
    <Disclosure v-slot="{ open }">
        <DisclosureButton
            class="flex justify-between w-full px-4 py-2 font-medium text-left text-violet bg-purple-100 rounded-lg hover:bg-nepal focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
            <span class="text-lg font-bold">
                <slot name="title"></slot>
            </span>
            <ChevronUpIcon :class="open ? 'transform rotate-180' : ''" class="w-5 h-5 text-violet" />
        </DisclosureButton>
        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <DisclosurePanel class="px-4 pt-4 pb-2 text-white">
                <slot name="body"></slot>
            </DisclosurePanel>
        </transition>
    </Disclosure>
</template>


<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronUpIcon,
    },
}
</script>