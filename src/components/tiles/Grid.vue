<template>
    <Tile title="Grid">
        <wj-flex-grid
                :isReadOnly="true"
                :headersVisibility="'Column'"
                :selectionMode="'ListBox'"
                :itemsSource="data"
        >
            <wj-flex-grid-column :binding="'id'" :header="'ID'" :width="40"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'date'" :header="'Date'" :width="'*'" :format="'MMM yyyy'"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'sales'" :header="'Sales'" :format="'c'"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'expenses'" :header="'Expenses'" :format="'c'"></wj-flex-grid-column>
            <wj-flex-grid-column :binding="'profit'" :header="'Profit'" :format="'c'"></wj-flex-grid-column>
        </wj-flex-grid>
    </Tile>
</template>

<script>
    import Tile from './Tile.vue';
    import { WjFlexGrid, WjFlexGridColumn } from '@grapecity/wijmo.vue2.grid';
    import DataService from '../../services/data.service';

    export default {
        data: () => ({ data: DataService.getData() }),
        components: {
            Tile,
            WjFlexGrid,
            WjFlexGridColumn,
        },
    }
</script>

<style scoped>
</style>