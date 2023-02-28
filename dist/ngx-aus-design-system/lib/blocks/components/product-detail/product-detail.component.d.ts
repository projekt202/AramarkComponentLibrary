import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { ProductCardInputs } from "../../../shared/components/product-card/product-card.model";
import * as i0 from "@angular/core";
export declare class ProductDetailComponent {
    product: ProductCardInputs;
    carousel?: CarouselComponent;
    prevSelectedIdx: number;
    selectedIdx: number;
    constructor();
    updateColor(idx: number, stopCarousel?: boolean): void;
    resetColor(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProductDetailComponent, "aus-product-detail", never, { "product": "product"; }, {}, never, never, false>;
}
