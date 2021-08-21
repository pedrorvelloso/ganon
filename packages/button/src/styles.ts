import {
  margin,
  display,
  MarginProps,
  DisplayProps,
  borderRadius,
  BorderRadiusProps,
  padding,
  PaddingProps,
} from 'styled-system'

import styled from '@ganon/styled'

import {
  buttonColorVariant,
  buttonSizeVariant,
  buttonVariant,
} from './variants'
import { ButtonColorScheme, ButtonSize, ButtonVariant } from './variants.type'

export type ButtonBaseProps = MarginProps &
  DisplayProps &
  BorderRadiusProps &
  PaddingProps & {
    /**
     * Text is Uppercase
     */
    transformTextUppercase?: boolean
    /**
     * Color scheme variant
     * @type ButtonColorScheme
     */
    colorScheme?: ButtonColorScheme
    /**
     * Button size variant
     * @type ButtonSize
     */
    size?: ButtonSize
    /**
     * Button variant
     * @type ButtonVariant
     */
    variant?: ButtonVariant
  }

export const ButtonBase = styled.button<ButtonBaseProps>`
  ${buttonColorVariant}
  ${buttonSizeVariant}
  ${buttonVariant}

  border-radius: 5px;

  font-weight: bold;

  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

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
  ${padding}
`

export const ButtonIcon = styled.span<MarginProps>`
  ${margin}

  display: flex;
  align-items: center;
  justify-content: center;
`
