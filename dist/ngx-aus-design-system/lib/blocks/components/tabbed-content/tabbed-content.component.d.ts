import { AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductCardInputs } from "../../../shared/components/product-card/product-card.model";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { FiltersService } from "../../../shared/services/filters/filters.service";
import { TabbedContentLayout, TabbedContentMain, TabbedContentVariant } from "./tabbed-content.model";
import * as i0 from "@angular/core";
export declare class TabbedContentComponent implements AfterViewInit {
    private fs;
    private bs;
    private route;
    variant: TabbedContentVariant;
    title: string;
    categories: string[];
    layout: TabbedContentLayout;
    content: TabbedContentMain;
    activeIdx: number;
    productForModal?: ProductCardInputs;
    noInitialPreview?: boolean;
    constructor(fs: FiltersService, bs: BrowserService, route: ActivatedRoute);
    ngAfterViewInit(): void;
    onSelectionHandler(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabbedContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabbedContentComponent, "aus-tabbed-content", never, { "variant": "variant"; "title": "title"; "categories": "categories"; "layout": "layout"; "content": "content"; }, {}, never, never, false>;
}
