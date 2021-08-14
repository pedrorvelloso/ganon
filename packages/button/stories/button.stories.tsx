import React from 'react'
import { Button } from '../src'

export default {
  title: 'Button',
  component: Button,
}

export const basicUsage = () => (
  <>
    <Button transformTextUppercase>Button</Button>
    <Button variant="secondary" mt="4">
      Button
    </Button>
    <Button variant="success" mt="4">
      Button
    </Button>
    <Button variant="warning" mt="4">
      Button
    </Button>
    <Button variant="danger" mt="4">
      Button
    </Button>
  </>
)

export const disabled = () => (
  <>
    <Button transformTextUppercase disabled>
      Button
    </Button>
    <Button variant="secondary" disabled mt="4">
      Button
    </Button>
    <Button variant="success" disabled mt="4">
      Button
    </Button>
    <Button variant="warning" disabled mt="4">
      Button
    </Button>
    <Button variant="danger" disabled mt="4">
      Button
    </Button>
  </>
)
