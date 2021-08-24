import { css } from '@ganon/styled'
import * as CSS from 'csstype'

import { resolveScale } from './base'
import { ResponsiveToken } from './responsive'

const margins = {
  top: 'margin-top',
  bottom: 'margin-bottom',
  left: 'margin-left',
  right: 'margin-right',
  default: 'margin',
}

const marginScale = [
  '0',
  '4px',
  '8px',
  '12px',
  '16px',
  '22px',
  '28px',
  '32px',
  '38px',
  '42px',
]

type MarginAliases = keyof typeof aliases

const aliases = {
  m: margins.default,
  mt: margins.top,
  mb: margins.bottom,
  mr: margins.right,
  ml: margins.left,
  margin: margins.default,
  marginTop: margins.top,
  marginBottom: margins.bottom,
  marginRight: margins.right,
  marginLeft: margins.left,
}

export type MarginProps = {
  [key in MarginAliases]?: ResponsiveToken<CSS.Property.Margin | number>
}

const resolveMargins = (
  value: ResponsiveToken<CSS.Property.Margin | number>,
  whichMargin: string,
) => resolveScale(value, aliases[whichMargin], marginScale)

export const margin = ({
  m,
  margin: mrg,
  mt,
  marginTop,
  mb,
  marginBottom,
  mr,
  marginRight,
  ml,
  marginLeft,
}: MarginProps) => css`
  ${(m && resolveMargins(m, 'm')) || (mrg && resolveMargins(mrg, 'm'))};
  ${(mt && resolveMargins(mt, 'mt')) ||
  (marginTop && resolveMargins(marginTop, 'mt'))};
  ${(mb && resolveMargins(mb, 'mb')) ||
  (marginBottom && resolveMargins(marginBottom, 'mb'))};
  ${(mr && resolveMargins(mr, 'mr')) ||
  (marginRight && resolveMargins(marginRight, 'mr'))};
  ${(ml && resolveMargins(ml, 'ml')) ||
  (marginLeft && resolveMargins(marginLeft, 'ml'))};
`
