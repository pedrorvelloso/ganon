import styled, { keyframes } from '@ganon/styled'
import { spinnerSizeVariant } from './variants'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

type SpinnerBaseProps = {
  size?: 'sm' | 'md' | 'lg'
}

export const Spinner = styled.div<SpinnerBaseProps>`
  ${spinnerSizeVariant}

  display: inline-block;

  border-style: solid;
  border-width: 3px;
  border-color: white;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 99999px;

  animation: ${spin} 1.2s cubic-bezier(1, 0.14, 0.25, 0.87) infinite;
`

Spinner.defaultProps = {
  size: 'md',
}
