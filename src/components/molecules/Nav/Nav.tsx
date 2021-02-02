/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import Link from 'next/link'
import { Text } from '@aperture-ui/components'
import { ITheme, defaultTheme } from '@aperture-ui/theme'
import { baseNav, baseUl, baseLink, dynamicStyle } from './Nav.styles'

export interface NavProps {
  pages: Array<PageObject>
}

export interface PageObject {
  pathName: string
  pageName: string
}

export const Nav = (props: NavProps) => {
  const { pages } = props
  // const theme: ITheme = useTheme()
  const theme: ITheme = defaultTheme
  return (
    <nav css={baseNav}>
      <ul css={baseUl(theme)}>
        {pages.map((page: PageObject) => (
          <li key={pages.indexOf(page)}>
            <Link css={baseLink} href={page.pathName}>
              <span css={baseLink}>
                <Text
                  additionalStyles={dynamicStyle(defaultTheme)}
                  element="a"
                  fontWeight="light"
                  fontSize="medium"
                >
                  {page.pageName}
                </Text>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
