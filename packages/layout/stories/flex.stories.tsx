import React from 'react'

import { Flex } from '../src'

export default {
  title: 'Design System/Layout/Flex',
  component: Flex,
}

export const basicUsage = () => (
  <Flex flexDirection="row" as="header" color="primary">
    <div>div 1</div>
    <div>div 2</div>
  </Flex>
)
