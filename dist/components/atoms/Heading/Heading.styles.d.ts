import { CSSObject, SerializedStyles } from '@emotion/react';
import { ITheme } from '@aperture-ui/theme';
export declare const base: (theme?: ITheme) => SerializedStyles;
export declare const componentStyles: () => CSSObject;
export interface IHeadingElement {
    readonly fontWeight: number;
    readonly fontSize: string;
}
export interface IHeadingStyles {
    readonly h1: IHeadingElement;
    readonly h2: IHeadingElement;
    readonly h3: IHeadingElement;
    readonly h4: IHeadingElement;
}
export declare const headingStyles: CSSObject;
