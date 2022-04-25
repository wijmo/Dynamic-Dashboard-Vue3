<template>
    <Tile title="Bullet Graph">
        <div class="bulet-graph-tile">
            <table class="table">
                <tr v-for="item in data.items" :key="item.id">
                    <td>{{ wjFormat(item.date, 'MMM yyyy') }}</td>
                    <td>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="orange" v-if="item.profit <= 400">
                            <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
                        </svg>
                    </td>
                    <td>
                        <wj-bullet-graph
                                :hasShadow="false"
                                :value="item.profit"
                                :min="0"
                                :bad="400"
                                :target="600"
                                :good="600"
                                :max="1000"
                        ></wj-bullet-graph>
                    </td>
                </tr>
            </table>
        </div>
    </Tile>
</template>

<script>
    import Tile from './Tile.vue';
    import { wjFormat } from '@grapecity/wijmo.vue2.core';
    import { WjBulletGraph } from '@grapecity/wijmo.vue2.gauge';
    import DataService from '../../services/data.service';

    export default {
        setup: () => ({
            data: DataService.getData(),
            wjFormat,
        }),
        components: {
            Tile,
            WjBulletGraph
        },
    }
</script>

<style scoped>
</style>