import { CardComponentVariants } from "../../../shared/components/card/card.model";
import { CardsColumnComponentBtn, CardsColumnComponentData, CardsColumnComponentLayout, CardsColumnComponentVariants } from "./cards-column.model";
import * as i0 from "@angular/core";
export declare class CardsColumnComponent {
    variant: CardsColumnComponentVariants;
    data: CardsColumnComponentData;
    button?: CardsColumnComponentBtn;
    layout?: CardsColumnComponentLayout;
    constructor();
    getCardsVariant(): CardComponentVariants;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardsColumnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardsColumnComponent, "aus-cards-column", never, { "variant": "variant"; "data": "data"; "button": "button"; "layout": "layout"; }, {}, never, never, false>;
}
