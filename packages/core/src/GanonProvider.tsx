import React from 'react'
import { ThemeProvider, GlobalStyles } from '@ganon/styled'

export const GanonProvider: React.FC = ({ children }) => (
  <ThemeProvider>
    {children}
    <GlobalStyles />
  </ThemeProvider>
)
