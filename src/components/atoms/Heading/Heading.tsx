/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react'
import { headingStyles, base, IHeadingStyles } from './Heading.styles'

export type HeadingProps = {
  children: string
  element: any // TODO: replace 'any' with usable type value. We need to be able to receive this and use it as an object key AND an element.
  css?: SerializedStyles
}

export const Heading = ({ children, element }: HeadingProps) => {
  const Comp = element
  const elementStyleSelector: keyof IHeadingStyles = element
  return (
    <Comp css={[base(), headingStyles[elementStyleSelector]]}>{children}</Comp>
  )
}

export default Heading
