
<template>
    <div
        class="h-2/3 flex relative mt-5 md:mt-32"
        :data-color="color"
        v-observe-visibility="emitVisibility"
    >
        <div class="m-auto grid md:grid-cols-2 lg:grid-cols-3 lg:px-32">
            <div
                class="mx-auto p-5 w-auto lg:w-3/5 lg:col-span-2"
                :class="isRight ? rightImgWrapperClasses : leftImgWrapperClasses"
            >
                <img
                    v-lazy="{ src: imageSrc }"
                    alt="example NFT"
                    class="rounded-3xl w-full max-w-md hover:scale-105 transform transition"
                    :class="isRight ? rightImgClasses : leftImgClasses"
                />
            </div>
            <div
                class="mt-5 md:my-auto px-6 text-xl text-white"
                :class="isRight ? rightTextClasses : leftTextClasses"
            >
                <span>
                    <slot name="description"></slot>
                </span>
                <h2
                    class="text-5xl sm:text-6xl text-center mt-3 md:text-7xl font-black text-orange-300 uppercase"
                    :class="isRight ? rightTitleClasses : leftTitleClasses"
                    :id="titleId"
                >
                    <slot name="title"></slot>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: String,
        color: String,
        isRight: {
            type: Boolean,
            default: true
        },
        titleId: String
    },
    setup(props, { emit }) {
        const emitVisibility = (...args) => {
            emit('observe-visibility', ...args)
        }

        const rightImgWrapperClasses = 'md:mr-0 md:ml-auto'
        const leftImgWrapperClasses = 'md:ml-0 md:mr-auto'
        const rightImgClasses = 'ml-auto'
        const leftImgClasses = 'mr-auto'
        const rightTextClasses = 'md:px-3 md:mr-auto xl:pr-36 xl:pl-6'
        const leftTextClasses = 'md:px-3 md:-order-1 xl:pr-36 xl:pr-6'
        const rightTitleClasses = 'md:text-left md:-ml-20'
        const leftTitleClasses = 'md:text-right md:-mr-32'

        return {
            emitVisibility,
            rightImgClasses,
            leftImgClasses,
            rightTextClasses,
            leftTextClasses,
            rightTitleClasses,
            leftTitleClasses,
            rightImgWrapperClasses,
            leftImgWrapperClasses
        }
    },
    emits: ['observe-visibility']
}
</script>