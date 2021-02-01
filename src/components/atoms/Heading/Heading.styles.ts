import { css } from '@emotion/react'
import { typeScale, defaultTheme, ITheme } from 'src/themes'

export const base = (theme: ITheme = defaultTheme) =>
  css({
    fontFamily: theme.typography.primaryFont,
    color: theme.colour.primary
  })

export const componentStyles = () => ({
  h1: {
    fontWeight: 900,
    fontSize: typeScale.heading1
  },
  h2: {
    fontWeight: 500,
    fontSize: typeScale.heading2
  },
  h3: {
    fontWeight: 800,
    fontSize: typeScale.heading3
  },
  h4: {
    fontWeight: 800,
    fontSize: typeScale.heading4
  }
})

export interface IHeadingStyles {
  readonly h1: string
  readonly h2: string
  readonly h3: string
  readonly h4: string
}

export const headingStyles = componentStyles()
