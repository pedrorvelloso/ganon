import React, { ReactElement } from 'react'

import { render as _render, RenderOptions } from '@testing-library/react'
import { axe, toHaveNoViolations, JestAxeConfigureOptions } from 'jest-axe'

import { ThemeProvider } from '@ganon/core'
import { theme } from '@ganon/theme'

expect.extend(toHaveNoViolations)

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

type RenderFunctionOptions = Omit<RenderOptions, 'wrapper'>

export const render = (ui: ReactElement, options?: RenderFunctionOptions) =>
  _render(ui, { wrapper: Providers, ...options })

type A11yOptions = RenderFunctionOptions & {
  axeOptions?: JestAxeConfigureOptions
}

export const a11y = async (
  ui: ReactElement,
  { axeOptions, ...options }: A11yOptions = {},
) => {
  const componentContainer = render(ui, options).container

  const assertA11y = await axe(componentContainer, axeOptions)

  expect(assertA11y).toHaveNoViolations()
}

export * from '@testing-library/react'
