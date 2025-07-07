<template>
  <main>
    <Grid :data="sectionData" v-slot="{ item }">
      <Row :item="item.kolon" v-slot="{ col }">
        <Col>
        %{{ col.width }}
        </Col>
      </Row>
    </Grid>
    <GridLayout v-model:layout="layoutContainer" :col-num="12" :row-height="30" :is-draggable="true"
      :is-resizable="true">
      <template #item="{ item }">

        <div v-for="layo in layoutContainer">
          <GridLayout v-if="item.i == layo.i" v-model:layout="layo.nested" :col-num="12" :row-height="30">
            <template #item="{ item }">
              <div>Container 0 - {{ item.i }}</div>
            </template>
          </GridLayout>
        </div>

      </template>
    </GridLayout>

  </main>
</template>
<script setup lang="ts">
import Col from '@/components/Col.vue';
import Grid from '@/components/Grid.vue';
import Row from '@/components/Row.vue';
import { useLayoutStore } from '@/stores/layout.store';
import type { IImprovedLayoutItem } from '@/types/layout.type';
import { GridLayout } from 'grid-layout-plus';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';


const layoutStore = useLayoutStore()
const { sectionData } = storeToRefs(layoutStore);

const layoutContainer = reactive<IImprovedLayoutItem[]>([
  {
    x: 0, y: 0, w: 12, h: 4, i: '0', nested: [
      { x: 0, y: 0, w: 6, h: 2, i: 'a' },
      { x: 6, y: 0, w: 6, h: 2, i: 'b' },
    ]
  },
  {
    x: 0, y: 5, w: 12, h: 4, i: '1', nested: [
      { x: 0, y: 0, w: 6, h: 2, i: 'c' },
      { x: 6, y: 0, w: 6, h: 2, i: 'd' },
    ]
  },

])

</script>


<style scoped>
.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}
</style>