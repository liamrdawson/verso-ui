"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.defaultTheme = void 0;
const colours_1 = require("./colours");
const typography_1 = require("./typography");
exports.defaultTheme = {
    colour: {
        primary: colours_1.BLACK[500],
        primaryHover: colours_1.BLACK[400],
        primaryActive: colours_1.BLACK[300],
        textOnPrimary: colours_1.NEUTRAL[100],
        disabled: colours_1.NEUTRAL[400],
        secondary: colours_1.NEUTRAL[100],
        secondaryHover: colours_1.NEUTRAL[200],
        secondaryActive: colours_1.BLACK[300],
        tertiary: colours_1.RED[200],
        tertiaryHover: colours_1.RED[200],
        tertiaryActive: colours_1.BLACK[300],
        accent: colours_1.BLUE[200],
        text: colours_1.BLACK[500],
        textInverted: colours_1.NEUTRAL[100],
        formBackground: colours_1.NEUTRAL[200]
    },
    typography: {
        primaryFont: typography_1.primaryFont,
        typeScale: typography_1.typeScale,
        typeWeight: typography_1.typeWeight
    }
};
exports.darkTheme = {
    colour: {
        primary: colours_1.NEUTRAL[100],
        primaryHover: colours_1.BLACK[400],
        primaryActive: colours_1.BLACK[300],
        textOnPrimary: colours_1.BLACK[500],
        disabled: colours_1.NEUTRAL[400],
        secondary: colours_1.BLACK[500],
        secondaryHover: colours_1.NEUTRAL[200],
        secondaryActive: colours_1.BLACK[300],
        tertiary: colours_1.RED[200],
        tertiaryHover: colours_1.RED[200],
        tertiaryActive: colours_1.BLACK[300],
        accent: colours_1.BLUE[200],
        text: colours_1.NEUTRAL[100],
        textInverted: colours_1.BLACK[500],
        formBackground: colours_1.NEUTRAL[200]
    },
    typography: {
        primaryFont: typography_1.primaryFont,
        typeScale: typography_1.typeScale,
        typeWeight: typography_1.typeWeight
    }
};
