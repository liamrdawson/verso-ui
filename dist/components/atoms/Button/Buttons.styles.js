"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tertiary = exports.secondary = exports.primary = exports.base = void 0;
const react_1 = require("@emotion/react");
const theme_1 = require("@aperture-ui/theme");
exports.base = react_1.css({
    boxSizing: 'border-box',
    padding: `${theme_1.SPACING[5]}px ${theme_1.SPACING[6]}px`,
    borderRadius: 2,
    minWidth: 100,
    maxWidth: 300,
    cursor: 'pointer',
    fontWeight: 900,
    fontSize: theme_1.typeScale.normal,
    transition: 'background-color 0.2s linear, color 0.2s linear',
});
const primary = (theme = theme_1.defaultTheme, isDisabled) => react_1.css({
    textTransform: 'uppercase',
    backgroundColor: isDisabled ? 'red' : theme.colour.primary,
    color: theme.colour.textOnPrimary,
    border: 'none',
    '&:hover': {
        backgroundColor: theme.colour.primaryHover,
    },
    '&:active': {
        backgroundColor: theme.colour.primaryActive,
    },
    '&:disabled': {
        backgroundColor: theme.colour.disabled,
        cursor: 'not-allowed',
    },
}, exports.base);
exports.primary = primary;
const secondary = (theme = theme_1.defaultTheme) => react_1.css({
    backgroundColor: theme.colour.secondary,
    color: theme.colour.primary,
    border: `solid 1px ${theme.colour.primary}`,
    textTransform: 'uppercase',
    '&:hover': {
        borderColor: theme.colour.primaryHover,
        color: theme.colour.primaryHover,
    },
    '&:active': {
        borderColor: theme.colour.secondaryActive,
        color: theme.colour.secondaryActive,
    },
    '&:disabled': {
        backgroundColor: theme.colour.disabled,
        colour: theme.colour.disabled,
        cursor: 'not-allowed',
    },
}, exports.base);
exports.secondary = secondary;
const tertiary = (theme = theme_1.defaultTheme) => react_1.css({
    backgroundColor: theme.colour.secondary,
    color: theme.colour.tertiary,
    border: 'none',
    textTransform: 'uppercase',
    '&:hover': {
        textDecoration: 'underline',
        color: theme.colour.tertiaryHover,
    },
    '&:active': {
        borderColor: theme.colour.tertiaryActive,
        color: theme.colour.tertiaryActive,
    },
    '&:disabled': {
        backgroundColor: theme.colour.disabled,
        colour: theme.colour.disabled,
        cursor: 'not-allowed',
    },
}, exports.base);
exports.tertiary = tertiary;
