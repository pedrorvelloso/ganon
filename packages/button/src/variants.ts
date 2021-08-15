import {
  DefaultGanonTheme,
  ButtonVariantStyles,
  ButtonsVariant,
} from '@ganon/theme'
import { darken } from 'polished'
import { variant } from 'styled-system'

export const buttonVariant = ({ theme }: DefaultGanonTheme) =>
  variant<ButtonVariantStyles, ButtonsVariant, 'colorScheme'>({
    prop: 'colorScheme',
    variants: {
      primary: {
        color: 'white',
        bg: darken(0.41, theme.colors.primary),
        borderColor: 'primary',
        ':hover:enabled': {
          bg: 'primary',
        },
      },
      secondary: {
        color: 'white',
        bg: darken(0.41, theme.colors.secondary),
        borderColor: 'secondary',
        ':hover:enabled': {
          bg: 'secondary',
        },
      },
      success: {
        color: 'white',
        bg: darken(0.41, theme.colors.success),
        borderColor: 'success',
        ':hover:enabled': {
          bg: 'success',
        },
      },
      danger: {
        color: 'white',
        bg: darken(0.41, theme.colors.danger),
        borderColor: 'danger',
        ':hover:enabled': {
          bg: 'danger',
        },
      },
      warning: {
        color: 'white',
        bg: darken(0.41, theme.colors.warning),
        borderColor: 'warning',
        ':hover:enabled': {
          color: 'black',
          bg: 'warning',
        },
      },
    },
  })
