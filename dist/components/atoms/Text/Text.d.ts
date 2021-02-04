/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/react';
import { ITypeWeight, ITypeScale } from 'src/themes';
export declare type TextProps = {
    fontWeight: keyof ITypeWeight;
    fontSize: keyof ITypeScale;
    element: any;
    children: string;
    css?: any;
    additionalStyles?: SerializedStyles;
};
export declare const Text: ({ fontWeight, fontSize, element, css, additionalStyles, children }: TextProps) => jsx.JSX.Element;
export default Text;
