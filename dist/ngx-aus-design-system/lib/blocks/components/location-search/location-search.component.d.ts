import { ChangeDetectorRef } from "@angular/core";
import { GoogleMap } from "@angular/google-maps";
import { Apollo } from "apollo-angular";
import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { LocationService } from "../../../shared/services/location-service/location.service";
import { LocationsFiltersSearchParams } from "../locations-filters/locations-filters.model";
import { LocationMapItem } from "../location-map/location-map.model";
import * as i0 from "@angular/core";
export declare class LocationSearchComponent {
    private apollo;
    private ls;
    private cd;
    title: string;
    button: ButtonConfig;
    locations: LocationMapItem[];
    noResults: boolean;
    map?: {
        getMap(): GoogleMap;
        showAndFixSidebar: VoidFunction;
    };
    constructor(apollo: Apollo, ls: LocationService, cd: ChangeDetectorRef);
    findCleanroom(): void;
    findZip(params: LocationsFiltersSearchParams): void;
    findLocation(params: LocationsFiltersSearchParams): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationSearchComponent, "aus-location-search", never, { "title": "title"; "button": "button"; }, {}, never, never, false>;
}
