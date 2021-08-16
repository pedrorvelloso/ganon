import { DefaultGanonTheme, DefaultVariantStyles } from '@ganon/theme'
import { darken } from 'polished'
import { variant } from 'styled-system'

import { ButtonBaseProps } from './styles'

import {
  ButtonColorScheme,
  ButtonColorSchemeProp,
  ButtonSize,
  ButtonSizeProp,
  ButtonVariant,
} from './variants.type'

export const buttonColorVariant = ({
  theme,
  variant: buttonVariant,
}: DefaultGanonTheme & ButtonBaseProps) => {
  const colorWithVariant = (color: string, fallback: string) =>
    buttonVariant === 'outline' || buttonVariant === 'ghost' ? color : fallback

  return variant<
    DefaultVariantStyles,
    ButtonColorScheme,
    ButtonColorSchemeProp
  >({
    prop: 'colorScheme',
    variants: {
      primary: {
        color: colorWithVariant(theme.colors.primary, 'white'),
        bg: darken(0.41, theme.colors.primary),
        borderColor: 'primary',
        ':hover:enabled': {
          bg: 'primary',
          color: 'white',
        },
      },
      secondary: {
        color: colorWithVariant(theme.colors.secondary, 'white'),
        bg: darken(0.41, theme.colors.secondary),
        borderColor: 'secondary',
        ':hover:enabled': {
          bg: 'secondary',
          color: 'white',
        },
      },
      success: {
        color: colorWithVariant(theme.colors.success, 'white'),
        bg: darken(0.41, theme.colors.success),
        borderColor: 'success',
        ':hover:enabled': {
          bg: 'success',
          color: 'white',
        },
      },
      danger: {
        color: colorWithVariant(theme.colors.danger, 'white'),
        bg: darken(0.41, theme.colors.danger),
        borderColor: 'danger',
        ':hover:enabled': {
          bg: 'danger',
          color: 'white',
        },
      },
      warning: {
        color: colorWithVariant(theme.colors.warning, 'white'),
        bg: darken(0.41, theme.colors.warning),
        borderColor: 'warning',
        ':hover:enabled': {
          color: 'black',
          bg: 'warning',
        },
      },
    },
  })
}

export const buttonVariant = () =>
  variant<DefaultVariantStyles, ButtonVariant>({
    variants: {
      outline: {
        bg: 'transparent',
      },
      ghost: {
        borderColor: 'transparent',
        bg: 'transparent',
      },
    },
  })

export const buttonSizeVariant = () =>
  variant<DefaultVariantStyles, ButtonSize, ButtonSizeProp>({
    prop: 'size',
    variants: {
      sm: {
        height: '32px',
        fontSize: 1,
      },
      md: {
        height: '40px',
        fontSize: '1rem',
      },
      lg: {
        height: '48px',
        fontSize: '18px',
      },
    },
  })
