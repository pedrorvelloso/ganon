import React from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'

import { Theme } from '@ganon/theme'

interface ThemeProviderProps {
  theme?: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => <StyledProvider theme={theme}>{children}</StyledProvider>
