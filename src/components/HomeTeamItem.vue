<template>
    <div
        class="group w-full bg-white rounded-3xl hover:shadow-diary-cream/50 shadow-lg overflow-hidden flex flex-col justify-center items-center"
    >
        <div>
            <img
                class="object-center object-cover h-auto w-full group-hover:scale-105 transform ease-in-out transition duration-300"
                :src="image"
                :alt="memberName"
            />
        </div>
        <div class="text-center py-8 sm:py-6">
            <p class="text-4xl text-gray-700 font-bold mb-2">{{ memberName }}</p>
            <p class="text-base text-gray-400 font-normal">{{ role }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        memberName: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }
    }
}
</script>