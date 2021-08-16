import { variant } from 'styled-system'

export const spinnerSizeVariant = () =>
  variant({
    prop: 'size',
    variants: {
      sm: {
        height: '16px',
        width: '16px',
      },
      md: {
        height: '22px',
        width: '22px',
      },
      lg: {
        height: '26px',
        width: '26px',
      },
    },
  })
