import { AfterViewInit, OnInit } from "@angular/core";
import { ButtonComponentVariants } from "../../../shared/components/button/button.component.model";
import { AnimationService } from "../../../shared/services/animation/animation.service";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { ResponsiveImages } from "../../../shared/services/media/media.model";
import { MediaService } from "../../../shared/services/media/media.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { FwHeroVariant, FwHeroCard, FwHeroBanner, FwHeroTextColor } from "./fw-hero.model";
import * as i0 from "@angular/core";
export declare class FwHeroComponent implements OnInit, AfterViewInit {
    private bs;
    private ms;
    private ps;
    private as;
    variant: FwHeroVariant;
    imgUrl: string;
    responsiveImgs: ResponsiveImages;
    card: FwHeroCard;
    banner?: FwHeroBanner;
    textColor?: FwHeroTextColor;
    animated?: boolean;
    constructor(bs: BrowserService, ms: MediaService, ps: PlatformService, as: AnimationService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getCardBtnVariant(): ButtonComponentVariants;
    getBannerBtnVariant(): ButtonComponentVariants;
    static ɵfac: i0.ɵɵFactoryDeclaration<FwHeroComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FwHeroComponent, "aus-fw-hero", never, { "variant": "variant"; "imgUrl": "imgUrl"; "responsiveImgs": "responsiveImgs"; "card": "card"; "banner": "banner"; "textColor": "textColor"; "animated": "animated"; }, {}, never, never, false>;
}
