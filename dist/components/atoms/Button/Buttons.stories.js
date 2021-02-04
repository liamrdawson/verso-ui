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
exports.Tertiary = exports.Secondary = exports.Primary = void 0;
const React = __importStar(require("react"));
const Buttons_1 = require("./Buttons");
exports.default = {
    title: 'Components/Atoms/Button',
    component: Buttons_1.PrimaryButton,
    parameters: {
        docs: {
            description: {
                component: 'New buttons for new things'
            }
        }
    }
};
const PrimaryTemplate = (args) => (React.createElement(Buttons_1.PrimaryButton, Object.assign({}, args)));
exports.Primary = PrimaryTemplate.bind({});
exports.Primary.args = {
    label: 'Primary Button'
};
const SecondaryTemplate = (args) => (React.createElement(Buttons_1.SecondaryButton, Object.assign({}, args)));
exports.Secondary = SecondaryTemplate.bind({});
exports.Secondary.args = {
    label: 'Secondary Button'
};
const TertiaryTemplate = (args) => (React.createElement(Buttons_1.TertiaryButton, Object.assign({}, args)));
exports.Tertiary = TertiaryTemplate.bind({});
exports.Tertiary.args = {
    label: 'Tertiary Button'
};
