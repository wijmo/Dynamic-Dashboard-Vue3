<template>
    <div class="menu" :class="{ 'menu--open': !isCollapsed }">
        <div class="menu-toggle" @click="toggle">
            <menu-icon />
        </div>
        <div class="menu-item"
             v-for="{ id, icon, title } in widgets"
             :key="id"
             :title="title"
             @click="$emit('add-tile', id)"
        >
            <component :is="icon" />
            <div class="menu-item-name">{{title}}</div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import MenuIcon from './icons/MenuIcon.vue';
    import BarChartIcon from "./icons/BarChartIcon.vue";
    import BlankIcon from './icons/BlankIcon.vue';
    import BubbleChartIcon from "./icons/BubbleChartIcon.vue";
    import BulletGraphIcon from "./icons/BulletGraphIcon.vue";
    import ColumnChartIcon from "./icons/ColumnChartIcon.vue";
    import GridIcon from "./icons/GridIcon.vue";
    import LinearGaugeIcon from "./icons/LinearGaugeIcon.vue";
    import LineChartIcon from "./icons/LineChartIcon.vue";
    import RadialGaugeIcon from "./icons/RadialGaugeIcon.vue";

    export default {
        setup() {
            const isCollapsed = ref(true);
            const toggle = () => isCollapsed.value = !isCollapsed.value;
            return {
                isCollapsed,
                toggle,
            }
        },
        components: {
            MenuIcon,
            BarChartIcon,
            BlankIcon,
            BubbleChartIcon,
            BulletGraphIcon,
            ColumnChartIcon,
            GridIcon,
            LinearGaugeIcon,
            LineChartIcon,
            RadialGaugeIcon,
        },
        props: [
            'widgets',
        ],
    }
</script>

<style scoped>
</style>