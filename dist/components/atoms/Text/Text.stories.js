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
exports.TextComponent = void 0;
const React = __importStar(require("react"));
const Text_1 = require("./Text");
exports.default = {
    title: 'Components/Atoms/Text',
    component: Text_1.Text,
    parameters: {
        docs: {
            description: {
                component: 'The Text component renders its children and applies standard font styling. It receives two props `fontSize` and `fontWeight`.'
            }
        }
    },
    argTypes: {
        element: {
            control: {
                type: 'select',
                options: ['p', 'a']
            }
        },
        fontSize: {
            control: {
                type: 'select',
                options: ['small', 'normal', 'caption', 'medium', 'large']
            }
        },
        fontWeight: {
            control: {
                type: 'select',
                options: ['light', 'medium', 'bold', 'black']
            }
        },
        css: {
            table: {
                disable: true
            }
        },
        additionalStyles: {
            table: {
                disable: true
            }
        }
    }
};
const TextTemplate = (args) => React.createElement(Text_1.Text, Object.assign({}, args));
exports.TextComponent = TextTemplate.bind({});
exports.TextComponent.args = {
    children: 'The quick brown fox jumps over the lazy dog.',
    fontSize: 'normal',
    fontWeight: 'light',
    element: 'p'
};
