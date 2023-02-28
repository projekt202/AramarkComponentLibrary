import { ButtonComponentTarget } from "../../../shared/components/button/button.component.model";
import { LocationCoords } from "../../../shared/components/location-card/location-card.model";
import * as i0 from "@angular/core";
export declare class LocationsCardsComponent {
    title: string;
    allLocationsLink: {
        title: string;
        url: string;
        target?: ButtonComponentTarget;
    };
    locations: {
        city: string;
        name: string;
        address: string;
        zip: string;
        phone: string;
        url: string;
        coords: LocationCoords;
    }[];
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationsCardsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationsCardsComponent, "aus-locations-cards", never, { "title": "title"; "allLocationsLink": "allLocationsLink"; "locations": "locations"; }, {}, never, never, false>;
}
