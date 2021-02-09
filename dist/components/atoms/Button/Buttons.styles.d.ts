import { SerializedStyles } from '@emotion/react';
import { ITheme } from 'src/themes';
export declare const base: SerializedStyles;
export declare const primary: (theme: ITheme | undefined, isDisabled: boolean) => SerializedStyles;
export declare const secondary: (theme?: ITheme) => SerializedStyles;
export declare const tertiary: (theme?: ITheme) => SerializedStyles;
