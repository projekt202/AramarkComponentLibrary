import { ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class TypographyService {
    private ds;
    constructor(ds: DomSanitizer);
    setText(element: ElementRef<any>['nativeElement'], selector: string, value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypographyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TypographyService>;
}
