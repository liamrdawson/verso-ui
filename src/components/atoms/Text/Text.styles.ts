import { css } from '@emotion/react'
import {
  ITheme,
  typeScale,
  ITypeScale,
  typeWeight,
  ITypeWeight,
  defaultTheme
} from 'src/theme'

/**
 * TIP: Using a generic string as an index, TypeScript will complain that it can't guarantee that whatever string is passed into your function will actually match a property name on your interface.
 *      An excellent workaround for this that was introduced in TypeScript 2.1 is keyof. This allows you to explicitly type something as a key of a certain class/interface.
 */

export const textStyles = (theme: ITheme = defaultTheme) => (
  weight: keyof ITypeWeight = 'light',
  size: keyof ITypeScale = 'normal'
) =>
  css({
    fontFamily: theme.primaryFont,
    color: theme.colour.primary,
    fontWeight: typeWeight[weight],
    fontSize: typeScale[size]
  })

export default textStyles
