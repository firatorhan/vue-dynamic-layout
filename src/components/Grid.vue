<template>
    <div class="flex flex-col gap-4">
        <slot v-for="item in data" :item />
    </div>
</template>
<script setup lang="ts">
import type { ISectionData } from '@/stores/counter';



defineProps<{
    data: ISectionData[]
}>()

</script>