<template>
  <div
    class="
      group
      w-full
      bg-white
      rounded-3xl
      hover:shadow-diary-cream/50
      shadow-lg
      overflow-hidden
      flex flex-col
      justify-center
      items-center
    "
  >
    <div>
      <img
        v-lazy="{ src: image }"
        class="
          object-center object-cover
          h-auto
          w-full
          group-hover:scale-105
          transform
          ease-in-out
          transition
          duration-300
        "
        :alt="memberName"
      />
    </div>
    <div class="text-center py-8 sm:py-6">
      <p class="text-4xl text-gray-700 font-bold mb-2">{{ memberName }}</p>
      <p class="text-lg text-gray-600 font-normal">{{ role }}</p>
      <p class="text-base text-gray-300 font-normal">
        ({{ t("home.team.occupation") + ": " + occupation }})
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

defineProps({
  image: {
    type: String,
    required: true,
  },
  memberName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
});
</script>