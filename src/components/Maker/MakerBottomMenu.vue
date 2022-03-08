<template>
    <div class="bottom-0 fixed" :class="isOpen ? '' : 'inline-block lg:hidden'">
        <div
            class="relative transition transform ease-out duration-300"
            :class="isOpen ? '' : 'translate-y-[100%]'"
        >
            <nav class="h-48 bg-indigo-500 w-screen py-3">
                <TabGroup>
                    <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                        <Tab
                            v-for="category in Object.keys(categories)"
                            as="template"
                            :key="category"
                            v-slot="{ selected }"
                        >
                            <button
                                :class="[
                                    'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                                ]"
                            >{{ category }}</button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2">
                        <TabPanel
                            v-for="(posts, idx) in Object.values(categories)"
                            :key="idx"
                            :class="[
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                            ]"
                        >
                            <ul>
                                <li
                                    v-for="post in posts"
                                    :key="post.id"
                                    class="relative p-3 rounded-md hover:bg-coolGray-100"
                                >
                                    <h3 class="text-sm font-medium leading-5">{{ post.title }}</h3>

                                    <ul
                                        class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                                    >
                                        <li>{{ post.date }}</li>
                                        <li>&middot;</li>
                                        <li>{{ post.commentCount }} comments</li>
                                        <li>&middot;</li>
                                        <li>{{ post.shareCount }} shares</li>
                                    </ul>

                                    <a
                                        href="#"
                                        :class="[
                                            'absolute inset-0 rounded-md',
                                            'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400',
                                        ]"
                                    />
                                </li>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </nav>
            <div
                @click="toggle()"
                :class="isOpen ? '' : '-translate-y-[100%]'"
                class="absolute top-0 left-1/2 w-20 h-6 flex bg-indigo-400 rounded-t-3xl transition-all transform -translate-y-[100%] -translate-x-1/2 z-[100] hover:bg-indigo-300 hover:h-7 hover:text-lg"
            >
                <ChevronDownIcon class="mx-auto text-white" v-if="isOpen" />
                <ChevronUpIcon class="mx-auto text-white" v-else />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/solid'

export default {
    components: {
        ChevronUpIcon,
        ChevronDownIcon
    },
    name: "Maker Right Side Drawer",
    setup() {
        const isOpen = ref(true)
        const { t } = useI18n({ useScope: 'global' })

        const toggle = () => {
            isOpen.value = !isOpen.value
        }

        const selected = ref(false)
        const categories = ref({
            Recent: [
                {
                    id: 1,
                    title: 'Does drinking coffee make you smarter?',
                    date: '5h ago',
                    commentCount: 5,
                    shareCount: 2,
                },
                {
                    id: 2,
                    title: "So you've bought coffee... now what?",
                    date: '2h ago',
                    commentCount: 3,
                    shareCount: 2,
                },
            ],
            Popular: [
                {
                    id: 1,
                    title: 'Is tech making coffee better or worse?',
                    date: 'Jan 7',
                    commentCount: 29,
                    shareCount: 16,
                },
                {
                    id: 2,
                    title: 'The most innovative things happening in coffee',
                    date: 'Mar 19',
                    commentCount: 24,
                    shareCount: 12,
                },
            ],
            Trending: [
                {
                    id: 1,
                    title: 'Ask Me Anything: 10 answers to your questions about coffee',
                    date: '2d ago',
                    commentCount: 9,
                    shareCount: 5,
                },
                {
                    id: 2,
                    title: "The worst advice we've ever heard about coffee",
                    date: '4d ago',
                    commentCount: 1,
                    shareCount: 2,
                },
            ],
        })

        return {
            isOpen,
            toggle,
            t,
            categories,
            selected
        }
    },
}
</script>