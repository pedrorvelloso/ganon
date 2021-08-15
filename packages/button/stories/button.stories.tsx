import React from 'react'
import { FiTwitch, FiMessageCircle } from 'react-icons/fi'

import { Button } from '../src'

export default {
  title: 'Button',
  component: Button,
}

export const basicUsage = () => (
  <>
    <Button>Button</Button>
    <Button colorScheme="secondary">Button</Button>
    <Button colorScheme="success">Button</Button>
    <Button colorScheme="warning">Button</Button>
    <Button colorScheme="danger">Button</Button>
  </>
)

export const disabled = () => (
  <>
    <Button disabled>Button</Button>
    <Button colorScheme="secondary" disabled>
      Button
    </Button>
    <Button colorScheme="success" disabled>
      Button
    </Button>
    <Button colorScheme="warning" disabled>
      Button
    </Button>
    <Button colorScheme="danger" disabled>
      Button
    </Button>
  </>
)

export const withIcon = () => (
  <>
    <Button rightIcon={<FiTwitch size={25} />}>Button</Button>
    <Button leftIcon={<FiMessageCircle />} colorScheme="secondary">
      Button
    </Button>
  </>
)
