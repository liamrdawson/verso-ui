import { css } from '@emotion/react'

export const FormStyle = () =>
  css({
    minWidth: '700px',
    display: 'grid',
    gridGap: '25px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 3fr 1fr'
  })

export const FormFirstNameStyle = () =>
  css({
    gridColumn: '1 / 2'
  })

export const FormLastNameStyle = () =>
  css({
    gridColumn: '2 / 2'
  })

export const FormEmailStyle = () =>
  css({
    gridColumn: '1 / 3'
  })

export const FormSubjectStyle = () =>
  css({
    gridRow: '3 / 4',
    gridColumn: '1 / 3'
  })

export const FormMessageStyle = () =>
  css({
    gridColumn: '1 / 3'
  })
