// import { DefaultGanonTheme, DefaultVariantStyles } from '@ganon/theme'
import { variant } from 'styled-system'
// import { StackBaseProps } from './styles'

export const stackVariant = () =>
  variant({
    prop: '$direction',
    variants: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
  })
