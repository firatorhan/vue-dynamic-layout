<template>

    <GridLayout v-model:layout="layoutData!" :col-num="12" :row-height="16" :is-draggable="true" :is-resizable="false">
        <template #item="{ item }">
            <div v-for="layot in layoutData">
                <GridLayout v-if="item.i == layot.i" v-model:layout="layot.nested" :col-num="12" :row-height="30"
                    :is-resizable="false">
                    <template #item="{ item }">
                        <div class="mt-5">{{ item.i }}</div>
                    </template>
                </GridLayout>
            </div>

        </template>
    </GridLayout>

</template>
<script setup lang="ts">
import type { IImprovedLayoutItem } from '@/types/layout.type';
import { GridLayout } from 'grid-layout-plus';

const layoutData = defineModel<IImprovedLayoutItem[]>()


</script>


<style scoped>
.vgl-layout {
    background-color: #fcfcfc;

}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
    background-color: #52525c;
    text-align: center;
    color: white;
    border: 1px solid black;
    border-radius: 8px;

}

:deep(.vgl-item--resizing) {
    opacity: 90%;
}

:deep(.vgl-item--static) {
    background-color: #cce;
}
</style>