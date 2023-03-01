import { ArrowLinkInputs } from "../../../shared/components/arrow-link/arrow-link.model";
import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { IconComponentNames } from "../../../shared/components/icon/icon.model";
import { BannerBarComponentBackgrounds } from "./banner-bar.model";
import * as i0 from "@angular/core";
export declare class BannerBarComponent {
    icon?: IconComponentNames;
    content: string;
    iconOnTop?: boolean;
    background: BannerBarComponentBackgrounds;
    link?: ArrowLinkInputs;
    btn?: ButtonConfig;
    noCard?: boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BannerBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BannerBarComponent, "aus-banner-bar", never, { "icon": "icon"; "content": "content"; "iconOnTop": "iconOnTop"; "background": "background"; "link": "link"; "btn": "btn"; "noCard": "noCard"; }, {}, never, never, false>;
}
