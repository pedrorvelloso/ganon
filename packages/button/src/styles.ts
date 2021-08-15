import {
  margin,
  display,
  MarginProps,
  DisplayProps,
  borderRadius,
  BorderRadiusProps,
} from 'styled-system'

import styled from '@ganon/styled'
import { ButtonsVariant } from '@ganon/theme'

import { buttonVariant } from './variants'

export type ButtonBaseProps = MarginProps &
  DisplayProps &
  BorderRadiusProps & {
    transformTextUppercase?: boolean
    colorScheme?: ButtonsVariant
  }

export const ButtonBase = styled.button<ButtonBaseProps>`
  ${buttonVariant}

  border-radius: 5px;

  font-weight: bold;

  padding: 16px 26px;
  max-height: 52px;

  display: flex;
  align-items: center;

  transition: all 150ms ease-in-out;
  cursor: pointer;
  text-transform: ${({ transformTextUppercase }) =>
    transformTextUppercase ? 'uppercase' : 'none'};

  border-width: 1px;
  border-style: solid;

  :disabled {
    cursor: not-allowed;
    filter: opacity(0.5);
  }

  ${margin}
  ${display}
  ${borderRadius}
`

export const ButtonIcon = styled.span<MarginProps>`
  ${margin}

  display: flex;
  align-items: center;
  justify-content: center;
`
