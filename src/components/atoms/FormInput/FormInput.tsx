/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { ITheme, defaultTheme } from '../../../themes'
import { labelAndForm, labelStyle, input } from './FormInput.styles'

export type FormTypes = {
  label: string
  type?: string
  additionalStyles?: SerializedStyles
}

export const TextInput: React.FC<FormTypes> = ({
  label,
  type,
  additionalStyles,
}) => {
  const theme: ITheme = defaultTheme
  const styling = [additionalStyles, labelAndForm(theme)]
  return (
    <div css={styling}>
      <label css={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input css={input(defaultTheme)} type={type} id={label} name={label} />
    </div>
  )
}

export const TextArea: React.FC<FormTypes> = ({ label, additionalStyles }) => {
  const theme: ITheme = defaultTheme
  const styling = [additionalStyles, labelAndForm(theme)]
  return (
    <div css={styling}>
      <label css={labelStyle} htmlFor={label}>
        {label}
      </label>
      <textarea css={input(defaultTheme)} id={label} name={label} />
    </div>
  )
}
