<template>
    <div class="mt-12 md:mt-24 px-3" data-color="bg-sky-400" v-observe-visibility="emitVisibility">
        <h2
            class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-indigo-900"
        >{{ t('home.roadmap.title') }}</h2>
        <section class="max-w-5xl mx-auto py-10">
            <div>
                <HomeRoadMapLeft
                    :step="t('home.roadmap.steps.0.step')"
                    :title="t('home.roadmap.steps.0.title')"
                    :headline="t('home.roadmap.steps.0.headline')"
                >{{ t('home.roadmap.steps.0.description') }}</HomeRoadMapLeft>
                <HomeRoadMapRight
                    :step="t('home.roadmap.steps.1.step')"
                    :title="t('home.roadmap.steps.1.title')"
                    :headline="t('home.roadmap.steps.1.headline')"
                >{{ t('home.roadmap.steps.1.description') }}</HomeRoadMapRight>
                <HomeRoadMapLeft
                    :step="t('home.roadmap.steps.2.step')"
                    :title="t('home.roadmap.steps.2.title')"
                    :headline="t('home.roadmap.steps.2.headline')"
                >{{ t('home.roadmap.steps.2.description') }}</HomeRoadMapLeft>
                <HomeRoadMapRight
                    :step="t('home.roadmap.steps.3.step')"
                    :title="t('home.roadmap.steps.3.title')"
                    :headline="t('home.roadmap.steps.2.headline')"
                    :includeIndicator="false"
                >{{ t('home.roadmap.steps.3.description') }}</HomeRoadMapRight>
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