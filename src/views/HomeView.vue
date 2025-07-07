<template>
  <main>

    <Grid :data="data" v-slot="{ item }">
      <Row :item="item.kolon" v-slot="{ col }">
        <Col>
        %{{ col.width }}
        </Col>
      </Row>
    </Grid>
    <GridLayout v-model:layout="layoutContainer" :col-num="12" :row-height="30" :is-draggable="true"
      :is-resizable="true">
      <template #item="{ item }">
        <div class="outer-box">
          <GridLayout v-if="item.i === '0'" v-model:layout="layoutInset" :col-num="12" :row-height="30">
            <template #item="{ item }">
              <div class="inner-box">Container 0 - {{ item.i }}</div>
            </template>
          </GridLayout>
          <GridLayout v-if="item.i === '1'" v-model:layout="layoutInset1" :col-num="12" :row-height="30">
            <template #item="{ item }">
              <div class="inner-box">Container 1 - {{ item.i }}</div>
            </template>
          </GridLayout>
          <GridLayout v-if="item.i === '2'" v-model:layout="layoutInset2" :col-num="12" :row-height="30">
            <template #item="{ item }">
              <div class="inner-box">Container 1- {{ item.i }}</div>
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
import { GridLayout, type LayoutItem } from 'grid-layout-plus';
import { reactive } from 'vue';


interface IData {
  id: number,
  svgattr: string,
  kolon: {
    id: string,
    width: number
  }[]

}
const layoutContainer = reactive<LayoutItem[]>([
  { x: 0, y: 0, w: 12, h: 4, i: '0' },
  { x: 0, y: 5, w: 12, h: 4, i: '1' },
  { x: 0, y: 10, w: 12, h: 2, i: '2' },
])

const layoutInset = reactive<LayoutItem[]>([
  { x: 0, y: 0, w: 6, h: 2, i: 'a' },
  { x: 6, y: 0, w: 6, h: 2, i: 'b' },
])

const layoutInset1 = reactive<LayoutItem[]>([
  { x: 0, y: 0, w: 6, h: 2, i: 'c' },
  { x: 6, y: 0, w: 6, h: 2, i: 'd' },
])
const layoutInset2 = reactive<LayoutItem[]>([
  { x: 0, y: 0, w: 6, h: 2, i: 'e' },
  { x: 6, y: 0, w: 6, h: 2, i: 'f' },
])



const data: IData[] = [
  {
    "id": 10,
    "svgattr": "M100,0V50H0V0Z",
    "kolon": [
      {
        "id": "25yl85j",
        "width": 100
      }
    ]
  },
  {
    id: 20,
    svgattr: "M49,0V50H0V0Z M100,0V50H51V0Z",
    kolon: [
      {
        "id": "r79ev3o",
        "width": 50
      },
      {
        "id": "4m4im7j",
        "width": 50
      }
    ]
  },
  {
    "id": 30,
    "svgattr": "M32, 0V50H0V0Z M66, 0V50H34V0Z M100, 0V50H68V0Z",
    "kolon": [
      {
        "id": "jtm2zsp",
        "width": 33
      },
      {
        "id": "t5jl0xn",
        "width": 33
      },
      {
        "id": "w6kx27y",
        "width": 33
      }
    ]
  },
  {
    "id": 40,
    "svgattr": "M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z",
    "kolon": [
      {
        "id": "0bz8jj1",
        "width": 25
      },
      {
        "id": "p4fybdh",
        "width": 25
      },
      {
        "id": "ffiosh2",
        "width": 25
      },
      {
        "id": "fcnorwk",
        "width": 25
      }
    ]
  },
  {
    "id": 21,
    "svgattr": "M32.6667,0V50H0V0Z M100,0V50H34.6667V0Z",
    "kolon": [
      {
        "id": "j33w2jz",
        "width": 33
      },
      {
        "id": "rj3g584",
        "width": 66
      }
    ]
  },
  {
    "id": 22,
    "svgattr": "M65.3333,0V50H0V0Z M100,0V50H67.3333V0Z",
    "kolon": [
      {
        "id": "vrltrrg",
        "width": 66
      },
      {
        "id": "xw928p2",
        "width": 33
      }
    ]
  }]


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

.text {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  font-size: 24px;
  text-align: center;
}
</style>