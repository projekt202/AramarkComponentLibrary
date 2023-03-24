import { InputSizes, InputStatus } from "./../input/input.model";
import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    name: string;
    label?: string;
    placeholder: string;
    items: string[];
    isDisabled?: boolean;
    isRequired?: boolean;
    initialIdx?: number;
    size?: InputSizes;
    statusIcon?: InputStatus;
    multiselect?: boolean;
    selectedChange: EventEmitter<string>;
    change: EventEmitter<string>;
    selected: string;
    didInteract: boolean;
    searchTerm?: string;
    constructor();
    hasInitialIdx(): boolean;
    getInitialIdx(): number;
    onChange(val: string): void;
    setSelected(val: string): void;
    onSearch(e: {
        term: string;
        items: any[];
    }): void;
    clearSelected(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "aus-dropdown", never, { "name": "name"; "label": "label"; "placeholder": "placeholder"; "items": "items"; "isDisabled": "isDisabled"; "isRequired": "isRequired"; "initialIdx": "initialIdx"; "size": "size"; "statusIcon": "statusIcon"; "multiselect": "multiselect"; }, { "selectedChange": "selectedChange"; "change": "change"; }, never, ["[statusMsg]"], false>;
}
