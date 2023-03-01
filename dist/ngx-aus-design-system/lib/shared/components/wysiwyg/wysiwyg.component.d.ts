import { AfterViewInit, ElementRef, OnChanges, SimpleChanges } from "@angular/core";
import { WysiwygBackgroundColors, WysiwygColumns } from "./wysiwyg.model";
import * as i0 from "@angular/core";
export declare class WysiwygComponent implements AfterViewInit, OnChanges {
    private hostElement;
    bgColor?: WysiwygBackgroundColors;
    fullwidth?: boolean;
    data: string;
    embedded?: boolean;
    cols?: WysiwygColumns;
    ariaHidden?: "true" | "false";
    isContent: boolean;
    constructor(hostElement: ElementRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setContentFocusable(isFocusable: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WysiwygComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WysiwygComponent, "aus-wysiwyg", never, { "bgColor": "bgColor"; "fullwidth": "fullwidth"; "data": "data"; "embedded": "embedded"; "cols": "cols"; "ariaHidden": "ariaHidden"; "isContent": "isContent"; }, {}, never, never, false>;
}
