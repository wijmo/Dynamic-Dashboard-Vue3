<template>
    <div
            class="tile"
            draggable="true"
            @dragstart="$emit('drag-start', $event)"
            @dragover="$emit('drag-over', $event)"
            @drop="$emit('drag-finish', $event)"
            @dragend="$emit('drag-end', $event)"
    >
        <!-- caption -->
        <div class="tile-container">
            <div class="tile-header">{{title}}</div>
            <div class="buttons">
                <div class="button" title="Close Tile" @click="$emit('remove-tile')">
                    <remove-icon />
                </div>
            </div>
        </div>
        <!-- content -->
        <div class="tile-content">
            <slot :palette="palette" />
        </div>
    </div>
</template>

<script>
    import palette from '../../services/palette.service';
    import RemoveIcon from '../icons/RemoveIcon.vue';

    export default {
        setup: () => ({ palette }),
        components: {
            RemoveIcon,
        },
        props: {
            title: String,
        },
        emits: [
            'drag-start',
            'drag-over',
            'drag-finish',
            'drag-end',
        ],
    }
</script>

<style scoped>
</style>
