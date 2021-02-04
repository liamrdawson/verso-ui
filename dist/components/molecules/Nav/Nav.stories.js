"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavComponent = void 0;
const React = __importStar(require("react"));
const Nav_1 = require("./Nav");
exports.default = {
    title: 'Components/Molecules/Nav',
    component: Nav_1.Nav,
    parameters: {
        docs: {
            description: {
                component: 'The `<Nav>` component represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.'
            }
        }
    }
};
const NavTemplate = (args) => React.createElement(Nav_1.Nav, Object.assign({}, args));
exports.NavComponent = NavTemplate.bind({});
exports.NavComponent.args = {
    pages: [
        {
            pageName: 'Prints',
            pathName: '/prints'
        },
        {
            pageName: 'About',
            pathName: '/about'
        },
        {
            pageName: 'Contact',
            pathName: '/contact'
        }
    ]
};
