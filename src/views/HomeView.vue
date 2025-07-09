<template>
  <main>
    <div class="mb-10 container relative border rounded p-10" v-show="showGrid">
      <div @click="showGrid = false"
        class="flex justify-center items-center absolute top-3 end-3 hover:cursor-pointer border rounded-full size-[30px]">
        <span class="text-zinc-500 rotate-45 text-4xl ms-1 mb-1">+</span>
      </div>
      <Grid :data="sectionData" v-slot="{ item }" class="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-zinc-50 hover:bg-zinc-100 border rounded group cursor-copy transition-all duration-200">

          <Row :item="item.nested" v-slot="{ col }" @click="layoutStore.handleAddRow(item)">
            <Col :style="{ width: gridToPercent(col.w) + '%' }"
              class="border border-zinc-500 group-hover:bg-zinc-600 group-hover:text-zinc-50 transition-all duration-200">
            %{{ gridToPercent(col.w) }}
            </Col>
          </Row>
        </div>
      </Grid>

    </div>
    <div v-show="!showGrid" @click="showGrid = true"
      class="p-4 mb-10 bg-zinc-50 hover:bg-zinc-100 border flex justify-center items-center relative rounded group cursor-copy transition-all duration-200">

      <div class="flex flex-col justify-center items-center gap-2">
        <div class="flex justify-center items-center bg-zinc-600 rounded-full size-[50px]">
          <span class="text-white text-4xl mb-1">+</span>
        </div>
        <span>Add New Row</span>
      </div>

    </div>

    <GridLayout v-if="userLayout.length" v-model="userLayout" @remove="(item) => layoutStore.removeItem(item)" />


  </main>
</template>
<script setup lang="ts">
import Col from '@/components/Col.vue';
import Grid from '@/components/Grid.vue';
import GridLayout from '@/components/GridLayout.vue';
import Row from '@/components/Row.vue';
import { useLayoutStore } from '@/stores/layout.store';
import { gridToPercent } from '@/utils';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';


const layoutStore = useLayoutStore()
const { sectionData, userLayout } = storeToRefs(layoutStore);
const showGrid = ref<boolean>(false)


onMounted(() => {
  layoutStore.fetchLayout()
})

</script>


<style scoped></style>