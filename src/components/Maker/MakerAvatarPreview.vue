<template>
    <div
        class="avatar-preview w-[280px] h-[280px] rounded-3xl relative shadow-md shadow-indigo-800"
    >
        <div class="w-full h-full" v-html="avatarHtml" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

// set initial layers
const store = useStore()
store.commit('maker/setAvatarOptions', {
    Body: {
        class: "z-30",
        name: "body",
        item: 'body'
    },
    Face: {
        class: "z-50",
        name: "face",
        item: "01"
    }
})

const avatarHtml = computed(() => {
    let html = ''
    for (const option in store.state.maker.avatarOptions) {
        const item = store.state.maker.avatarOptions[option];
        html += `<img src="/images/maker/Layers/${option}/${item.item}.png" class="absolute inset-0 w-full ${item.class}" />`
    }
    return html
})
</script>