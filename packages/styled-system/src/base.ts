import { css } from '@ganon/styled'
import { ResponsiveToken } from './responsive'

export const breakpoints = ['30em', '48em', '62em', '80em']

export const resolveMediaQueries = (
  value: ResponsiveToken<unknown>,
  cssProperty: string,
) => {
  if (Array.isArray(value)) {
    const mediaQueries = value
      .slice(0, breakpoints.length)
      .map((v, breakpoint) =>
        css({
          [`@media screen and (min-width: ${breakpoints[breakpoint]})`]: {
            [cssProperty]: v,
          },
        }),
      )

    return css(
      {
        [cssProperty]: value[0],
      },
      mediaQueries,
    )
  }

  return css({
    [cssProperty]: value as string | number,
  })
}

export const resolveScale = (
  value: unknown,
  property: string,
  scale: unknown[],
) => {
  if (Array.isArray(value)) {
    const updatedValues = value.map((v) => {
      if (typeof v === 'number') return scale[v]
      if (typeof v === 'string' && !v.includes('px')) return scale[v]

      return v
    })

    return resolveMediaQueries(updatedValues, property)
  }

  return resolveMediaQueries(
    typeof value === 'number' ||
      (typeof value === 'string' && !value.includes('px'))
      ? scale[value]
      : value,
    property,
  )
}
