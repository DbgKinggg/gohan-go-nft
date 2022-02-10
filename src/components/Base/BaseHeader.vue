<template>
    <div class="flex fixed top-5 right-5 md:right-10 space-x-3 z-50">
        <HomeLocaleSelect />
        <button
            class="p-3 shadow-md text-sm md:text-base bg-white hover:bg-gray-200 active:bg-gray-300 rounded-3xl hover:-translate-y-0.5 transform transition focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:outline-none focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500"
            type="button"
        >Connect Wallet Soon</button>
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