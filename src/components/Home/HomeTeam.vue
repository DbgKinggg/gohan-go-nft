<template>
    <div class="my-12 max-w-screen-lg px-6 mx-auto">
        <div class="text-center mb-12">
            <h2 class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-nepal">Team</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HomeTeamItem image="/images/team/hiroki.jpg" member-name="Hiroki" role="Designer" />
            <HomeTeamItem
                image="/images/team/ahjo.jpg"
                member-name="AhJo"
                role="Community Manager"
            />
            <HomeTeamItem image="/images/team/sammie.jpg" member-name="Sammie" role="Developer" />
        </div>
    </div>
</template>

<script>
import HomeTeamItem from "../HomeTeamItem.vue"

export default {
    components: {
        HomeTeamItem
    }
}
</script>