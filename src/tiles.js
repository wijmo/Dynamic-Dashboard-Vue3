import { reactive } from 'vue';
import * as wjcCore from '@grapecity/wijmo';

export const widgets = [
    'Grid',
    'RadialGauge',
    'LinearGauge',
    'BarChart',
    'ColumnChart',
    'LineChart',
    'BubbleChart',
    'BulletGraph',
    'Blank'
].map(item => ({
    id: item,
    title: wjcCore.toHeaderCase(item),
    icon: `${item}Icon`,
}));


export function useTiles(swapOnDragAndDrop = false) {
    const tiles = reactive([]);
    let nextTileId = 0;
    let draggedTileId = null;

    const findTileIndex = tileId => tiles.findIndex(t => t.id === tileId);
    const findDragSourceEl = () => document.querySelector('.tile.drag-source');
    const findDragTargetEl = () => document.querySelector('.tile.drag-over');
    const findClosestTileEl = event => wjcCore.closest(event.target, '.tile');
    const setDragSourceEl = el => wjcCore.addClass(el, 'drag-source');
    const setDragTargetEl = el => wjcCore.addClass(el, 'drag-over');
    const unsetDragSourceEl = el => wjcCore.removeClass(el, 'drag-source');
    const unsetDragTargetEl = el => wjcCore.removeClass(el, 'drag-over');

    return {
        tiles,
        addTile(widgetId) {
            tiles.unshift({ id: nextTileId++, type: widgetId });
        },
        removeTile(tileId) {
            tiles.splice(findTileIndex(tileId), 1);
        },
        dragStart(payload) {
            const { event, tileId } = payload;
            draggedTileId = tileId;
            event.dataTransfer.effectAllowed = 'move';
            setDragSourceEl(findClosestTileEl(event))
        },
        dragOver(payload) {
            const { event } = payload;
            const tile = findClosestTileEl(event);
            const dragTarget = findDragTargetEl();
            if (tile !== dragTarget) {
                unsetDragTargetEl(dragTarget);
            }
            const dragSource = findDragSourceEl();
            if (dragSource && tile !== dragSource) {
                event.preventDefault();
                event.dataTransfer.dropEffect = 'move';
                setDragTargetEl(tile);
            }
        },
        dragFinish(payload) {
            const { event, tileId } = payload;
            const dragSource = findDragSourceEl();
            const dragTarget = findDragTargetEl();
            if (dragSource && dragTarget) {
                event.preventDefault();
                const sourceIndex = findTileIndex(draggedTileId);
                const sourceTile = tiles[sourceIndex];
                const targetIndex = findTileIndex(tileId)
                const targetTile = tiles[targetIndex];
                if (swapOnDragAndDrop) {
                    tiles.splice(sourceIndex, 1, targetTile);
                    tiles.splice(targetIndex, 1, sourceTile);
                } else {
                    tiles.splice(sourceIndex, 1);
                    tiles.splice(targetIndex, 0, sourceTile);
                }
                wjcCore.Control.invalidateAll(); // invalidate Wijmo controls after layout updates
            }
        },
        dragEnd() {
            unsetDragSourceEl(findDragSourceEl());
            unsetDragTargetEl(findDragTargetEl());
        },
    };
}
