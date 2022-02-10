<template>
    <div class="mt-24 md:mt-48 px-3" data-color="bg-sky-400" v-observe-visibility="emitVisibility">
        <h2
            class="md:text-7xl text-6xl uppercase font-black p-3 text-center text-indigo-900"
        >Roadmap</h2>
        <section class="max-w-5xl mx-auto py-10">
            <div>
                <HomeRoadMapLeft
                    step="Step 1"
                    title="Launch"
                    headline="Launch the project"
                >Test Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</HomeRoadMapLeft>
                <HomeRoadMapRight
                    step="Step 2"
                    title="Community"
                    headline="Building the community"
                >Building the communitybsahjasdgjhagsjhdg</HomeRoadMapRight>
                <HomeRoadMapLeft
                    title="Mint"
                    step="Step 3"
                    headline="Get your GohanGo!!"
                >hkasjhdkahksjdhjkahkjshdkha ksjdhkjhakjsdhkjahskjdhkjashkj</HomeRoadMapLeft>
                <HomeRoadMapRight
                    step="Step 4"
                    title="More"
                    headline="More and more to come"
                    :includeIndicator="false"
                >Building the communitybsahjasdgjhagsjhdg</HomeRoadMapRight>
            </div>
        </section>
    </div>
</template>

<script>
import HomeRoadMapLeft from './HomeRoadMapLeft.vue'
import HomeRoadMapRight from './HomeRoadMapRight.vue'

export default {
    components: {
        HomeRoadMapLeft,
        HomeRoadMapRight
    },
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