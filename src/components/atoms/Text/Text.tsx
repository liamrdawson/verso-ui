/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { ElementType } from 'react'
import {
  ITypeWeight,
  ITypeScale,
  ITheme,
  defaultTheme,
} from '@aperture-ui/theme'
import { textStyles } from './Text.styles'

export type TextProps = {
  fontWeight: keyof ITypeWeight
  fontSize: keyof ITypeScale
  element: ElementType
  children: string
  css?: SerializedStyles
  additionalStyles?: SerializedStyles
}

export const Text: React.FC<TextProps> = ({
  fontWeight,
  fontSize,
  element,
  css,
  additionalStyles,
  children,
}) => {
  // const theme: ITheme = useTheme()
  const theme: ITheme = defaultTheme
  const base = textStyles(theme)(fontWeight, fontSize)
  const Comp = element
  const styles = [css, base, additionalStyles]

  return <Comp css={styles}>{children}</Comp>
}

export default Text
