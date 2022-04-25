<template>
    <icon v-slot="{palette}">
        <rect :fill="palette[1]" x="23" y="12.02" width="7" height="40" />
        <rect :fill="palette[2]" x="11" y="19.02" width="7" height="33" />
        <rect :fill="palette[3]" x="46" y="20.02" width="7" height="32" />
        <path :fill="palette[0]" d="M41,52H34V26h7Zm8,2v2h1V54ZM37,54v2h1V54ZM26,54v2h1V54ZM14,54v2h1V54ZM5,5V57a2,2,0,0,0,2,2H58V58H7a1,1,0,0,1-1-1V5Z" />
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