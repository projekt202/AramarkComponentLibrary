import { IconComponentNames, IconComponentSizes, IconComponentVariants } from "../icon/icon.model";
import { CardComponentVariants, CardComponentButton } from "./card.model";
import * as i0 from "@angular/core";
export declare class CardComponent {
    icon?: IconComponentNames;
    title: string;
    text: string;
    button?: CardComponentButton;
    variant?: CardComponentVariants;
    constructor();
    getIconSize(): IconComponentSizes;
    getIconVariant(): IconComponentVariants;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "aus-card", never, { "icon": "icon"; "title": "title"; "text": "text"; "button": "button"; "variant": "variant"; }, {}, never, never, false>;
}
