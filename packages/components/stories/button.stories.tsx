import React from 'react'
import { FiTwitch, FiMessageCircle } from 'react-icons/fi'

import { Stack } from '@ganon/layout'

import { Button } from '../src'

export default {
  title: 'Button > Component',
  component: Button,
}

export const basicUsage = () => (
  <>
    <Button>Button</Button>
    <Button colorScheme="primary">Button</Button>
    <Button colorScheme="secondary">Button</Button>
    <Button colorScheme="success">Button</Button>
    <Button colorScheme="warning">Button</Button>
    <Button colorScheme="danger">Button</Button>
  </>
)

export const sizes = () => (
  <Stack direction="column">
    <Button size="sm">Button</Button>
    <Button colorScheme="secondary" size="md">
      Button
    </Button>
    <Button colorScheme="success" size="lg">
      Button
    </Button>
  </Stack>
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
    <Button rightIcon={<FiTwitch size={20} />}>Button</Button>
    <Button leftIcon={<FiMessageCircle />} colorScheme="secondary">
      Button
    </Button>
  </>
)

export const loading = () => <Button isLoading>Button</Button>

export const variants = () => (
  <>
    <Button variant="outline">Button</Button>
    <Button variant="ghost">Button</Button>
  </>
)
