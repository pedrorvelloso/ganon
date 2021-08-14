import { Theme, ColorsType } from '@ganon/theme'

export interface GetColorInterface {
  theme: Theme
  color: ColorsType
}

export function getColor({ theme, color: incomingColor }: GetColorInterface) {
  const [color, hue] = incomingColor.split('.')
  const expectedColor: string = hue
    ? theme.colors[color][hue]
    : theme.colors[color]

  return expectedColor
}
