import { LocationCoords } from "./location-card.model";
import * as i0 from "@angular/core";
export declare class LocationCardComponent {
    map: boolean;
    city: string;
    name: string;
    address: string;
    zip: string;
    phone: string;
    url: string;
    coords?: LocationCoords;
    constructor();
    getEncodedAddress(address: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationCardComponent, "aus-location-card", never, { "map": "map"; "city": "city"; "name": "name"; "address": "address"; "zip": "zip"; "phone": "phone"; "url": "url"; "coords": "coords"; }, {}, never, never, false>;
}
