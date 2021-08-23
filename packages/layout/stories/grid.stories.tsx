import React from 'react'

import { Grid, GridItem } from '../src'

export default {
  title: 'Design System/Layout/Grid',
  component: Grid,
}

export const basicUsage = () => (
  <Grid
    gridTemplateColumns="repeat(5, 1fr)"
    gridTemplateRows="repeat(3, 1fr)"
    gridGap={2}
    height="300px"
  >
    <GridItem gridArea="span 3 / span 1 / span 3 / span 1" bg="palevioletred" />
    <GridItem gridColumn="span 2 / span 2" bg="warning" />
    <GridItem gridColumn="span 2 / span 2" bg="warning" />
    <GridItem gridArea="span 2 / span 2 / span 2 / span 2 " bg="primary" />
    <GridItem gridColumn="span 2 / span 2" bg="palegreen" />
    <GridItem gridColumn="span 2 / span 2" bg="palegreen" />
  </Grid>
)
