export interface NavProps {
    pages: Array<PageObject>;
}
export interface PageObject {
    pathName: string;
    pageName: string;
}
export declare const Nav: React.FC<NavProps>;
