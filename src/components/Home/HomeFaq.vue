<template>
    <div class="pt-2 py-48 px-2" data-color="bg-green-400" v-observe-visibility="emitVisibility">
        <div class="pt-24 md:pt-36">
            <h2
                class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-indigo-900"
            >FAQ</h2>
        </div>
        <div class="w-full max-w-xl p-2 mx-auto mt-12 bg-green-100/50 rounded-2xl space-y-2">
            <BaseDisclosure>
                <template v-slot:title>Wen, how and where?</template>
                <template v-slot:body>
                    If you're unhappy with your purchase for any reason, email us within
                    90 days and we'll refund you in full, no questions asked.
                </template>
            </BaseDisclosure>
            <BaseDisclosure>
                <template v-slot:title>Why should I but GohanGo!! NFT?</template>
                <template v-slot:body>
                    If you're unhappy with your purchase for any reason, email us within
                    90 days and we'll refund you in full, no questions asked.
                </template>
            </BaseDisclosure>
            <BaseDisclosure>
                <template v-slot:title>Wen, how and where?</template>
                <template v-slot:body>
                    If you're unhappy with your purchase for any reason, email us within
                    90 days and we'll refund you in full, no questions asked.
                </template>
            </BaseDisclosure>
        </div>
    </div>
</template>

<script>
import BaseDisclosure from '../Base/BaseDisclosure.vue'

export default {
    components: {
        BaseDisclosure,
    },
    setup(props, { emit }) {
        const emitVisibility = (...args) => {
            emit('observe-visibility', ...args)
        }

        return {
            emitVisibility
        }
    },
    emits: ['observe-visibility']
}
</script>