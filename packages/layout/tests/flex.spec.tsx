import React from 'react'
import { a11y } from '@ganon/test-utils'
import { Flex } from '../src'

describe('layout >> Flex', () => {
  it('should pass a11y test', async () => {
    await a11y(
      <Flex flexDirection="column" as="header" mt="4" color="primary">
        <div>div1</div>
      </Flex>,
    )
  })
})
