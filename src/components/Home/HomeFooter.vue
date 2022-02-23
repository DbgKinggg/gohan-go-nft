<template>
    <div class="bg-white p-5 text-center">
        <div class="mt-5 mb-3 flex justify-center space-x-5">
            <BaseIconTwitter />
            <BaseIconDiscord />
            <RaritySniper />
        </div>
        <div>Copyright &copy; 2022 GohanGo!!</div>
    </div>
</template>

<script>
import BaseIconTwitter from '../Base/Icon/BaseIconTwitter.vue'
import BaseIconDiscord from '../Base/Icon/BaseIconDiscord.vue'
import RaritySniper from '../Base/Icon/RaritySniper.vue'

export default {
    components: {
        BaseIconTwitter,
        BaseIconDiscord,
        RaritySniper,
    }
}
</script>