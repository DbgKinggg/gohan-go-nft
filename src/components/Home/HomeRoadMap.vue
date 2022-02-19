<template>
    <div
        class="mt-12 md:mt-24 px-3 overflow-hidden"
        data-color="bg-jet-stream"
        v-observe-visibility="emitVisibility"
    >
        <div class="relative w-80 md:w-96 mx-auto">
            <img src="/images/shape1.svg" alt="shape" class="object-cover w-full h-full rotate-180" />
            <h2
                class="absolute top-12 inset-x-0 md:text-7xl text-6xl uppercase font-black p-3 text-center text-river-bed"
            >{{ t('home.roadmap.title') }}</h2>
        </div>
        <section class="max-w-5xl mx-auto py-10">
            <div>
                <HomeRoadMapLeft
                    :step="t('home.roadmap.steps.0.step')"
                    :title="t('home.roadmap.steps.0.title')"
                    :headline="t('home.roadmap.steps.0.headline')"
                >
                    <li>{{ t('home.roadmap.steps.0.description.0') }}</li>
                    <li>{{ t('home.roadmap.steps.0.description.1') }}</li>
                    <li>{{ t('home.roadmap.steps.0.description.2') }}</li>
                    <li>{{ t('home.roadmap.steps.0.description.3') }}</li>
                </HomeRoadMapLeft>
                <HomeRoadMapRight
                    :step="t('home.roadmap.steps.1.step')"
                    :title="t('home.roadmap.steps.1.title')"
                    :headline="t('home.roadmap.steps.1.headline')"
                >
                    <li>{{ t('home.roadmap.steps.1.description.0') }}</li>
                    <li>{{ t('home.roadmap.steps.1.description.1') }}</li>
                    <li>{{ t('home.roadmap.steps.1.description.2') }}</li>
                    <li>{{ t('home.roadmap.steps.1.description.3') }}</li>
                </HomeRoadMapRight>
                <HomeRoadMapLeft
                    :step="t('home.roadmap.steps.2.step')"
                    :title="t('home.roadmap.steps.2.title')"
                    :headline="t('home.roadmap.steps.2.headline')"
                >
                    <li>{{ t('home.roadmap.steps.2.description.0') }}</li>
                    <li>{{ t('home.roadmap.steps.2.description.1') }}</li>
                    <li>{{ t('home.roadmap.steps.2.description.2') }}</li>
                </HomeRoadMapLeft>
                <HomeRoadMapRight
                    :step="t('home.roadmap.steps.3.step')"
                    :title="t('home.roadmap.steps.3.title')"
                    :headline="t('home.roadmap.steps.3.headline')"
                    :includeIndicator="false"
                >
                    <li>{{ t('home.roadmap.steps.3.description.0') }}</li>
                    <li>{{ t('home.roadmap.steps.3.description.1') }}</li>
                    <li>{{ t('home.roadmap.steps.3.description.2') }}</li>
                    <li>{{ t('home.roadmap.steps.3.description.3') }}</li>
                </HomeRoadMapRight>
            </div>
        </section>
    </div>
</template>

<script>
import HomeRoadMapLeft from './HomeRoadMapLeft.vue'
import HomeRoadMapRight from './HomeRoadMapRight.vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        HomeRoadMapLeft,
        HomeRoadMapRight
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