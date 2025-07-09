<template>
  <main>
    <!-- <Grid :data="sectionData" v-slot="{ item }">
      <Row :item="item.kolon" v-slot="{ col }">
        <Col>
        %{{ col.width }}
        </Col>
      </Row>
    </Grid> -->
    <GridLayout v-model:layout="sectionData" :col-num="12" :row-height="16" :is-draggable="true" :is-resizable="false">
      <template #item="{ item }">

        <div v-for="layo in sectionData">
          <GridLayout v-if="item.i == layo.i" v-model:layout="layo.nested" :col-num="12" :row-height="30"
            :is-resizable="false">
            <template #item="{ item }">
              <div>{{ item.i }}</div>
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
import { onMounted } from 'vue';


const layoutStore = useLayoutStore()
const { sectionData } = storeToRefs(layoutStore);


onMounted(() => {
  layoutStore.fetchLayout()
})

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