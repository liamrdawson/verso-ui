"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadingLevel = void 0;
const react_1 = __importDefault(require("react"));
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
const HeadingTemplate = (args) => react_1.default.createElement(Heading_1.Heading, Object.assign({}, args));
exports.HeadingLevel = HeadingTemplate.bind({});
exports.HeadingLevel.args = {
    children: 'The quick brown fox jumps over the lazy dog.',
    element: 'h1'
};
