"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = exports.TextInput = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
const theme_1 = require("@aperture-ui/theme");
const react_1 = require("@emotion/react");
const FormInput_styles_1 = require("./FormInput.styles");
const TextInput = ({ label, type, additionalStyles }) => {
    const theme = theme_1.defaultTheme;
    const styling = [additionalStyles, FormInput_styles_1.labelAndForm(theme)];
    return (react_1.jsx("div", { css: styling },
        react_1.jsx("label", { css: FormInput_styles_1.labelStyle, htmlFor: label }, label),
        react_1.jsx("input", { css: FormInput_styles_1.input(theme_1.defaultTheme), type: type, id: label, name: label })));
};
exports.TextInput = TextInput;
const TextArea = ({ label, additionalStyles }) => {
    const theme = theme_1.defaultTheme;
    const styling = [additionalStyles, FormInput_styles_1.labelAndForm(theme)];
    return (react_1.jsx("div", { css: styling },
        react_1.jsx("label", { css: FormInput_styles_1.labelStyle, htmlFor: label }, label),
        react_1.jsx("textarea", { css: FormInput_styles_1.input(theme_1.defaultTheme), id: label, name: label })));
};
exports.TextArea = TextArea;