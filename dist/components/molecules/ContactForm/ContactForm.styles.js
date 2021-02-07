"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormMessageStyle = exports.FormSubjectStyle = exports.FormEmailStyle = exports.FormLastNameStyle = exports.FormFirstNameStyle = exports.FormStyle = void 0;
const react_1 = require("@emotion/react");
const FormStyle = () => react_1.css({
    minWidth: '700px',
    display: 'grid',
    gridGap: '25px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 3fr 1fr',
});
exports.FormStyle = FormStyle;
const FormFirstNameStyle = () => react_1.css({
    gridColumn: '1 / 2',
});
exports.FormFirstNameStyle = FormFirstNameStyle;
const FormLastNameStyle = () => react_1.css({
    gridColumn: '2 / 2',
});
exports.FormLastNameStyle = FormLastNameStyle;
const FormEmailStyle = () => react_1.css({
    gridColumn: '1 / 3',
});
exports.FormEmailStyle = FormEmailStyle;
const FormSubjectStyle = () => react_1.css({
    gridRow: '3 / 4',
    gridColumn: '1 / 3',
});
exports.FormSubjectStyle = FormSubjectStyle;
const FormMessageStyle = () => react_1.css({
    gridColumn: '1 / 3',
});
exports.FormMessageStyle = FormMessageStyle;
