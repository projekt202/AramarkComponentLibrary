import { LocationServiceAreasBackgrounds, LocationServiceAreasVariants } from "./location-service-areas.model";
import * as i0 from "@angular/core";
export declare class LocationServiceAreasComponent {
    title: string;
    locations: string[];
    variant: LocationServiceAreasVariants;
    background: LocationServiceAreasBackgrounds;
    constructor();
    getChunks(): string[][];
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationServiceAreasComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationServiceAreasComponent, "aus-location-service-areas", never, { "title": "title"; "locations": "locations"; "variant": "variant"; "background": "background"; }, {}, never, never, false>;
}
