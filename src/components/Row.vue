<template>
    <div class="flex gap-4 w-full h-20 border border-gray-300 relative">
        <slot v-for="col in item" :col />
    </div>
</template>
<script setup lang="ts">


interface IKolon {
    id: string,
    width: number
}


defineProps<{
    item: IKolon[]
}>()

</script>