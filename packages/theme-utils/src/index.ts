/* eslint-disable @typescript-eslint/ban-types */
import { theme as defaultTheme, Theme } from '@ganon/theme'

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P]
}

function merge<T>(target: T, source: RecursivePartial<T>): T {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object)
      Object.assign(source[key], merge(target[key], source[key]))
  }

  Object.assign(target || {}, source)
  return target as T
}

export const overrideTheme = (theme: RecursivePartial<Theme>): Theme =>
  merge(defaultTheme, theme)
