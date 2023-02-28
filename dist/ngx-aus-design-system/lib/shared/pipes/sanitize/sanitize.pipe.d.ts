import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SanitizePipe implements PipeTransform {
    private _sanitizer;
    constructor(_sanitizer: DomSanitizer);
    transform(html: string): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<SanitizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SanitizePipe, "sanitize", false>;
}
