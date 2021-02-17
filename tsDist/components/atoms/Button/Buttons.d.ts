import { ITheme } from '../../../themes';
export declare type ButtonTypes = {
    label: string;
    isDisabled: boolean;
    theme?: ITheme;
};
export declare const PrimaryButton: React.FC<ButtonTypes>;
export declare const SecondaryButton: React.FC<ButtonTypes>;
export declare const TertiaryButton: React.FC<ButtonTypes>;
