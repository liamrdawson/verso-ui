/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
export declare type ButtonTypes = {
    label: string;
    isDisabled: boolean;
};
export declare const PrimaryButton: (props: ButtonTypes) => jsx.JSX.Element;
export declare const SecondaryButton: (props: ButtonTypes) => jsx.JSX.Element;
export declare const TertiaryButton: (props: ButtonTypes) => jsx.JSX.Element;
