<template>
    <div class="flex fixed top-5 right-5 md:right-10 space-x-3 z-20">
        <HomeLocaleSelect />
        <button
            class="bg-white rounded-3xl p-3 shadow-md focus:ring-2 focus:ring-orange-300 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500"
            type="button"
        >Connect Wallet</button>
    </div>
</template>

<script>
import HomeLocaleSelect from '../Home/HomeLocaleSelect.vue'

export default {
    components: {
        HomeLocaleSelect
    },
    setup() {
        return {}
    }
}
</script>