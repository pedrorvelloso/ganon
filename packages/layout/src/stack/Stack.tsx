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

export const VStack: React.FC<Omit<StackProps, 'direction'>> = ({
  spacing = '0.5rem',
  children,
}) => {
  return (
    <Stack direction="column" spacing={spacing}>
      {children}
    </Stack>
  )
}

export const HStack: React.FC<Omit<StackProps, 'direction'>> = ({
  spacing = '0.5rem',
  children,
}) => {
  return (
    <Stack direction="row" spacing={spacing}>
      {children}
    </Stack>
  )
}
