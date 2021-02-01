import { css } from '@emotion/react'
import {
  typeScale,
  typeWeight,
  SPACING,
  ITheme,
  defaultTheme
} from 'src/themes'

export const labelAndForm = (theme: ITheme = defaultTheme) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.primaryFont
  })

export const input = (theme: ITheme = defaultTheme) =>
  css({
    fontFamily: theme.typography.primaryFont,
    boxSizing: 'border-box',
    borderRadius: 2,
    borderWidth: SPACING[1],
    padding: SPACING[4],
    fontSize: typeScale.normal,
    backgroundColor: theme.colour.formBackground,
    borderColor: theme.colour.primary,
    height: '100%',
    '&:invalid': {
      outline: 'none',
      boxShadow: `0 0 0 4px ${theme.colour.tertiary}`
    }
  })

export const labelStyle = () =>
  css({
    textAlign: 'left',
    fontSize: typeScale.small,
    fontWeight: typeWeight.light,
    marginBottom: SPACING[3]
  })
