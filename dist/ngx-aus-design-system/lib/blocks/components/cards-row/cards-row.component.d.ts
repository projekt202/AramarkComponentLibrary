import { OnDestroy } from "@angular/core";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { CardsRowComponentButton, CardsRowComponentData, CardsRowComponentVariants } from "./cards-row.model";
import * as i0 from "@angular/core";
export declare class CardsRowComponent implements OnDestroy {
    private browserService;
    title: string;
    text: string;
    button?: CardsRowComponentButton;
    variant?: CardsRowComponentVariants;
    data: CardsRowComponentData;
    isUnderThreshold: boolean;
    window: Window | null;
    timeout?: ReturnType<typeof setTimeout>;
    constructor(browserService: BrowserService);
    ngOnDestroy(): void;
    getIsUnderThreshold(): boolean;
    updateIsUnderThreshold(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardsRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardsRowComponent, "aus-cards-row", never, { "title": "title"; "text": "text"; "button": "button"; "variant": "variant"; "data": "data"; }, {}, never, never, false>;
}
