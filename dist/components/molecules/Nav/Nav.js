"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
const react_1 = require("@emotion/react");
const link_1 = __importDefault(require("next/link"));
const atoms_1 = require("../../atoms");
const themes_1 = require("../../../themes");
const Nav_styles_1 = require("./Nav.styles");
const Nav = (props) => {
    const { pages } = props;
    // const theme: ITheme = useTheme()
    const theme = themes_1.defaultTheme;
    return (react_1.jsx("nav", { css: Nav_styles_1.baseNav },
        react_1.jsx("ul", { css: Nav_styles_1.baseUl(theme) }, pages.map((page) => (react_1.jsx("li", { key: pages.indexOf(page) },
            react_1.jsx(link_1.default, { css: Nav_styles_1.baseLink, href: page.pathName },
                react_1.jsx("span", { css: Nav_styles_1.baseLink },
                    react_1.jsx(atoms_1.Text, { additionalStyles: Nav_styles_1.dynamicStyle(themes_1.defaultTheme), element: "a", fontWeight: "light", fontSize: "medium" }, page.pageName)))))))));
};
exports.Nav = Nav;
