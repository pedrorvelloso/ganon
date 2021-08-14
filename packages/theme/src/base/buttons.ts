import { SystemVariants } from '../interfaces'
import { ColorsType } from './colors.type'

export type ButtonVariantStyle = {
  [key in SystemVariants]: {
    backgroundColor: ColorsType
    borderColor: ColorsType
    textColor: ColorsType
    hover: {
      backgroundColor: ColorsType
      color: ColorsType
    }
  }
}

export type ButtonsVariant = keyof typeof buttons

export const buttons: ButtonVariantStyle = {
  primary: {
    backgroundColor: 'primary',
    borderColor: 'primary',
    textColor: 'white',
    hover: {
      backgroundColor: 'primary',
      color: 'white',
    },
  },
  secondary: {
    backgroundColor: 'secondary',
    borderColor: 'secondary',
    textColor: 'white',
    hover: {
      backgroundColor: 'secondary',
      color: 'white',
    },
  },
  success: {
    backgroundColor: 'success',
    borderColor: 'success',
    textColor: 'white',
    hover: {
      backgroundColor: 'success',
      color: 'white',
    },
  },
  danger: {
    backgroundColor: 'danger',
    borderColor: 'danger',
    textColor: 'white',
    hover: {
      backgroundColor: 'danger',
      color: 'white',
    },
  },
  warning: {
    backgroundColor: 'warning',
    borderColor: 'warning',
    textColor: 'white',
    hover: {
      backgroundColor: 'warning',
      color: 'black',
    },
  },
}
