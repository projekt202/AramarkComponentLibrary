import { AfterViewInit, ChangeDetectorRef, EventEmitter } from "@angular/core";
import { BrowserService } from "../../services/browser/browser.service";
import * as i0 from "@angular/core";
export declare class TabsComponent implements AfterViewInit {
    private cdRef;
    private browserService;
    categories: string[];
    dropdownPlaceholder?: string;
    disabled?: boolean;
    valueIdx?: number;
    name?: string;
    onSelection: EventEmitter<number>;
    wrapper?: {
        nativeElement: HTMLDivElement;
    };
    list?: {
        nativeElement: HTMLUListElement;
    };
    dropdown?: {
        nativeElement: HTMLSelectElement;
    };
    placeholder?: {
        nativeElement: HTMLSpanElement;
    };
    activeIdx: number;
    didInit: boolean;
    didFinishLayout: boolean;
    isOverflown: boolean;
    window: Window | null;
    constructor(cdRef: ChangeDetectorRef, browserService: BrowserService);
    ngAfterViewInit(): void;
    setActiveIdx(idx: number): void;
    getControlVisibility(): boolean;
    getWindowWidth(): number;
    updateDropdownWidth(): void;
    selectCategory(idx: number): void;
    onDropdownSelect(e: Event): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "aus-tabs", never, { "categories": "categories"; "dropdownPlaceholder": "dropdownPlaceholder"; "disabled": "disabled"; "valueIdx": "valueIdx"; "name": "name"; }, { "onSelection": "onSelection"; }, never, never, false>;
}
