<template>
    <div class="pt-2 md:mt-24 pb-24 px-3 overflow-hidden">
        <h2 class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-nepal">FAQ</h2>
        <div
            class="w-full max-w-2xl p-2 mx-auto mt-12 text-md bg-river-bed/80 rounded-2xl space-y-2"
        >
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
            <BaseDisclosure>
                <template v-slot:title>{{ t('home.faq.questions.3.question') }}</template>
                <template v-slot:body>{{ t('home.faq.questions.3.answer') }}</template>
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
    setup() {
        const { t } = useI18n({ useScope: 'global' })

        return {
            t,
        }
    },
}
</script>