import { QuoteSliderComponentData, QuoteSliderComponentType } from "./quote-slider.component.model";
import * as i0 from "@angular/core";
export declare class QuoteSliderComponent {
    type: QuoteSliderComponentType;
    quotes: Array<QuoteSliderComponentData>;
    constructor();
    getClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuoteSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuoteSliderComponent, "aus-quote-slider", never, { "type": "type"; "quotes": "quotes"; }, {}, never, never, false>;
}
