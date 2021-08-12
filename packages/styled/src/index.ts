import _styled, { ThemedStyledInterface } from 'styled-components'
import { Theme } from '@ganon/theme'

export const styled = _styled as ThemedStyledInterface<Theme>

export * from './ThemeProvider'
export default styled
