// import { DefaultGanonTheme, DefaultVariantStyles } from '@ganon/theme'
import { variant } from 'styled-system'
import { StackBaseProps } from './styles'

export const stackVariant = ({ $spacing }: StackBaseProps) =>
  variant({
    prop: '$direction',
    variants: {
      row: {
        flexDirection: 'row',
        '& > *': {
          marginRight: $spacing,
        },
        '& > *:last-child': {
          marginRight: 0,
        },
      },
      column: {
        flexDirection: 'column',
        '& > *': {
          marginBottom: $spacing,
        },
        '& > *:last-child': {
          marginBottom: 0,
        },
      },
    },
  })
