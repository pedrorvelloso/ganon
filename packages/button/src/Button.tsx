import React, { ButtonHTMLAttributes } from 'react'

import { ButtonBase, ButtonIcon, ButtonBaseProps } from './styles'

export interface ButtonOptions {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

export type ButtonProps = ButtonBaseProps &
  ButtonOptions &
  ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  ...buttonProps
}) => {
  return (
    <ButtonBase {...buttonProps}>
      {leftIcon && <ButtonIcon marginRight="2">{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon marginLeft="2">{rightIcon}</ButtonIcon>}
    </ButtonBase>
  )
}

Button.defaultProps = {
  colorScheme: 'primary',
}
