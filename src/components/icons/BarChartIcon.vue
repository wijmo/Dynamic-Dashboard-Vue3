<template>
    <icon v-slot="{palette}">
        <rect :fill="palette[1]" x="12" y="34" width="40" height="7" />
        <rect :fill="palette[2]" x="12" y="46" width="33" height="7" />
        <rect :fill="palette[3]" x="12" y="11" width="32" height="7" />
        <path :fill="palette[0]" d="M36,22v7H12V22ZM10,14H8v1h2Zm0,11H8v1h2Zm0,12H8v1h2Zm0,12H8v1h2Zm49,9H7a.94.94,0,0,1-1-1V5H5V57a2,2,0,0,0,2,2H59Z" />
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