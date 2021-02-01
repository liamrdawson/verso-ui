/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles, useTheme } from '@emotion/react'
import { ElementType } from 'react'
import { ITypeWeight, ITypeScale, ITheme, defaultTheme } from 'src/theme'
import { textStyles } from './Text.styles'

export type TextProps = {
  fontWeight: keyof ITypeWeight
  fontSize: keyof ITypeScale
  element: any
  children: string
  css?: any
  additionalStyles?: SerializedStyles
}

export const Text = ({
  fontWeight,
  fontSize,
  element,
  css,
  additionalStyles,
  children
}: TextProps) => {
  // const theme: ITheme = useTheme()
  const theme: ITheme = defaultTheme
  const base = textStyles(theme)(fontWeight, fontSize)
  const Comp: ElementType = element
  const styles = [css, base, additionalStyles]

  return <Comp css={styles}>{children}</Comp>
}

export default Text
