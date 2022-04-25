<template>
    <icon v-slot="{palette}">
        <rect :fill="palette[2]" x="41" y="17" width="14" height="11" />
        <rect :fill="palette[2]" x="40.89" y="33.96" width="14" height="11" />
        <rect :fill="palette[3]" x="9" y="26" width="14" height="2" />
        <rect :fill="palette[3]" x="9" y="17" width="14" height="2" />
        <rect :fill="palette[3]" x="9" y="34" width="14" height="2" />
        <rect :fill="palette[3]" x="9" y="43" width="14" height="2" />
        <path :fill="palette[0]" d="M49,53v2h1V53ZM37,53v2h1V53ZM26,53v2h1V53ZM14,53v2h1V53ZM31,24H9V21H31ZM26,41H9V38H26ZM60,58H6V57H60Z" />
        <polygon :fill="palette[1]" points="25 17 25 19 34 19 34 26 25 26 25 28 39 28 39 17 25 17" />
        <polygon :fill="palette[1]" points="25 36 29 36 29 43 25 43 25 45 39 45 39 34 25 34 25 36" />
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