import { OnInit } from "@angular/core";
import { IconComponentNames } from "../icon/icon.model";
import { ButtonComponentTarget, ButtonComponentVariants } from "./button.component.model";
import * as i0 from "@angular/core";
export declare class ButtonComponent implements OnInit {
    route?: string;
    href?: string;
    target: ButtonComponentTarget;
    text: string;
    variant: ButtonComponentVariants;
    disabled: boolean;
    icon?: IconComponentNames;
    fullwidth?: boolean;
    btnType?: "button" | "submit";
    useButton?: boolean;
    origin?: string;
    isAnchorLink: boolean;
    constructor();
    ngOnInit(): void;
    getText(): string;
    anchorPreview(): void;
    getClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "aus-button", never, { "route": "route"; "href": "href"; "target": "target"; "text": "text"; "variant": "variant"; "disabled": "disabled"; "icon": "icon"; "fullwidth": "fullwidth"; "btnType": "btnType"; "useButton": "useButton"; "origin": "origin"; }, {}, never, never, false>;
}
