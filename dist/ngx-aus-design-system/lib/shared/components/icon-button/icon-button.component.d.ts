import { EventEmitter } from "@angular/core";
import { IconComponentNames } from "./../icon/icon.model";
import { IconButtonSizes } from "./icon-button.model";
import * as i0 from "@angular/core";
export declare class IconButtonComponent {
    icon: IconComponentNames;
    size?: IconButtonSizes;
    ariaLabel: string;
    disabled?: boolean;
    click: EventEmitter<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconButtonComponent, "lib-icon-button", never, { "icon": "icon"; "size": "size"; "ariaLabel": "ariaLabel"; "disabled": "disabled"; }, { "click": "click"; }, never, never, false>;
}
