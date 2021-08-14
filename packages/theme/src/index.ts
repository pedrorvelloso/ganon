import base from './base'

export type Theme = typeof theme

export const theme = { ...base }
export type DefaultGanonTheme = { theme: Theme }
export * from './interfaces'

export * from './base'

export default theme
