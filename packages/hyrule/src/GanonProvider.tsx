import React from 'react'
import { ThemeProvider } from '@ganon/styled'

export const GanonProvider: React.FC = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
