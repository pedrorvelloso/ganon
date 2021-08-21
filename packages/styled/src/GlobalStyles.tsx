import { createGlobalStyle } from 'styled-components'
import { DefaultGanonTheme } from '@ganon/theme'

import { CssReset } from './CssReset'

export const GlobalStyles = createGlobalStyle<DefaultGanonTheme>`
    ${CssReset}

    * {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    body {
      font-size: 16px;
      background: ${({ theme }) => theme.colors.background};
    }
`
