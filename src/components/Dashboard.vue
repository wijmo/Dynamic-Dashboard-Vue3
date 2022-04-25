<template>
    <div class="content">
        <div class="dashboard">
            <component v-for="tile in tiles"
                    :key="tile.id"
                    :is="tile.type"
                    @remove-tile="$emit('remove-tile', tile.id)"
                    @drag-start="$emit('drag-start', {event: $event, tileId: tile.id})"
                    @drag-over="$emit('drag-over', {event: $event, tileId: tile.id})"
                    @drag-finish="$emit('drag-finish', {event: $event, tileId: tile.id})"
                    @drag-end="$emit('drag-end', {event: $event, tileId: tile.id})"
            ></component>
            <div class="blank" v-if="!tiles.length">
                <empty-icon />
                <div>Click on an item on the menu bar to add the new tile to the dashboard.</div>
            </div>
        </div>
    </div>
</template>

<script>
    import EmptyIcon from './icons/EmptyIcon.vue';
    import BarChart from './tiles/BarChart.vue';
    import Blank from './tiles/Blank.vue';
    import BubbleChart from './tiles/BubbleChart.vue';
    import BulletGraph from './tiles/BulletGraph.vue';
    import ColumnChart from './tiles/ColumnChart.vue';
    import Grid from './tiles/Grid.vue';
    import LinearGauge from './tiles/LinearGauge.vue';
    import LineChart from './tiles/LineChart.vue';
    import RadialGauge from './tiles/RadialGauge.vue';

    export default {
        props: [
            'tiles',
        ],
        components: {
            EmptyIcon,
            BarChart,
            Blank,
            BubbleChart,
            BulletGraph,
            ColumnChart,
            Grid,
            LinearGauge,
            LineChart,
            RadialGauge,
        },
      emits: [
        'drag-start',
        'drag-over',
        'drag-finish',
        'drag-end',
        'remove-tile',
      ],
    }
</script>

<style scoped>
</style>
