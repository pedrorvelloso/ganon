import styled from '@ganon/styled'
import { stackVariant } from './variants'

export type StackBaseProps = {
  $direction: 'row' | 'column'
  $spacing: string | number
}

export const StackBase = styled.div<StackBaseProps>`
  display: flex;
  align-items: baseline;

  width: fit-content;

  ${stackVariant}
`
