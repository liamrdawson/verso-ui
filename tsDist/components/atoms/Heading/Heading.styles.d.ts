import { CSSObject, SerializedStyles } from '@emotion/react';
import { ITheme } from '../../../themes';
export declare const base: (theme?: ITheme) => SerializedStyles;
export declare const componentStyles: () => CSSObject;
export interface IHeadingElement {
    readonly fontWeight: number;
    readonly fontSize: string;
}
export interface IHeadingStyles {
    readonly h1: string;
    readonly h2: string;
    readonly h3: string;
    readonly h4: string;
}
export declare const headingStyles: CSSObject;
