import { css } from '@emotion/react'
import { typeScale, typeWeight, SPACING, ITheme } from 'src/theme'

export const labelAndForm = (theme: ITheme) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.primaryFont
  })

export const input = (theme: ITheme) =>
  css({
    fontFamily: theme.primaryFont,
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
