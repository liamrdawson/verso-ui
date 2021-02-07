import { SerializedStyles } from '@emotion/react';
export declare type FormTypes = {
    label: string;
    type: string;
    additionalStyles?: SerializedStyles;
};
export declare const TextInput: React.FC<FormTypes>;
export declare const TextArea: React.FC<FormTypes>;
