export function percentToGrid(percent: number): number {
  return Math.round((percent * 12) / 100)
}

export function gridToPercent(grid: number): number {
  return (grid / 12) * 100
}
