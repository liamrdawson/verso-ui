"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaInput = exports.FormInput = void 0;
const react_1 = require("@emotion/react");
const FormInput_1 = require("./FormInput");
exports.default = {
    title: 'Components/Atoms/FormInput',
    component: FormInput_1.TextInput,
    parameters: {
        docs: {
            description: {
                component: 'An input for inputting things',
            },
        },
    },
};
const TextInputTemplate = (args) => react_1.jsx(FormInput_1.TextInput, Object.assign({}, args));
exports.FormInput = TextInputTemplate.bind({});
exports.FormInput.args = {
    label: 'I am a label',
    type: 'text',
};
const TextAreaTemplate = (args) => react_1.jsx(FormInput_1.TextArea, Object.assign({}, args));
exports.TextAreaInput = TextAreaTemplate.bind({});
exports.TextAreaInput.args = {
    label: 'I am a label',
};
