<template>
    <div class="flex flex-col gap-2">
        <slot v-for="item in data" :item />
    </div>
</template>
<script setup lang="ts">
import type { IImprovedLayoutItem, ISectionData } from '@/types/layout.type';




defineProps<{
    data: IImprovedLayoutItem[]
}>()

</script>