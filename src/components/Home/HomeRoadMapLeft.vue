<template>
    <div class="flex flex-row">
        <div class="hidden md:flex flex-col items-center">
            <div
                class="w-32 py-5 border text-orange-300 rounded-2xl mr-4 uppercase flex flex-col items-center justify-center"
            >
                <div class="text-3xl font-black">{{ step }}</div>
                <div class="text-gray-200 text-sm">{{ title }}</div>
            </div>
            <div class="h-full border-l-4 border-transparent" v-if="includeIndicator">
                <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
        </div>
        <div class="flex-auto border rounded-2xl border-gray-300 mx-3">
            <div class="flex md:flex-row flex-col items-center">
                <div class="flex-auto">
                    <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-orange-300">
                        <span class="font-black">{{ step }}</span>
                        - {{ title }}
                    </div>
                    <div class="p-3 text-3xl text-indigo-500 font">{{ headline }}</div>
                    <div class="px-3 pb-6">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-start flex-row" :v-if="includeIndicator">
        <div class="border-t-4 border-r-4 border-transparent">
            <div
                class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"
            ></div>
        </div>
        <div class="border-t-4 border-transparent flex-auto">
            <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
        </div>
        <div
            class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"
        ></div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        step: String,
        headline: String,
        includeIndicator: {
            type: Boolean,
            default: true
        }
    }
}
</script>