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
exports.HeadingLevel = void 0;
const React = __importStar(require("react"));
const Heading_1 = require("./Heading");
exports.default = {
    title: 'Components/Atoms/Heading',
    component: Heading_1.Heading,
    parameters: {
        docs: {
            description: {
                component: 'The heading tag is used in HTML to define headings of a page.'
            }
        }
    },
    argTypes: {
        element: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4']
            }
        }
    }
};
const HeadingTemplate = (args) => React.createElement(Heading_1.Heading, Object.assign({}, args));
exports.HeadingLevel = HeadingTemplate.bind({});
exports.HeadingLevel.args = {
    children: 'The quick brown fox jumps over the lazy dog.',
    element: 'h1'
};
