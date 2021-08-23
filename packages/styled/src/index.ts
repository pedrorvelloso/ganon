import _styled, {
  ThemedStyledInterface,
  css as _css,
  keyframes as _keyframes,
  ThemedCssFunction,
} from 'styled-components'
import { Theme } from '@ganon/theme'

export const styled = _styled as ThemedStyledInterface<Theme>
export const css = _css as ThemedCssFunction<Theme>
export const keyframes = _keyframes

export * from './ThemeProvider'
export * from './GlobalStyles'

export * from './System.type'

export default styled
