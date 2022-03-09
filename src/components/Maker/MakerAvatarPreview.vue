<template>
    <div
        class="avatar-preview w-[280px] h-[280px] rounded-3xl bg-white relative shadow-md shadow-indigo-800"
    >
        <div class="w-full h-full" v-html="svgContent" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const svgContent = ref('')
svgContent.value += `<img src="/images/maker/Layers/Body/body_no_face.png" class="absolute inset-0 w-full" />`
svgContent.value += `<img src="/images/maker/Layers/Face/01.png" class="absolute inset-0" />`
</script>