import React, { ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'
import { GanonProvider } from '@ganon/hyrule'

const Providers: React.FC = ({ children }) => {
  return <GanonProvider>{children}</GanonProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
