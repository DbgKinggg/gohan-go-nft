<template>
    <div class="mt-12 md:mt-24 max-w-4xl mx-auto px-3 overflow-hidden">
        <h2
            class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-nepal"
        >{{ t('home.roadmap.title') }}</h2>
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
    setup() {
        const { t } = useI18n({ useScope: 'global' })

        return {
            t,
        }
    },
}
</script>