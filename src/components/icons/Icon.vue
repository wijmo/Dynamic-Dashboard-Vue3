<template>
    <svg :width="width" :height="height" :viewBox="viewBox" :fill="fill">
        <slot :palette="palette" />
    </svg>
</template>

<script>
    import palette from '../../services/palette.service';

    export default {
        setup() {
            return { palette };
        },
        props: {
            width: {
                type: Number,
                default: 64,
            },
            height: {
                type: Number,
                default: 64,
            },
            viewBox: {
                type: String,
                default: '0 0 64 64',
            },
            fill: {
                type: String,
                default: 'currentColor',
            },
        },
    }
</script>

<style scoped>

</style>