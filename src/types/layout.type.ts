import type { LayoutItem } from 'grid-layout-plus'

export interface ISectionData {
  id: number
  svgattr: string
  kolon: IColData[]
}
export interface IColData {
  id: string
  width: number
}

export interface IImprovedLayoutItem extends LayoutItem {
  nested: LayoutItem[]
}
