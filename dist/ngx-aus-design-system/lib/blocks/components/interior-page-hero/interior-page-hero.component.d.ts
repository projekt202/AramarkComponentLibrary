import { OnInit } from "@angular/core";
import { CallToActionTextButton } from "../call-to-action-text/call-to-action-text.component.model";
import { IconComponentNames, IconComponentVariants } from "../../../shared/components/icon/icon.model";
import { InteriorPageHeroComponentVariant, InteriorPageHeroComponentType } from "./interior-page-hero.component.model";
import * as i0 from "@angular/core";
export declare class InteriorPageHeroComponent implements OnInit {
    variant: InteriorPageHeroComponentVariant;
    type: InteriorPageHeroComponentType;
    imgUrl: string;
    date?: string;
    endDate?: string;
    header: string;
    button?: CallToActionTextButton;
    iconName: IconComponentNames;
    iconVariant: IconComponentVariants;
    icon: IconComponentVariants;
    buttonColor: string;
    backgroundColor?: string;
    constructor();
    ngOnInit(): void;
    getClasses(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InteriorPageHeroComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InteriorPageHeroComponent, "aus-interior-page-hero", never, { "variant": "variant"; "type": "type"; "imgUrl": "imgUrl"; "date": "date"; "endDate": "endDate"; "header": "header"; "button": "button"; "backgroundColor": "backgroundColor"; }, {}, never, never, false>;
}
