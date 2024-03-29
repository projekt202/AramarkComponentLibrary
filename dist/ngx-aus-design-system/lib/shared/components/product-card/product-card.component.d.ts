import { AfterViewInit } from "@angular/core";
import { NgxSmartModalService } from "ngx-smart-modal";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductCardDetails, ProductCardOption } from "./product-card.model";
import { GoogleTagManagerService } from "angular-google-tag-manager";
import { CarouselComponent } from "../carousel/carousel.component";
import * as i0 from "@angular/core";
export declare class ProductCardComponent implements AfterViewInit {
    ngxSmartModalService: NgxSmartModalService;
    private route;
    private router;
    private gtms;
    id: string;
    name: string;
    legal: string;
    details: ProductCardDetails;
    options: ProductCardOption[];
    forModalPreviewURL?: boolean;
    noQueryParamsUpdate?: boolean;
    forWizard?: {
        industry: string;
        services: string;
    };
    carousel?: CarouselComponent;
    isModalOpen: boolean;
    prevSelectedIdx: number;
    selectedIdx: number;
    didLoadPreviewModal: boolean;
    constructor(ngxSmartModalService: NgxSmartModalService, route: ActivatedRoute, router: Router, gtms: GoogleTagManagerService);
    ngAfterViewInit(): void;
    toggleModal(state: boolean, e?: MouseEvent): boolean;
    updateColor(idx: number, stopCarousel?: boolean): void;
    resetColor(): void;
    onCloseFinishedHandler(): void;
    onOpenFinishedHandler(): void;
    getOptionColor(color: string): string;
    onRequestQuote(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductCardComponent, "aus-product-card", never, { "id": "id"; "name": "name"; "legal": "legal"; "details": "details"; "options": "options"; "forModalPreviewURL": "forModalPreviewURL"; "noQueryParamsUpdate": "noQueryParamsUpdate"; "forWizard": "forWizard"; }, {}, never, never, false>;
}
