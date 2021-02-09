"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TertiaryButton = exports.SecondaryButton = exports.PrimaryButton = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
const react_1 = require("@emotion/react");
const Buttons_styles_1 = require("./Buttons.styles");
const PrimaryButton = (props) => {
    const { label, isDisabled, theme } = props;
    return (react_1.jsx("button", { type: "button", css: Buttons_styles_1.primary(theme, isDisabled) }, label));
};
exports.PrimaryButton = PrimaryButton;
const SecondaryButton = (props) => {
    const { label, theme } = props;
    return (react_1.jsx("button", { type: "button", css: Buttons_styles_1.secondary(theme) }, label));
};
exports.SecondaryButton = SecondaryButton;
const TertiaryButton = (props) => {
    const { label, theme } = props;
    return (react_1.jsx("button", { type: "button", css: Buttons_styles_1.tertiary(theme) }, label));
};
exports.TertiaryButton = TertiaryButton;
