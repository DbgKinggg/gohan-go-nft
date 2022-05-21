<template>
  <div class="mt-12 md:mt-24 max-w-4xl mx-auto px-3 overflow-hidden">
    <div class="relative py-12">
      <img
        src="/images/logo_empty.png"
        alt="Title background"
        class="absolute inset-0 mx-auto h-44"
      />
      <h2
        class="
          md:text-7xl
          text-6xl
          uppercase
          font-black
          p-3
          text-center text-nepal
        "
      >
        {{ t("home.roadmap.title") }}
      </h2>
    </div>
    <section class="max-w-5xl mx-auto py-10">
      <div>
        <HomeRoadMapLeft
          :step="t('home.roadmap.steps.0.step')"
          :title="t('home.roadmap.steps.0.title')"
          :headline="t('home.roadmap.steps.0.headline')"
        >
          <li>{{ t("home.roadmap.steps.0.description.0") }}</li>
          <li>{{ t("home.roadmap.steps.0.description.1") }}</li>
          <li>{{ t("home.roadmap.steps.0.description.2") }}</li>
          <li>{{ t("home.roadmap.steps.0.description.3") }}</li>
        </HomeRoadMapLeft>
        <HomeRoadMapRight
          :step="t('home.roadmap.steps.1.step')"
          :title="t('home.roadmap.steps.1.title')"
          :headline="t('home.roadmap.steps.1.headline')"
        >
          <li>{{ t("home.roadmap.steps.1.description.0") }}</li>
          <li>{{ t("home.roadmap.steps.1.description.1") }}</li>
          <li>{{ t("home.roadmap.steps.1.description.2") }}</li>
          <li>{{ t("home.roadmap.steps.1.description.3") }}</li>
          <li>{{ t("home.roadmap.steps.1.description.4") }}</li>
        </HomeRoadMapRight>
        <HomeRoadMapLeft
          :step="t('home.roadmap.steps.2.step')"
          :title="t('home.roadmap.steps.2.title')"
          :headline="t('home.roadmap.steps.2.headline')"
        >
          <li>{{ t("home.roadmap.steps.2.description.0") }}</li>
          <li>{{ t("home.roadmap.steps.2.description.1") }}</li>
          <li>{{ t("home.roadmap.steps.2.description.2") }}</li>
          <li>{{ t("home.roadmap.steps.2.description.3") }}</li>
          <li>{{ t("home.roadmap.steps.2.description.4") }}</li>
          <li>{{ t("home.roadmap.steps.2.description.5") }}</li>
        </HomeRoadMapLeft>
        <HomeRoadMapRight
          :step="t('home.roadmap.steps.3.step')"
          :title="t('home.roadmap.steps.3.title')"
          :headline="t('home.roadmap.steps.3.headline')"
        >
          <li>{{ t("home.roadmap.steps.3.description.0") }}</li>
          <li>{{ t("home.roadmap.steps.3.description.1") }}</li>
          <li>{{ t("home.roadmap.steps.3.description.2") }}</li>
          <li>{{ t("home.roadmap.steps.3.description.3") }}</li>
          <li>{{ t("home.roadmap.steps.3.description.4") }}</li>
          <li>{{ t("home.roadmap.steps.3.description.5") }}</li>
        </HomeRoadMapRight>
        <HomeRoadMapLeft
          :step="t('home.roadmap.steps.4.step')"
          :title="t('home.roadmap.steps.4.title')"
          :headline="t('home.roadmap.steps.4.headline')"
          :includeIndicator="false"
        >
          <p>{{ t("home.roadmap.steps.4.extra") }}</p>
          <li>{{ t("home.roadmap.steps.4.description.0") }}</li>
          <li>{{ t("home.roadmap.steps.4.description.1") }}</li>
          <li>{{ t("home.roadmap.steps.4.description.2") }}</li>
        </HomeRoadMapLeft>
      </div>
    </section>
    <div class="flex justify-center space-x-2">
      <a
        v-if="locale !== 'en'"
        href="/files/roadmap_zh.pdf"
        download
        class="
          transform
          rounded-3xl
          text-sm
          md:text-base
          bg-indigo-500
          hover:bg-indigo-400
          text-white
          font-bold
          py-3
          px-4
          border-b-4 border-indigo-800
          hover:border-indigo-500 hover:border-b-2
          active:border-b-0 active:bg-indigo-800
          box-border
          transition-all
          duration-100
          ease-in
        "
      >
        <DocumentDownloadIcon class="w-5 h-5 mr-2 inline-block" />
        <span>{{ t("home.roadmap.downloadPdf") }}</span>
      </a>
      <a
        href="/files/roadmap_en.pdf"
        download
        class="
          transform
          rounded-3xl
          text-sm
          md:text-base
          bg-indigo-500
          hover:bg-indigo-400
          text-white
          font-bold
          py-3
          px-4
          border-b-4 border-indigo-800
          hover:border-indigo-500 hover:border-b-2
          active:border-b-0 active:bg-indigo-800
          box-border
          transition-all
          duration-100
          ease-in
        "
      >
        <DocumentDownloadIcon class="w-5 h-5 mr-2 inline-block" />
        <span>{{ t("home.roadmap.downloadPdfEn") }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import HomeRoadMapLeft from "./HomeRoadMapLeft.vue";
import HomeRoadMapRight from "./HomeRoadMapRight.vue";
import { useI18n } from "vue-i18n";
import { DocumentDownloadIcon } from "@heroicons/vue/solid";

export default {
  components: {
    HomeRoadMapLeft,
    HomeRoadMapRight,
    DocumentDownloadIcon,
  },
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });

    return {
      t,
      locale,
    };
  },
};
</script>