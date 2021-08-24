import styled, {
  ColorProps,
  BorderColorProps,
  TextTransformProps,
  TruncateProps,
  css,
} from '@ganon/styled'

import {
  maxWidth,
  maxHeight,
  width,
  height,
  padding,
  margin,
  color,
  layout,
  flexDirection,
  flexWrap,
  alignItems,
  justifyItems,
  justifySelf,
  alignContent,
  border,
  borderRadius,
  position,
  top,
  bottom,
  left,
  right,
  fontWeight,
  fontStyle,
  fontSize,
  MaxWidthProps,
  MaxHeightProps,
  WidthProps,
  HeightProps,
  PaddingProps,
  MarginProps,
  LayoutProps,
  FlexDirectionProps,
  FlexWrapProps,
  BorderProps,
  PositionProps,
  TopProps,
  BottomProps,
  LeftProps,
  RightProps,
  JustifyContentProps,
  AlignItemsProps,
  JustifySelfProps,
  AlignContentProps,
  FontWeightProps,
  FontSizeProps,
  FontStyleProps,
} from 'styled-system'

export type ItemBaseProps = ColorProps &
  MaxWidthProps &
  MaxHeightProps &
  WidthProps &
  HeightProps &
  PaddingProps &
  MarginProps &
  LayoutProps &
  FlexDirectionProps &
  FlexWrapProps &
  BorderProps &
  PositionProps &
  TopProps &
  BottomProps &
  LeftProps &
  RightProps &
  BorderColorProps &
  JustifyContentProps &
  AlignItemsProps &
  JustifySelfProps &
  AlignContentProps &
  FontWeightProps &
  FontSizeProps &
  TextTransformProps &
  FontStyleProps &
  TruncateProps

export const Item = styled.div<ItemBaseProps>`
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  ${({ isTruncated }) =>
    isTruncated &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  ${maxWidth}
  ${maxHeight}
  ${width}
  ${height}
  ${padding}
  ${margin}
  ${color}
  ${layout}
  ${flexDirection}
  ${flexWrap}
  ${border}
  ${borderRadius}
  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}
  ${alignItems}
  ${justifyItems}
  ${justifySelf}
  ${alignContent}
  ${fontWeight}
  ${fontStyle}
  ${fontSize}
`

Item.defaultProps = {
  color: 'white',
}
