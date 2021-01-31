/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react'
import { primary, secondary, tertiary } from './Buttons.styles'

export type ButtonTypes = {
  label: string
  isDisabled: boolean
}

export const PrimaryButton = (props: ButtonTypes) => {
  const { label, isDisabled } = props
  const theme = useTheme()
  return (
    <button type="button" css={primary(theme, isDisabled)}>
      {label}
    </button>
  )
}

export const SecondaryButton = (props: ButtonTypes) => {
  const { label } = props
  return (
    <button type="button" css={secondary}>
      {label}
    </button>
  )
}

export const TertiaryButton = (props: ButtonTypes) => {
  const { label } = props
  return (
    <button type="button" css={tertiary}>
      {label}
    </button>
  )
}
