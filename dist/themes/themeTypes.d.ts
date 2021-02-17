export interface ITheme {
    readonly colour: {
        primary: string;
        primaryHover: string;
        primaryActive: string;
        textOnPrimary: string;
        disabled: string;
        secondary: string;
        secondaryHover: string;
        secondaryActive: string;
        tertiary: string;
        tertiaryHover: string;
        tertiaryActive: string;
        accent: string;
        text: string;
        textInverted: string;
        formBackground: string;
    };
    readonly typography: {
        primaryFont: string;
        typeScale: ITypeScale;
        typeWeight: ITypeWeight;
    };
}
export interface ITypeScale {
    readonly heading1: string;
    readonly heading2: string;
    readonly heading3: string;
    readonly heading4: string;
    readonly large: string;
    readonly medium: string;
    readonly caption: string;
    readonly normal: string;
    readonly small: string;
}
export interface ITypeWeight {
    readonly light: number;
    readonly medium: number;
    readonly bold: number;
    readonly black: number;
}
