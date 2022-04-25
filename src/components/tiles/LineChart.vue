<template>
    <Tile title="Line Chart" v-slot="{palette}">
        <wj-flex-chart :chartType="'Line'" :itemsSource="data" :bindingX="'date'" :palette="palette">
            <wj-flex-chart-axis :wjProperty="'axisX'" :format="'MMM yy'"></wj-flex-chart-axis>
            <wj-flex-chart-series :name="'Sales'" :binding="'sales'"></wj-flex-chart-series>
            <wj-flex-chart-series :name="'Profit'" :binding="'profit'" :chartType="'LineSymbols'"></wj-flex-chart-series>
        </wj-flex-chart>
    </Tile>
</template>

<script>
    import Tile from './Tile.vue';
    import { WjFlexChart, WjFlexChartAxis, WjFlexChartSeries } from '@grapecity/wijmo.vue2.chart';
    import DataService from '../../services/data.service';

    export default {
        setup: () => ({ data: DataService.getData() }),
        components: {
            Tile,
            WjFlexChart,
            WjFlexChartAxis,
            WjFlexChartSeries,
        },
    }
</script>

<style scoped>
</style>