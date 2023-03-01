import { OnInit } from "@angular/core";
import { FullwidthImageCardCta } from "./fullwidth-image-card.model";
import * as i0 from "@angular/core";
export declare class FullwidthImageCardComponent implements OnInit {
    imgUrl: string;
    title: string;
    subtitle?: string;
    text?: string;
    cta?: FullwidthImageCardCta;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullwidthImageCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FullwidthImageCardComponent, "aus-fullwidth-image-card", never, { "imgUrl": "imgUrl"; "title": "title"; "subtitle": "subtitle"; "text": "text"; "cta": "cta"; }, {}, never, never, false>;
}
