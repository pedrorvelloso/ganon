import styled, { ColorProps } from '@ganon/styled'
import {
  color,
  justifyContent,
  JustifyContentProps,
  alignItems,
  AlignItemsProps,
  flex,
  FlexProps,
  flexBasis,
  FlexBasisProps,
  flexGrow,
  FlexGrowProps,
  flexDirection,
  FlexDirectionProps,
  flexShrink,
  FlexShrinkProps,
  flexWrap,
  FlexWrapProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
} from 'styled-system'

export type FlexComponentProps = JustifyContentProps &
  AlignItemsProps &
  FlexProps &
  FlexBasisProps &
  FlexGrowProps &
  FlexDirectionProps &
  FlexShrinkProps &
  FlexWrapProps &
  MarginProps &
  PaddingProps &
  ColorProps

export const Flex = styled.div<FlexComponentProps>`
  display: flex;

  ${color}
  ${justifyContent}
  ${alignItems}
  ${flex}
  ${flexBasis}
  ${flexGrow}
  ${flexDirection}
  ${flexShrink}
  ${flexWrap}
  ${margin}
  ${padding}
`
