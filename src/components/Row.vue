<template>
    <div class="flex gap-2 w-full h-10 relative">
        <slot v-for="col in item" :col />
    </div>
</template>
<script setup lang="ts">
import type { LayoutItem } from 'grid-layout-plus';


defineProps<{
    item: LayoutItem[]
}>()

</script>