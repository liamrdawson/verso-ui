import { css, SerializedStyles } from '@emotion/react'

export const FormStyle = (): SerializedStyles =>
  css({
    minWidth: '700px',
    display: 'grid',
    gridGap: '25px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 3fr 1fr',
  })

export const FormFirstNameStyle = (): SerializedStyles =>
  css({
    gridColumn: '1 / 2',
  })

export const FormLastNameStyle = (): SerializedStyles =>
  css({
    gridColumn: '2 / 2',
  })

export const FormEmailStyle = (): SerializedStyles =>
  css({
    gridColumn: '1 / 3',
  })

export const FormSubjectStyle = (): SerializedStyles =>
  css({
    gridRow: '3 / 4',
    gridColumn: '1 / 3',
  })

export const FormMessageStyle = (): SerializedStyles =>
  css({
    gridColumn: '1 / 3',
  })
