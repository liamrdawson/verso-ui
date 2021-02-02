/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
export interface NavProps {
    pages: Array<PageObject>;
}
export interface PageObject {
    pathName: string;
    pageName: string;
}
export declare const Nav: (props: NavProps) => jsx.JSX.Element;
