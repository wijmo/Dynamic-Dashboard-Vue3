<template>
    <Tile title="Radial Gauge">
        <wj-radial-gauge :value="data.items[data.items.length-1].profit" :min="0" :max="1000" :format="'c0'">
            <wj-range :wjProperty="'pointer'"></wj-range>
        </wj-radial-gauge>
        <h3>Profit for {{ wjFormat(data.items[data.items.length - 1].date, 'MMMM yyyy') }}</h3>
    </Tile>
</template>

<script>
    import Tile from './Tile.vue';
    import { wjFormat } from '@grapecity/wijmo.vue2.core';
    import { WjRadialGauge, WjRange } from '@grapecity/wijmo.vue2.gauge';
    import DataService from '../../services/data.service';

    export default {
        setup: () => ({
            data: DataService.getData(),
            wjFormat,
        }),
        components: {
            Tile,
            WjRadialGauge,
            WjRange,
        },
    }
</script>

<style scoped>
</style>