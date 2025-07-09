export function percentToGrid(percent: number): number {
  return Math.round((percent * 12) / 100)
}

export function gridToPercent(grid: number): number {
  return Math.round((grid / 12) * 100)
}

export function generateUniqueId(): number {
  return Date.now() + Math.floor(Math.random() * 1000)
}
