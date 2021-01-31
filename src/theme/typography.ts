export const primaryFont = `'Lato', sans-serif`

export const typeScale = {
  heading1: `1.563rem`,
  heading2: `1.563rem`,
  heading3: `1.25rem`,
  heading4: `1rem`,
  large: `1.563rem`,
  medium: `1.25rem`,
  caption: `1.25rem`,
  normal: `1rem`,
  small: `0.8rem`
}

export interface ITypeScale {
  readonly heading1: string
  readonly heading2: string
  readonly heading3: string
  readonly heading4: string
  readonly large: string
  readonly medium: string
  readonly caption: string
  readonly normal: string
  readonly small: string
}

export const typeWeight = {
  light: 300,
  medium: 500,
  bold: 700,
  black: 900
}

export interface ITypeWeight {
  readonly light: number
  readonly medium: number
  readonly bold: number
  readonly black: number
}
