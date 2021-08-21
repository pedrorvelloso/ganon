import React, { ButtonHTMLAttributes } from 'react'
import { Spinner } from '..'

import { ButtonBase, ButtonIcon, ButtonBaseProps } from './styles'

export interface ButtonOptions {
  /**
   * Display left icon
   */
  leftIcon?: React.ReactElement
  /**
   * Display right icon
   */
  rightIcon?: React.ReactElement
  /**
   * Set button to loading state
   */
  isLoading?: boolean
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
  colorScheme: 'default',
}
