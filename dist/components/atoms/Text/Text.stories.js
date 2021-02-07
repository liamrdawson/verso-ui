"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextComponent = void 0;
const react_1 = require("@emotion/react");
const Text_1 = require("./Text");
exports.default = {
    title: 'Components/Atoms/Text',
    component: Text_1.Text,
    parameters: {
        docs: {
            description: {
                component: 'The Text component renders its children and applies standard font styling. It receives two props `fontSize` and `fontWeight`.',
            },
        },
    },
    argTypes: {
        element: {
            control: {
                type: 'select',
                options: ['p', 'a'],
            },
        },
        fontSize: {
            control: {
                type: 'select',
                options: ['small', 'normal', 'caption', 'medium', 'large'],
            },
        },
        fontWeight: {
            control: {
                type: 'select',
                options: ['light', 'medium', 'bold', 'black'],
            },
        },
        css: {
            table: {
                disable: true,
            },
        },
        additionalStyles: {
            table: {
                disable: true,
            },
        },
    },
};
const TextTemplate = (args) => react_1.jsx(Text_1.Text, Object.assign({}, args));
exports.TextComponent = TextTemplate.bind({});
exports.TextComponent.args = {
    children: 'The quick brown fox jumps over the lazy dog.',
    fontSize: 'normal',
    fontWeight: 'light',
    element: 'p',
};
