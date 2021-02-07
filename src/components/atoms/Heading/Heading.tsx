/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { headingStyles, base } from './Heading.styles'

export type HeadingProps = {
  children: string
  element: React.ElementType
  css?: SerializedStyles
}

export const Heading: React.FC<HeadingProps> = ({ children, element }) => {
  const Comp = element
  return <Comp css={[base(), headingStyles]}>{children}</Comp>
}

export default Heading
