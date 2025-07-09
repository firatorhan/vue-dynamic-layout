<template>
  <main>
    <div class="mb-10">
      <Grid :data="sectionData" v-slot="{ item }" class="grid grid-cols-3 gap-4">
        <div class="p-4 bg-zinc-50 hover:bg-zinc-100 border rounded group cursor-copy transition-all duration-200">
          <Row :item="item.nested" v-slot="{ col }" @click="handleAddRow(item)">
            <Col
              class="border border-zinc-500 group-hover:bg-zinc-600  group-hover:text-zinc-50 transition-all duration-200">
            %{{ gridToPercent(col.w) }}
            </Col>
          </Row>
        </div>
      </Grid>
    </div>

    <GridLayout v-if="userLayout.length" v-model="userLayout" />


  </main>
</template>
<script setup lang="ts">
import Col from '@/components/Col.vue';
import Grid from '@/components/Grid.vue';
import GridLayout from '@/components/GridLayout.vue';
import Row from '@/components/Row.vue';
import { useLayoutStore } from '@/stores/layout.store';
import type { IImprovedLayoutItem } from '@/types/layout.type';
import { gridToPercent } from '@/utils';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';


const layoutStore = useLayoutStore()
const { sectionData, userLayout } = storeToRefs(layoutStore);

const handleAddRow = (item: IImprovedLayoutItem) => {
  console.log('ii', item)
  userLayout.value.push(item)

}

onMounted(() => {
  layoutStore.fetchLayout()
})

</script>


<style scoped></style>