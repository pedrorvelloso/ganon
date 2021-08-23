import styled, { ColorProps } from '@ganon/styled'

import {
  GridProps,
  grid,
  GridAreaProps,
  gridArea,
  GridColumnProps,
  gridColumn,
  color,
  height,
  HeightProps,
} from 'styled-system'

export type GridBaseProps = GridProps & ColorProps & HeightProps

export const Grid = styled.div<GridBaseProps>`
  display: grid;
  ${grid}
  ${color}
  ${height}
`

export type GridItemProps = GridAreaProps & GridColumnProps & ColorProps

export const GridItem = styled.div<GridItemProps>`
  ${gridArea}
  ${gridColumn}
  ${color}
`
