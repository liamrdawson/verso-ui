import { css, SerializedStyles } from '@emotion/react'
import { ITheme, ITypeScale, ITypeWeight, defaultTheme } from 'src/themes'

/**
 * TIP: Using a generic string as an index, TypeScript will complain that it can't guarantee that whatever string is passed into your function will actually match a property name on your interface.
 *      An excellent workaround for this that was introduced in TypeScript 2.1 is keyof. This allows you to explicitly type something as a key of a certain class/interface.
 */

export const textStyles = (theme: ITheme = defaultTheme) => (
  fontWeight: keyof ITypeWeight = 'light',
  fontSize: keyof ITypeScale = 'small',
): SerializedStyles =>
  css({
    fontFamily: theme.typography.primaryFont,
    color: theme.colour.primary,
    fontWeight: theme.typography.typeWeight[fontWeight],
    fontSize: theme.typography.typeScale[fontSize],
  })

export default textStyles
