"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headingStyles = exports.componentStyles = exports.base = void 0;
const react_1 = require("@emotion/react");
const theme_1 = require("@aperture-ui/theme");
const base = (theme = theme_1.defaultTheme) => react_1.css({
    fontFamily: theme.typography.primaryFont,
    color: theme.colour.primary,
});
exports.base = base;
const componentStyles = () => ({
    h1: {
        fontWeight: 900,
        fontSize: theme_1.typeScale.heading1,
    },
    h2: {
        fontWeight: 500,
        fontSize: theme_1.typeScale.heading2,
    },
    h3: {
        fontWeight: 800,
        fontSize: theme_1.typeScale.heading3,
    },
    h4: {
        fontWeight: 800,
        fontSize: theme_1.typeScale.heading4,
    },
});
exports.componentStyles = componentStyles;
exports.headingStyles = exports.componentStyles();
