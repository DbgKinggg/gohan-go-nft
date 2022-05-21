<template>
    <div class="overflow-hidden mt-12">
        <HomePromoItem
            imageSrc="/images/examples/01.jpg"
            :isRight="true"
            titleId="title-one-animation"
        >
            <template v-slot:title>{{ t('home.promo.0.title') }}</template>
            <template v-slot:description>{{ t('home.promo.0.description') }}</template>
        </HomePromoItem>
        <img
            id="rice-example-1"
            src="/images/bibimbap.png"
            alt="Bibimbap"
            class="w-28 mt-5 ml-10 mb-0 md:w-48 md:ml-2"
        />
        <HomePromoItem
            imageSrc="/images/examples/03.jpg"
            :isRight="false"
            titleId="title-two-animation"
        >
            <template v-slot:title>{{ t('home.promo.1.title') }}</template>
            <template v-slot:description>{{ t('home.promo.1.description') }}</template>
        </HomePromoItem>
        <img
            src="/images/hainanese_chicken.png"
            id="rice-example-2"
            alt="Hainanese Chicken"
            class="w-28 mt-5 mr-10 mb-0 md:w-48 md:mr-2 ml-auto"
        />
        <HomePromoItem
            imageSrc="/images/examples/04.jpg"
            titleId="title-three-animation"
            :isRight="true"
        >
            <template v-slot:title>{{ t('home.promo.2.title') }}</template>
            <template v-slot:description>{{ t('home.promo.2.description') }}</template>
        </HomePromoItem>
        <img
            id="rice-example-3"
            src="/images/bento.png"
            alt="Bento"
            class="w-28 mt-5 ml-10 mb-0 md:w-48 md:ml-2"
        />
    </div>
</template>

<script>
import HomePromoItem from './HomePromoItem.vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        HomePromoItem
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })

        return {
            t
        }
    }
}
</script>
