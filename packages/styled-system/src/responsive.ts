export interface ResponsiveObject<T> {
  _?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

// TODO add suport for ResponsiveObject
export type ResponsiveToken<Value> = Value | Value[]
