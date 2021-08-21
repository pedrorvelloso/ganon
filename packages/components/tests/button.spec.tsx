import React from 'react'
import { FiActivity, FiTwitch } from 'react-icons/fi'
import { render, fireEvent } from '@ganon/test-utils'

import { Button } from '../src'

describe('components >> Button', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Button>Button</Button>)

    expect(getByText('Button')).toBeInTheDocument()
  })

  it('should fire onClick mock when clicked', () => {
    const onClickMock = jest.fn()

    const { getByText } = render(
      <Button onClick={onClickMock} size="md">
        Button
      </Button>,
    )

    fireEvent.click(getByText('Button'))

    expect(onClickMock).toHaveBeenCalled()
  })

  it('should not render text when loading', () => {
    const { queryByText } = render(
      <Button colorScheme="secondary" variant="ghost" isLoading>
        Button
      </Button>,
    )

    expect(queryByText('Button')).not.toBeInTheDocument()
  })

  it('should render with icons', () => {
    const { getByText } = render(
      <>
        <Button leftIcon={<FiActivity />} transformTextUppercase>
          Activity
        </Button>
        <Button rightIcon={<FiTwitch />}>Twitch</Button>
      </>,
    )

    expect(getByText('Activity')).toBeInTheDocument()
    expect(getByText('Twitch')).toBeInTheDocument()
  })
})
