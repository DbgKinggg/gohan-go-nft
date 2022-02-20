<template>
    <div class="pt-2 py-48 px-2 overflow-hidden">
        <div class="relative w-80 md:w-96 mx-auto mt-24 md:mt-36">
            <img src="/images/shape1.svg" alt="shape" class="object-cover w-full h-full rotate-180" />
            <h2
                class="absolute top-12 inset-x-0 md:text-7xl text-6xl uppercase font-black p-3 text-center text-river-bed"
            >FAQ</h2>
        </div>
        <div
            class="w-full max-w-2xl p-2 mx-auto mt-12 text-md bg-green-100/50 rounded-2xl space-y-2"
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