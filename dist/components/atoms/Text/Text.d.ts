/** @jsxRuntime classic */
/** @jsx jsx */
import { SerializedStyles } from '@emotion/react';
import { ElementType } from 'react';
import { ITypeWeight, ITypeScale } from '@aperture-ui/theme';
export declare type TextProps = {
    fontWeight: keyof ITypeWeight;
    fontSize: keyof ITypeScale;
    element: ElementType;
    children: string;
    css?: SerializedStyles;
    additionalStyles?: SerializedStyles;
};
export declare const Text: React.FC<TextProps>;
export default Text;
