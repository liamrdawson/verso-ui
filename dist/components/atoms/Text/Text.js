"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
const react_1 = require("@emotion/react");
const themes_1 = require("src/themes");
const Text_styles_1 = require("./Text.styles");
const Text = ({ fontWeight, fontSize, element, css, additionalStyles, children }) => {
    // const theme: ITheme = useTheme()
    const theme = themes_1.defaultTheme;
    const base = Text_styles_1.textStyles(theme)(fontWeight, fontSize);
    const Comp = element;
    const styles = [css, base, additionalStyles];
    return react_1.jsx(Comp, { css: styles }, children);
};
exports.Text = Text;
exports.default = exports.Text;
