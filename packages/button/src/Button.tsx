import React, { ButtonHTMLAttributes } from 'react'
import { Spinner } from '@ganon/spinner'

import { ButtonBase, ButtonIcon, ButtonBaseProps } from './styles'

export interface ButtonOptions {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  isLoading?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export type ButtonProps = ButtonBaseProps &
  ButtonOptions &
  ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  isLoading,
  size = 'md',
  disabled,
  ...buttonProps
}) => {
  return (
    <ButtonBase
      disabled={disabled || isLoading}
      role="button"
      size={size}
      {...buttonProps}
    >
      {isLoading ? (
        <Spinner size={size} />
      ) : (
        <>
          {leftIcon && <ButtonIcon marginRight="2">{leftIcon}</ButtonIcon>}
          {children}
          {rightIcon && <ButtonIcon marginLeft="2">{rightIcon}</ButtonIcon>}
        </>
      )}
    </ButtonBase>
  )
}

Button.defaultProps = {
  colorScheme: 'primary',
}
