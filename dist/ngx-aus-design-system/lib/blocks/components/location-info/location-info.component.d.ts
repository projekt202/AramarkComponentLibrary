import { OnInit } from "@angular/core";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { LocationInfoTypes } from "./location-info.model";
import * as i0 from "@angular/core";
export declare class LocationInfoComponent implements OnInit {
    private ps;
    type: LocationInfoTypes;
    heading: string;
    subheading: string;
    subtitle: string;
    description: string;
    btnQuoteUrl?: string;
    btnSupportUrl?: string;
    images: string[];
    constructor(ps: PlatformService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationInfoComponent, "aus-location-info", never, { "type": "type"; "heading": "heading"; "subheading": "subheading"; "subtitle": "subtitle"; "description": "description"; "btnQuoteUrl": "btnQuoteUrl"; "btnSupportUrl": "btnSupportUrl"; "images": "images"; }, {}, never, never, false>;
}
