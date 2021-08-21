import React from 'react'
import { ThemeProvider, GlobalStyles } from '@ganon/styled'
import { Theme, theme as defaultTheme } from '@ganon/theme'

interface GanonProviderProps {
  theme?: Theme
}

export const GanonProvider: React.FC<GanonProviderProps> = ({
  children,
  theme = defaultTheme,
}) => (
  <ThemeProvider theme={theme}>
    {children}
    <GlobalStyles />
  </ThemeProvider>
)
