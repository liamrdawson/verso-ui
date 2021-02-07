import { css, CSSObject, SerializedStyles } from '@emotion/react'
import { typeScale, defaultTheme, ITheme } from '@aperture-ui/theme'

export const base = (theme: ITheme = defaultTheme): SerializedStyles =>
  css({
    fontFamily: theme.typography.primaryFont,
    color: theme.colour.primary,
  })

export const componentStyles = (): CSSObject => ({
  h1: {
    fontWeight: 900,
    fontSize: typeScale.heading1,
  },
  h2: {
    fontWeight: 500,
    fontSize: typeScale.heading2,
  },
  h3: {
    fontWeight: 800,
    fontSize: typeScale.heading3,
  },
  h4: {
    fontWeight: 800,
    fontSize: typeScale.heading4,
  },
})

export interface IHeadingElement {
  readonly fontWeight: number
  readonly fontSize: string
}
export interface IHeadingStyles {
  readonly h1: string
  readonly h2: string
  readonly h3: string
  readonly h4: string
}

export const headingStyles = componentStyles()
