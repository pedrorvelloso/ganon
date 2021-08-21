import React from 'react'
import { FiTwitch, FiMessageCircle } from 'react-icons/fi'

import { VStack } from '@ganon/layout'

import { Button } from '../src'

export default {
  title: 'Button',
  component: Button,
}

export const basicUsage = () => (
  <VStack>
    <Button>Button</Button>
    <Button colorScheme="primary">Button</Button>
    <Button colorScheme="secondary">Button</Button>
    <Button colorScheme="success">Button</Button>
    <Button colorScheme="warning">Button</Button>
    <Button colorScheme="danger">Button</Button>
  </VStack>
)

export const sizes = () => (
  <VStack>
    <Button size="sm">Button</Button>
    <Button colorScheme="secondary" size="md">
      Button
    </Button>
    <Button colorScheme="success" size="lg">
      Button
    </Button>
  </VStack>
)

export const disabled = () => (
  <VStack>
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
  </VStack>
)

export const withIcon = () => (
  <VStack>
    <Button rightIcon={<FiTwitch size={20} />}>Button</Button>
    <Button leftIcon={<FiMessageCircle />} colorScheme="secondary">
      Button
    </Button>
  </VStack>
)

export const loading = () => <Button isLoading>Button</Button>

export const variants = () => (
  <VStack>
    <Button variant="outline">Button</Button>
    <Button variant="ghost">Button</Button>
  </VStack>
)
