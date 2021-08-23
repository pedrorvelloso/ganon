import { ColorsType } from '@ganon/theme'
import * as CSS from 'csstype'

export interface ColorProps {
  color?: ColorsType | CSS.Property.Color
  textColor?: ColorsType | CSS.Property.Color
  bg?: ColorsType | CSS.Property.Color
  backgroundColor?: ColorsType | CSS.Property.Color
}
