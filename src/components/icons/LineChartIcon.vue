<template>
    <icon v-slot="{palette}">
        <path :fill="palette[0]" d="M6,5V57a1,1,0,0,0,1,1H58v1H7a2,2,0,0,1-2-2V5Z" />,
        <polygon :fill="palette[3]" points="51 20.41 49.59 19 32.5 36.97 27.5 31.97 11 48.48 12.5 49.98 27.5 34.97 32.5 39.97 51 20.41" />,
        <polygon :fill="palette[2]" points="34.92 30.42 27.5 23 11 39.51 12.5 41.01 27.5 26 33.42 31.92 34.92 30.42"  />,
        <polygon :fill="palette[2]" points="40.58 36.08 39.08 37.58 45.97 44.47 47.38 42.88 40.58 36.08"  />,
    </icon>
</template>

<script>
    import Icon from './Icon.vue';

    export default {
        components: {
            Icon,
        },
    }
</script>

<style scoped>

</style>