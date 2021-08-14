import {
  margin,
  display,
  MarginProps,
  DisplayProps,
  borderRadius,
  BorderRadiusProps,
} from 'styled-system'
import { darken } from 'polished'

import styled, { css } from '@ganon/styled'
import { ButtonsVariant, DefaultGanonTheme } from '@ganon/theme'
import { getColor } from '@ganon/theme-utils'

export interface ButtonVariants {
  variant?: ButtonsVariant
}

export type TextTransformUppercase = {
  transformTextUppercase?: boolean
}

export type ButtonProps = MarginProps &
  DisplayProps &
  ButtonVariants &
  BorderRadiusProps &
  TextTransformUppercase

const colors = ({ theme, variant }: ButtonVariants & DefaultGanonTheme) => {
  const v = variant ?? 'primary'

  return css`
    color: ${getColor({
      theme,
      color: theme.buttons[v].textColor,
    })};

    background-color: ${darken(
      0.41,
      getColor({
        theme,
        color: theme.buttons[v].backgroundColor,
      }),
    )};

    border: 1px solid
      ${getColor({
        theme,
        color: theme.buttons[v].borderColor,
      })};

    :hover:enabled {
      background-color: ${getColor({
        theme,
        color: theme.buttons[v].hover.backgroundColor,
      })};
      color: ${getColor({
        theme,
        color: theme.buttons[v].hover.color,
      })};
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${colors}
  border-radius: 5px;

  flex: 1;

  font-weight: bold;

  padding: 16px 26px;

  transition: all 150ms ease-in-out;
  cursor: pointer;
  text-transform: ${({ transformTextUppercase }) =>
    transformTextUppercase ? 'uppercase' : 'none'};

  :disabled {
    cursor: not-allowed;
    filter: opacity(0.5);
  }

  ${margin}
  ${display}
  ${borderRadius}
`

Button.defaultProps = {
  display: 'flex',
}
