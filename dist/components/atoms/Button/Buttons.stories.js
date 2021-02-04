"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secondary = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
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
const PrimaryTemplate = (args) => (react_1.default.createElement(Buttons_1.PrimaryButton, Object.assign({}, args)));
exports.Primary = PrimaryTemplate.bind({});
exports.Primary.args = {
    label: 'Primary Button'
};
const SecondaryTemplate = (args) => (react_1.default.createElement(Buttons_1.SecondaryButton, Object.assign({}, args)));
exports.Secondary = SecondaryTemplate.bind({});
exports.Secondary.args = {
    label: 'Secondary Button'
};
const TertiaryTemplate = (args) => (react_1.default.createElement(Buttons_1.TertiaryButton, Object.assign({}, args)));
exports.Tertiary = TertiaryTemplate.bind({});
exports.Tertiary.args = {
    label: 'Tertiary Button'
};
