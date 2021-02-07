"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactForm = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
const react_1 = require("@emotion/react");
const atoms_1 = require("src/components/atoms");
const ContactForm_styles_1 = require("./ContactForm.styles");
//  TODO:
//  Check if the form inputs are all entered with the correct data
//  Check first name contains alphabetic characters
//  Check last name contains alphabetic characters
//  Check email contains a valid email address
//  Check that text area contains content.
//  Return boolean value if all are true or false
const ContactForm = () => (react_1.jsx("form", { css: ContactForm_styles_1.FormStyle },
    react_1.jsx(atoms_1.TextInput, { additionalStyles: ContactForm_styles_1.FormFirstNameStyle(), label: "First Name", type: "text" }),
    react_1.jsx(atoms_1.TextInput, { additionalStyles: ContactForm_styles_1.FormLastNameStyle(), label: "Last Name", type: "text" }),
    react_1.jsx(atoms_1.TextInput, { additionalStyles: ContactForm_styles_1.FormEmailStyle(), label: "Email Address", type: "email" }),
    react_1.jsx(atoms_1.TextInput, { additionalStyles: ContactForm_styles_1.FormSubjectStyle(), label: "Subject", type: "text" }),
    react_1.jsx(atoms_1.TextArea, { additionalStyles: ContactForm_styles_1.FormMessageStyle(), label: "Message", type: "text" }),
    react_1.jsx(atoms_1.PrimaryButton, { isDisabled: false, label: "Send" })));
exports.ContactForm = ContactForm;
exports.default = exports.ContactForm;
