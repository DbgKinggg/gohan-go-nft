<template>
    <div class="pt-2 py-48 px-2" data-color="bg-green-400" v-observe-visibility="emitVisibility">
        <div class="pt-24 md:pt-36">
            <h2
                class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-indigo-900"
            >FAQ</h2>
        </div>
        <div class="w-full max-w-2xl p-2 mx-auto mt-12 bg-green-100/50 rounded-2xl space-y-2">
            <BaseDisclosure>
                <template v-slot:title>{{ t('home.faq.questions.0.question') }}</template>
                <template v-slot:body>{{ t('home.faq.questions.0.answer') }}</template>
            </BaseDisclosure>
            <BaseDisclosure>
                <template v-slot:title>{{ t('home.faq.questions.1.question') }}</template>
                <template v-slot:body>{{ t('home.faq.questions.1.answer') }}</template>
            </BaseDisclosure>
            <BaseDisclosure>
                <template v-slot:title>{{ t('home.faq.questions.2.question') }}</template>
                <template v-slot:body>{{ t('home.faq.questions.2.answer') }}</template>
            </BaseDisclosure>
        </div>
    </div>
</template>

<script>
import BaseDisclosure from '../Base/BaseDisclosure.vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        BaseDisclosure,
    },
    setup(props, { emit }) {
        const { t } = useI18n({ useScope: 'global' })
        const emitVisibility = (...args) => {
            emit('observe-visibility', ...args)
        }

        return {
            emitVisibility,
            t,
        }
    },
    emits: ['observe-visibility']
}
</script>