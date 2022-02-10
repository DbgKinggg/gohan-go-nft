<template>
    <div class="min-h-screen flex" data-color="bg-blue-400" v-observe-visibility="emitVisibility">
        <h2>Roadmap</h2>
    </div>
</template>

<script>
export default {
    setup(props, { emit }) {
        const emitVisibility = (...args) => {
            emit('observe-visibility', ...args)
        }

        return {
            emitVisibility
        }
    },
    emits: ['observe-visibility']
}
</script>