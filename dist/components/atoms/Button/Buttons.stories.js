"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secondary = exports.Primary = void 0;
const react_1 = require("@emotion/react");
const Buttons_1 = require("./Buttons");
exports.default = {
    title: 'Components/Atoms/Button',
    component: Buttons_1.PrimaryButton,
    parameters: {
        docs: {
            description: {
                component: 'New buttons for new things',
            },
        },
    },
};
const PrimaryTemplate = (args) => (react_1.jsx(Buttons_1.PrimaryButton, Object.assign({}, args)));
exports.Primary = PrimaryTemplate.bind({});
exports.Primary.args = {
    label: 'Primary Button',
};
const SecondaryTemplate = (args) => (react_1.jsx(Buttons_1.SecondaryButton, Object.assign({}, args)));
exports.Secondary = SecondaryTemplate.bind({});
exports.Secondary.args = {
    label: 'Secondary Button',
};
const TertiaryTemplate = (args) => (react_1.jsx(Buttons_1.TertiaryButton, Object.assign({}, args)));
exports.Tertiary = TertiaryTemplate.bind({});
exports.Tertiary.args = {
    label: 'Tertiary Button',
};
