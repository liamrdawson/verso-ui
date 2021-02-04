"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
const react_1 = require("@emotion/react");
const Heading_styles_1 = require("./Heading.styles");
const Heading = ({ children, element }) => {
    const Comp = element;
    const elementStyleSelector = element;
    return react_1.jsx(Comp, { css: [Heading_styles_1.base(), Heading_styles_1.headingStyles[elementStyleSelector]] }, children);
};
exports.Heading = Heading;
exports.default = exports.Heading;
