"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicStyle = exports.baseLink = exports.baseUl = exports.baseNav = void 0;
const react_1 = require("@emotion/react");
const theme_1 = require("@aperture-ui/theme");
exports.baseNav = react_1.css({ display: 'flex', height: '100%' });
const baseUl = (theme = theme_1.defaultTheme) => react_1.css({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    '@media(min-width: 420px)': {
        flexDirection: 'row',
        margin: 0,
    },
    li: {
        marginTop: `${theme_1.LAYOUT[7]}px`,
        '@media(min-width: 420px)': {
            margin: `0 ${theme_1.SPACING[8]}px`,
        },
    },
    'li span a': {
        color: theme.colour.primary,
        '&:hover': {
            color: theme.colour.tertiary,
        },
    },
});
exports.baseUl = baseUl;
exports.baseLink = react_1.css({
    textDecoration: 'none',
    cursor: 'pointer',
});
const dynamicStyle = (theme = theme_1.defaultTheme) => react_1.css({
    color: theme.colour.tertiary,
});
exports.dynamicStyle = dynamicStyle;
