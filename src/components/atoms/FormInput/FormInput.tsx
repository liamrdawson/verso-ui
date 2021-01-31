/** @jsxRuntime classic */
/** @jsx jsx */
import { ITheme } from 'src/theme'
import { jsx, SerializedStyles, useTheme } from '@emotion/react'
import { labelAndForm, labelStyle, input } from './FormInput.styles'

export type FormTypes = {
  label: string
  type: string
  additionalStyles?: SerializedStyles
}

export const TextInput = ({ label, type, additionalStyles }: FormTypes) => {
  const theme: ITheme = useTheme()
  const styling = [additionalStyles, labelAndForm(theme)]
  return (
    <div css={styling}>
      <label css={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input css={input} type={type} id={label} name={label} />
    </div>
  )
}

export const TextArea = ({ label, additionalStyles }: FormTypes) => {
  const theme: ITheme = useTheme()
  const styling = [additionalStyles, labelAndForm(theme)]
  return (
    <div css={styling}>
      <label css={labelStyle} htmlFor={label}>
        {label}
      </label>
      <textarea css={input} id={label} name={label} />
    </div>
  )
}
