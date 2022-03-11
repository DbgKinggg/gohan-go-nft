<template>
    <div>
        <BaseHeader :showConnectWallet="false" />
        <div class="min-h-screen bg-violet flex text-white">
            <div class="m-auto">
                <h1 class="text-5xl md:text-7xl text-center text-nepal">404</h1>
                <div class="text-lg">{{ t('error.pageNotFound') }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseHeader from '../components/Base/BaseHeader.vue'
import { useI18n } from 'vue-i18n'

export default {
    components: {
        BaseHeader,
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })

        return { t }
    }
}
</script>