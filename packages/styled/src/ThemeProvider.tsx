import React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

import { theme } from '@ganon/theme'

export const ThemeProvider: React.FC = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
)
