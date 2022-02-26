<template>
    <div class="mb-12 mt-24 max-w-screen-lg px-6 mx-auto">
        <div class="relative py-12">
            <img
                src="/images/logo_empty.png"
                alt="Title background"
                class="absolute inset-0 mx-auto h-44"
            />
            <h2
                class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-nepal"
            >{{ t('home.team.name') }}</h2>
        </div>
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HomeTeamItem
                image="/images/team/hiroki.png"
                member-name="Hiroki"
                :role="t('home.team.members.0.role')"
            />
            <HomeTeamItem
                image="/images/team/eevee.png"
                member-name="Eevee"
                :role="t('home.team.members.1.role')"
            />
            <HomeTeamItem
                image="/images/team/sammie.png"
                member-name="Sammie"
                :role="t('home.team.members.2.role')"
            />
        </div>
    </div>
</template>

<script>
import HomeTeamItem from "../HomeTeamItem.vue"
import { useI18n } from "vue-i18n"

export default {
    components: {
        HomeTeamItem
    },
    setup() {
        const { t } = useI18n({ useScope: 'global' })

        return { t }
    }
}
</script>