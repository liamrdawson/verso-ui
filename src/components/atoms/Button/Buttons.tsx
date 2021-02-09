/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ITheme } from '../../../themes'
import { primary, secondary, tertiary } from './Buttons.styles'

export type ButtonTypes = {
  label: string
  isDisabled: boolean
  theme?: ITheme
}

export const PrimaryButton: React.FC<ButtonTypes> = (props) => {
  const { label, isDisabled, theme } = props

  return (
    <button type="button" css={primary(theme, isDisabled)}>
      {label}
    </button>
  )
}

export const SecondaryButton: React.FC<ButtonTypes> = (props) => {
  const { label, theme } = props

  return (
    <button type="button" css={secondary(theme)}>
      {label}
    </button>
  )
}

export const TertiaryButton: React.FC<ButtonTypes> = (props) => {
  const { label, theme } = props

  return (
    <button type="button" css={tertiary(theme)}>
      {label}
    </button>
  )
}
