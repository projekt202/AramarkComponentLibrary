import { AfterViewInit, EventEmitter } from "@angular/core";
import { NumberedPagination } from "./pagination.model";
import * as i0 from "@angular/core";
export declare class PaginationComponent implements AfterViewInit {
    index: number;
    totalCount: number;
    pageSize: number;
    rulerLength: number;
    disabled?: boolean;
    enGoToLastPage?: boolean;
    page: EventEmitter<number>;
    maxPages: number;
    constructor();
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    get pagination(): NumberedPagination;
    navigateToPage(pageNumber: number): void;
    trackByFn(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "aus-pagination", never, { "index": "index"; "totalCount": "totalCount"; "pageSize": "pageSize"; "rulerLength": "rulerLength"; "disabled": "disabled"; "enGoToLastPage": "enGoToLastPage"; }, { "page": "page"; }, never, never, false>;
}
