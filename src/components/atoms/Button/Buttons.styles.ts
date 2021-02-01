import { css } from '@emotion/react'
import { ITheme, typeScale, SPACING, defaultTheme } from 'src/themes'

export const base = css({
  boxSizing: 'border-box',
  padding: `${SPACING[5]}px ${SPACING[6]}px`,
  borderRadius: 2,
  minWidth: 100,
  maxWidth: 300,
  cursor: 'pointer',
  fontWeight: 900,
  fontSize: typeScale.normal,
  transition: 'background-color 0.2s linear, color 0.2s linear'
})

export const primary = (theme: ITheme = defaultTheme, isDisabled: boolean) =>
  css(
    {
      textTransform: 'uppercase',
      backgroundColor: isDisabled ? 'red' : theme.colour.primary,
      color: theme.colour.textOnPrimary,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.colour.primaryHover
      },
      '&:active': {
        backgroundColor: theme.colour.primaryActive
      },
      '&:disabled': {
        backgroundColor: theme.colour.disabled,
        cursor: 'not-allowed'
      }
    },
    base
  )

export const secondary = (theme: ITheme = defaultTheme) =>
  css(
    {
      backgroundColor: theme.colour.secondary,
      color: theme.colour.primary,
      border: `solid 1px ${theme.colour.primary}`,
      textTransform: 'uppercase',
      '&:hover': {
        borderColor: theme.colour.primaryHover,
        color: theme.colour.primaryHover
      },
      '&:active': {
        borderColor: theme.colour.secondaryActive,
        color: theme.colour.secondaryActive
      },
      '&:disabled': {
        backgroundColor: theme.colour.disabled,
        colour: theme.colour.disabled,
        cursor: 'not-allowed'
      }
    },
    base
  )

export const tertiary = (theme: ITheme = defaultTheme) =>
  css(
    {
      backgroundColor: theme.colour.secondary,
      color: theme.colour.tertiary,
      border: 'none',
      textTransform: 'uppercase',
      '&:hover': {
        textDecoration: 'underline',
        color: theme.colour.tertiaryHover
      },
      '&:active': {
        borderColor: theme.colour.tertiaryActive,
        color: theme.colour.tertiaryActive
      },
      '&:disabled': {
        backgroundColor: theme.colour.disabled,
        colour: theme.colour.disabled,
        cursor: 'not-allowed'
      }
    },
    base
  )
