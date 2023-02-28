import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class CheckboxComponent {
    name: string;
    label: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    labelUrl?: string;
    isCheckedChange: EventEmitter<boolean>;
    checked: EventEmitter<boolean>;
    constructor();
    onChange(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "aus-checkbox", never, { "name": "name"; "label": "label"; "isChecked": "isChecked"; "isDisabled": "isDisabled"; "labelUrl": "labelUrl"; }, { "isCheckedChange": "isCheckedChange"; "checked": "checked"; }, never, never, false>;
}
