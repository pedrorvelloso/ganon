import { SystemVariants } from '../interfaces'

export type ButtonVariantStyles = {
  bg: string
  borderColor: string
  color: string
  ':hover:enabled': {
    bg: string
    color?: string
  }
}

export type ButtonsVariant = SystemVariants
