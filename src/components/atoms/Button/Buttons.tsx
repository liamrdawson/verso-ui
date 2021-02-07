/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { defaultTheme } from '@aperture-ui/theme'
import { primary, secondary, tertiary } from './Buttons.styles'

export type ButtonTypes = {
  label: string
  isDisabled: boolean
}

export const PrimaryButton: React.FC<ButtonTypes> = (props) => {
  const { label, isDisabled } = props
  const theme = defaultTheme
  return (
    <button type="button" css={primary(theme, isDisabled)}>
      {label}
    </button>
  )
}

export const SecondaryButton: React.FC<ButtonTypes> = (props) => {
  const { label } = props
  return (
    <button type="button" css={secondary(defaultTheme)}>
      {label}
    </button>
  )
}

export const TertiaryButton: React.FC<ButtonTypes> = (props) => {
  const { label } = props
  return (
    <button type="button" css={tertiary(defaultTheme)}>
      {label}
    </button>
  )
}
