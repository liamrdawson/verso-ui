import { BLACK, NEUTRAL, RED, BLUE } from './colours'
import { primaryFont } from './typography'

export interface ITheme {
  readonly colour: {
    primary: string
    primaryHover: string
    primaryActive: string
    textOnPrimary: string

    disabled: string

    secondary: string
    secondaryHover: string
    secondaryActive: string

    tertiary: string
    tertiaryHover: string
    tertiaryActive: string

    accent: string

    text: string
    textInverted: string

    formBackground: string
  }
  primaryFont: string
}

export const defaultTheme: ITheme = {
  colour: {
    primary: BLACK[500],
    primaryHover: BLACK[400],
    primaryActive: BLACK[300],
    textOnPrimary: NEUTRAL[100],

    disabled: NEUTRAL[400],

    secondary: NEUTRAL[100],
    secondaryHover: NEUTRAL[200],
    secondaryActive: BLACK[300],

    tertiary: RED[200],
    tertiaryHover: RED[200],
    tertiaryActive: BLACK[300],

    accent: BLUE[200],

    text: BLACK[500],
    textInverted: NEUTRAL[100],

    formBackground: NEUTRAL[200]
  },
  primaryFont
}

export const darkTheme: ITheme = {
  colour: {
    primary: NEUTRAL[100],
    primaryHover: BLACK[400],
    primaryActive: BLACK[300],
    textOnPrimary: BLACK[500],

    disabled: NEUTRAL[400],

    secondary: BLACK[500],
    secondaryHover: NEUTRAL[200],
    secondaryActive: BLACK[300],

    tertiary: RED[200],
    tertiaryHover: RED[200],
    tertiaryActive: BLACK[300],

    accent: BLUE[200],

    text: NEUTRAL[100],
    textInverted: BLACK[500],

    formBackground: NEUTRAL[200]
  },
  primaryFont
}
