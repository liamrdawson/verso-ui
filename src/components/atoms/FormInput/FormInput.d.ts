import { jsx, SerializedStyles } from '@emotion/react';
export declare type FormTypes = {
    label: string;
    type: string;
    additionalStyles?: SerializedStyles;
};
export declare const TextInput: ({ label, type, additionalStyles }: FormTypes) => jsx.JSX.Element;
export declare const TextArea: ({ label, additionalStyles }: FormTypes) => jsx.JSX.Element;
