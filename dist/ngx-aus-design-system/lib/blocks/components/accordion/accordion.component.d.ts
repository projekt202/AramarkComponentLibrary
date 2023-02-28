import { DomSanitizer } from "@angular/platform-browser";
import { AccordionComponentIntro, AccordionComponentItem, AccordionComponentComponentType, AccordionComponentComponentVariant } from "./accordion.component.model";
import * as i0 from "@angular/core";
export declare class AccordionComponent {
    sanitizer: DomSanitizer;
    variant: AccordionComponentComponentVariant;
    type: AccordionComponentComponentType;
    data: AccordionComponentItem[];
    intro?: AccordionComponentIntro;
    openIdx: null | number;
    constructor(sanitizer: DomSanitizer);
    getClasses(): string;
    setOpenIdx(idx: null | number): void;
    onToggleHandler(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "aus-accordion", never, { "variant": "variant"; "type": "type"; "data": "data"; "intro": "intro"; }, {}, never, never, false>;
}
