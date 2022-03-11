<template>
    <div
        class="avatar-preview w-[280px] h-[280px] rounded-3xl relative overflow-hidden shadow-md shadow-indigo-800"
    >
        <div class="w-full h-full" v-html="avatarHtml" :class="backgroundColor" />
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
    },
})

const avatarHtml = computed(() => {
    let html = ''
    for (const option in store.state.maker.avatarOptions) {
        const item = store.state.maker.avatarOptions[option];
        html += `<img src="/images/maker/layers/${option}/${item.item}.png" class="absolute inset-0 w-full ${item.class}" />`
    }
    return html
})

const backgroundColor = computed(() => store.state.maker.background)
</script>