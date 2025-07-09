import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IImprovedLayoutItem, ISectionData } from '@/types/layout.type'
import { generateUniqueId, percentToGrid } from '@/utils'

export const useLayoutStore = defineStore('layout-store', () => {
  const sectionData = ref<IImprovedLayoutItem[]>([])
  const userLayout = ref<IImprovedLayoutItem[]>([])

  async function fetchLayout() {
    try {
      const res = await fetch('/src/data/sectiondata.json')
      if (!res.ok) throw new Error('Fetch failed')
      const _data = await res.json()
      sectionData.value = handleData(_data)
    } catch (error) {
      console.error('Error fetching layout:', error)
    }
  }

  const handleData = (items: ISectionData[]) => {
    const _mapData = items.map((item) => {
      let currentX = 0

      const nested = item.kolon.map((col) => {
        const w = percentToGrid(col.width)
        const layoutItem = {
          x: currentX,
          y: 0,
          w,
          h: 2,
          i: col.id,
        }
        currentX += w
        return layoutItem
      })

      return {
        x: 0,
        y: 0,
        w: 12,
        h: 4,
        i: item.id.toString(),
        nested,
      }
    })
    return _mapData
  }

  const handleAddRow = (item: IImprovedLayoutItem) => {
    const exists = userLayout.value.some((row) => row.i === item.i)
    if (!exists) {
      userLayout.value.push(item)
    } else {
      const newItem = {
        ...item,
        i: generateUniqueId(),
      }
      userLayout.value.push(newItem)
    }
  }

  const removeItem = (targetId: string | number) => {
    const index = userLayout.value.findIndex((item) => item.i === targetId)

    if (index !== -1) userLayout.value.splice(index, 1)
  }

  return { sectionData, userLayout, handleAddRow, removeItem, handleData, fetchLayout }
})
