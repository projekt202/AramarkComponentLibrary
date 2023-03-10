import { NgStyle } from "@angular/common";
import { AfterViewInit } from "@angular/core";
import { BrowserService } from "../../services/browser/browser.service";
import { ImageBackgroundDimensions, ImageBackgroundVariants, ImageCaption, ImageRoundedCorners, ImageVariant } from "./image.model";
import * as i0 from "@angular/core";
export declare class ImageComponent implements AfterViewInit {
    private browserService;
    variant?: ImageVariant;
    src: string;
    fullwidth?: boolean;
    backgroundDimensions?: ImageBackgroundDimensions;
    altText: string;
    roundedCorners?: ImageRoundedCorners;
    caption?: ImageCaption;
    bgVariant?: ImageBackgroundVariants;
    loading?: boolean;
    styles: NgStyle["ngStyle"];
    window: Window | null;
    br: string;
    constructor(browserService: BrowserService);
    ngAfterViewInit(): void;
    getWindowWidth(): number;
    getStyle(): {
        width?: string | undefined;
        borderTopLeftRadius: string;
        borderTopRightRadius: string;
        borderBottomLeftRadius: string;
        borderBottomRightRadius: string;
    } | {
        width: string;
        height: string;
        borderTopLeftRadius: string;
        borderTopRightRadius: string;
        borderBottomLeftRadius: string;
        borderBottomRightRadius: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageComponent, "aus-image", never, { "variant": "variant"; "src": "src"; "fullwidth": "fullwidth"; "backgroundDimensions": "backgroundDimensions"; "altText": "altText"; "roundedCorners": "roundedCorners"; "caption": "caption"; "bgVariant": "bgVariant"; "loading": "loading"; }, {}, never, never, false>;
}
