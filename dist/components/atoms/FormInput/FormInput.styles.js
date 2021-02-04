"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelStyle = exports.input = exports.labelAndForm = void 0;
const react_1 = require("@emotion/react");
const theme_1 = require("@aperture-ui/theme");
const labelAndForm = (theme = theme_1.defaultTheme) => react_1.css({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.typography.primaryFont
});
exports.labelAndForm = labelAndForm;
const input = (theme = theme_1.defaultTheme) => react_1.css({
    fontFamily: theme.typography.primaryFont,
    boxSizing: 'border-box',
    borderRadius: 2,
    borderWidth: theme_1.SPACING[1],
    padding: theme_1.SPACING[4],
    fontSize: theme_1.typeScale.normal,
    backgroundColor: theme.colour.formBackground,
    borderColor: theme.colour.primary,
    height: '100%',
    '&:invalid': {
        outline: 'none',
        boxShadow: `0 0 0 4px ${theme.colour.tertiary}`
    }
});
exports.input = input;
const labelStyle = () => react_1.css({
    textAlign: 'left',
    fontSize: theme_1.typeScale.small,
    fontWeight: theme_1.typeWeight.light,
    marginBottom: theme_1.SPACING[3]
});
exports.labelStyle = labelStyle;