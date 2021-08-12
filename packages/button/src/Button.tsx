import { darken } from 'polished'
import {
  padding,
  margin,
  display,
  PaddingProps,
  MarginProps,
  DisplayProps,
} from 'styled-system'

import styled from '@ganon/styled'

export interface ButtonVariants {
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success'
}

export type ButtonProps = PaddingProps &
  MarginProps &
  DisplayProps &
  ButtonVariants

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) =>
    darken(0.41, theme.colors[variant ?? 'primary'])};
  border: 1px solid
    ${({ theme, variant }) => theme.colors[variant ?? 'primary']};
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.white};

  flex: 1;

  text-transform: uppercase;
  font-family: monospace;

  transition: all 150ms ease-in-out;
  cursor: pointer;

  padding: 16px 16px;

  :hover:enabled {
    background-color: ${({ theme, variant }) =>
      theme.colors[variant ?? 'primary']};
    color: ${({ theme, variant }) =>
      darken(0.41, theme.colors[variant ?? 'primary'])};
  }

  :disabled {
    cursor: not-allowed;
    filter: grayscale(0.9);
  }

  ${padding}
  ${margin}
  ${display}
`

Button.defaultProps = {
  display: 'flex',
  variant: 'primary',
}
