<template>
    <GridLayout v-model:layout="layoutData!" :col-num="12" :row-height="16" :is-draggable="true" :is-resizable="false">
        <template #item="{ item }">
            <div v-for="layout in layoutData">
                <div @click="emit('remove', item.i)"
                    class="flex justify-center items-center absolute top-6 -end-12 hover:cursor-pointer border bg-red-600 rounded-full size-[30px]">
                    <span class="text-white rotate-45 text-2xl ms-1 mb-1">+</span>
                </div>
                <GridLayout v-if="item.i == layout.i" v-model:layout="layout.nested" :col-num="12" :row-height="30"
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
const emit = defineEmits(['remove'])

const removeItem = (targetId: string | number) => {
    const index = layoutData.value?.findIndex((item) => item.i === targetId)
    if (index !== -1) {
        layoutData.value?.splice(index || 0, 1)
    }
}

</script>


<style scoped>
.vgl-layout {
    background-color: #fcfcfc;
    border-radius: 8px;
    border: 1px solid black;
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