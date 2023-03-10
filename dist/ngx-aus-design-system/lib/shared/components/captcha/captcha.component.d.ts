import { EventEmitter } from "@angular/core";
import { CaptchaResponse } from "./captcha.model";
import * as i0 from "@angular/core";
export declare class CaptchaComponent {
    siteKey: string;
    onResponse: EventEmitter<CaptchaResponse>;
    resolved(captchaResponse: string): void;
    onError(errorDetails: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CaptchaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CaptchaComponent, "aus-captcha", never, { "siteKey": "siteKey"; }, { "onResponse": "onResponse"; }, never, never, false>;
}
