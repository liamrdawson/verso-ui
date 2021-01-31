import { css } from '@emotion/react'
import { SPACING, LAYOUT, ITheme } from 'src/theme'

export const baseNav = () =>
  css({
    display: 'flex',
    height: '100%'
  })

export const baseUl = (theme: ITheme) =>
  css({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    '@media(min-width: 420px)': {
      flexDirection: 'row',
      margin: 0
    },
    li: {
      marginTop: `${LAYOUT[7]}px`,
      '@media(min-width: 420px)': {
        margin: `0 ${SPACING[8]}px`
      }
    },
    'li span a': {
      color: theme.colour.primary,
      '&:hover': {
        color: theme.colour.tertiary
      }
    }
  })

export const baseLink = () =>
  css({
    textDecoration: 'none',
    cursor: 'pointer'
  })

export const dynamicStyle = (theme: ITheme) =>
  css({
    color: theme.colour.tertiary
  })
