import React from 'react'
import { render, fireEvent } from '@ganon/test-utils'

import { Button } from '../src'

describe('components >> Button', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<Button>Button</Button>)

    expect(getByText('Button')).toBeInTheDocument()
  })

  it('should fire onClick mock when clicked', () => {
    const onClickMock = jest.fn()

    const { getByText } = render(<Button onClick={onClickMock}>Button</Button>)

    fireEvent.click(getByText('Button'))

    expect(onClickMock).toHaveBeenCalled()
  })
})
