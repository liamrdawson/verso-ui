"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textStyles = void 0;
const react_1 = require("@emotion/react");
const themes_1 = require("../../../themes");
/**
 * TIP: Using a generic string as an index, TypeScript will complain that it can't guarantee that whatever string is passed into your function will actually match a property name on your interface.
 *      An excellent workaround for this that was introduced in TypeScript 2.1 is keyof. This allows you to explicitly type something as a key of a certain class/interface.
 */
const textStyles = (theme = themes_1.defaultTheme) => (fontWeight = 'light', fontSize = 'small') => react_1.css({
    fontFamily: theme.typography.primaryFont,
    color: theme.colour.primary,
    fontWeight: theme.typography.typeWeight[fontWeight],
    fontSize: theme.typography.typeScale[fontSize],
});
exports.textStyles = textStyles;
exports.default = exports.textStyles;
