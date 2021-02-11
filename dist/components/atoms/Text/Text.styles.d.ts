import { SerializedStyles } from '@emotion/react';
import { ITheme, ITypeScale, ITypeWeight } from '../../../themes';
/**
 * TIP: Using a generic string as an index, TypeScript will complain that it can't guarantee that whatever string is passed into your function will actually match a property name on your interface.
 *      An excellent workaround for this that was introduced in TypeScript 2.1 is keyof. This allows you to explicitly type something as a key of a certain class/interface.
 */
export declare const textStyles: (theme?: ITheme) => (fontWeight?: keyof ITypeWeight, fontSize?: keyof ITypeScale) => SerializedStyles;
export default textStyles;
