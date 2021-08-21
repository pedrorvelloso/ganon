import React from 'react'
import { StackBase } from './styles'

interface StackProps {
  direction?: 'row' | 'column'
  spacing?: string | number
}

export const Stack: React.FC<StackProps> = ({
  direction = 'row',
  spacing = '0.5rem',
  children,
}) => {
  return (
    <StackBase $direction={direction} $spacing={spacing}>
      {children}
    </StackBase>
  )
}
