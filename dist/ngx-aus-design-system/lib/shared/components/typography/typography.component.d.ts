import { IconComponentNames } from "./../icon/icon.model";
import { AfterViewInit, ElementRef } from "@angular/core";
import { LoadingData, TypographyComponentTags, TypographyComponentVariants, TypographyComponentWeights, TypographyPresets, TypographyPresetVariants } from "./typography.component.model";
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
    presetClassNames?: TypographyPresets[];
    presetVariant?: TypographyPresetVariants;
    disabled?: boolean;
    route?: string;
    href?: string;
    idName?: string;
    loading?: boolean;
    loadingData: LoadingData;
    linkStandalone?: boolean;
    linkSize?: "small" | "medium" | "large";
    linkIcon?: {
        name?: IconComponentNames;
        template?: string;
        position: "left" | "right";
    };
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
    static ɵcmp: i0.ɵɵComponentDeclaration<TypographyComponent, "aus-typography", never, { "text": "text"; "for": "for"; "color": "color"; "weight": "weight"; "tag": "tag"; "variant": "variant"; "presetClassNames": "presetClassNames"; "presetVariant": "presetVariant"; "disabled": "disabled"; "route": "route"; "href": "href"; "idName": "idName"; "loading": "loading"; "loadingData": "loadingData"; "linkStandalone": "linkStandalone"; "linkSize": "linkSize"; "linkIcon": "linkIcon"; }, {}, never, never, false>;
}
