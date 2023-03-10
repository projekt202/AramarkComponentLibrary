import { QueryList } from "@angular/core";
import { MapInfoWindow, GoogleMap } from "@angular/google-maps";
import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { LocationMapItem, LocationMapVariant } from "./location-map.model";
import * as i0 from "@angular/core";
export declare class LocationMapComponent {
    private browserService;
    private platform;
    variant: LocationMapVariant;
    locations: LocationMapItem[];
    isInitiallyOpen?: boolean;
    button?: ButtonConfig;
    infoWindows?: QueryList<MapInfoWindow>;
    map?: GoogleMap;
    locationItems?: QueryList<HTMLLIElement>;
    activeIdx: number;
    isOpen: boolean | undefined;
    window: Window | null;
    geolocation: {
        lat: number;
        lng: number;
    };
    defaultGeo: {
        lat: number;
        lng: number;
    };
    constructor(browserService: BrowserService, platform: PlatformService);
    onMapInit(): void;
    getMap(): GoogleMap | undefined;
    showAndFixSidebar(): void;
    getWindowWidth(): number;
    centerSinglePin(): void;
    closePopups(): void;
    focusListItem(idx: number): void;
    centerLocation(idx: number): void;
    openInfo(idx: number): void;
    onClickMap(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationMapComponent, "aus-location-map", never, { "variant": "variant"; "locations": "locations"; "isInitiallyOpen": "isInitiallyOpen"; "button": "button"; }, {}, never, never, false>;
}
