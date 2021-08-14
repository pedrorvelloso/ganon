import _styled, {
  ThemedStyledInterface,
  css as _css,
  ThemedCssFunction,
} from 'styled-components'
import { Theme } from '@ganon/theme'

export const styled = _styled as ThemedStyledInterface<Theme>
export const css = _css as ThemedCssFunction<Theme>

export * from './ThemeProvider'
export * from './GlobalStyles'

export default styled
