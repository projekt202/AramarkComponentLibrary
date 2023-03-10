import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class RadioButtonsComponent {
    options: string[];
    selected: EventEmitter<string>;
    selection: string;
    constructor();
    onChange(option: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioButtonsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioButtonsComponent, "aus-radio-buttons", never, { "options": "options"; }, { "selected": "selected"; }, never, never, false>;
}
