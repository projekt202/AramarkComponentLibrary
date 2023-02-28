import { EventEmitter } from "@angular/core";
import { InputKeypressEvt } from "./input.model";
import * as i0 from "@angular/core";
export declare class InputComponent {
    pattern?: string;
    name: string;
    value: string;
    label?: string;
    subtitle?: string;
    minLength?: number;
    maxLength?: number;
    multiline?: boolean;
    placeholder?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    validationErrorMsg?: string;
    type: "text" | "number" | "email" | "tel" | "search";
    mask?: string;
    valueChange: EventEmitter<string>;
    keypress: EventEmitter<InputKeypressEvt>;
    setValue(val: string): void;
    onKeypress(e: KeyboardEvent): void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "aus-input", never, { "pattern": "pattern"; "name": "name"; "value": "value"; "label": "label"; "subtitle": "subtitle"; "minLength": "minLength"; "maxLength": "maxLength"; "multiline": "multiline"; "placeholder": "placeholder"; "isDisabled": "isDisabled"; "isRequired": "isRequired"; "validationErrorMsg": "validationErrorMsg"; "type": "type"; "mask": "mask"; }, { "valueChange": "valueChange"; "keypress": "keypress"; }, never, never, false>;
}
