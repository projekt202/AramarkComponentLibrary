import { AfterViewInit, ElementRef } from "@angular/core";
import { LoadingData, TypographyComponentTags, TypographyComponentVariants, TypographyComponentWeights } from "./typography.component.model";
import { BrowserService } from "../../services/browser/browser.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare class TypographyComponent implements AfterViewInit {
    private hostElement;
    private bs;
    private domSanitizer;
    text: string;
    for?: string;
    color?: string;
    weight?: TypographyComponentWeights;
    tag?: TypographyComponentTags;
    variant?: TypographyComponentVariants;
    disabled?: boolean;
    route?: string;
    href?: string;
    idName?: string;
    loading?: boolean;
    loadingData: LoadingData;
    textSanitized: SafeHtml;
    constructor(hostElement: ElementRef, bs: BrowserService, domSanitizer: DomSanitizer);
    ngAfterViewInit(): void;
    getCustomStyle(): {
        fontWeight?: TypographyComponentWeights | undefined;
        color?: string | undefined;
    };
    getLinkClasses(): string;
    ngOnChange(): void;
    sanitize(text: string): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypographyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TypographyComponent, "aus-typography", never, { "text": "text"; "for": "for"; "color": "color"; "weight": "weight"; "tag": "tag"; "variant": "variant"; "disabled": "disabled"; "route": "route"; "href": "href"; "idName": "idName"; "loading": "loading"; "loadingData": "loadingData"; }, {}, never, never, false>;
}
