/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ElementType } from 'react'
import { headingStyles, base, IHeadingStyles } from './Heading.styles'

export type HeadingProps = {
  children: string
  element: any
}

export const Heading = ({ children, element }: HeadingProps) => {
  const Comp: ElementType = element
  const elementStyleSelector: keyof IHeadingStyles = element
  return (
    <Comp css={[base(), headingStyles[elementStyleSelector]]}>{children}</Comp>
  )
}

export default Heading
