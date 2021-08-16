import { createGlobalStyle } from 'styled-components'

import { CssReset } from './CssReset'

export const GlobalStyles = createGlobalStyle`
    ${CssReset}

    * {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    body {
      font-size: 16px;
    }
`
