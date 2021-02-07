"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactFormStory = void 0;
const react_1 = require("@emotion/react");
const ContactForm_1 = require("./ContactForm");
exports.default = {
    title: 'Components/Molecules/ContactForm',
    component: ContactForm_1.ContactForm,
    parameters: {
        docs: {
            description: {
                component: 'A simple and intuitive interface that customers can use to contact the business. The `ContactForm` accepts a name, last naem, email address, subject and message.',
            },
        },
    },
};
const ContactFormTemplate = () => react_1.jsx(ContactForm_1.ContactForm, null);
exports.ContactFormStory = ContactFormTemplate.bind({});
