import { ChangeDetectorRef, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    private cdr;
    name: string;
    label?: string;
    placeholder: string;
    items: string[];
    isDisabled?: boolean;
    isRequired?: boolean;
    initialIdx?: number;
    selectedChange: EventEmitter<string>;
    change: EventEmitter<string>;
    selected: string;
    didInteract: boolean;
    constructor(cdr: ChangeDetectorRef);
    hasInitialIdx(): boolean;
    getInitialIdx(): number;
    onChange(val: string): void;
    setSelected(val: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "aus-dropdown", never, { "name": "name"; "label": "label"; "placeholder": "placeholder"; "items": "items"; "isDisabled": "isDisabled"; "isRequired": "isRequired"; "initialIdx": "initialIdx"; }, { "selectedChange": "selectedChange"; "change": "change"; }, never, never, false>;
}
