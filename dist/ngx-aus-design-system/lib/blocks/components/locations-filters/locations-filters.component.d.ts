import { EventEmitter } from "@angular/core";
import { InputKeypressEvt } from "../../../shared/components/input/input.model";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { LocationsFiltersSearchParams } from "./locations-filters.model";
import * as i0 from "@angular/core";
export declare class LocationsFiltersComponent {
    private platform;
    private browserService;
    title: string;
    map: boolean;
    onFind: EventEmitter<LocationsFiltersSearchParams>;
    onCleanroom: EventEmitter<void>;
    zip: string;
    city: string;
    state: string;
    href: string;
    constructor(platform: PlatformService, browserService: BrowserService);
    onChange(val: string, name: "zip" | "city" | "state"): void;
    onFindClick(): void;
    onCleanroomClick(): void;
    onSubmit(e: InputKeypressEvt): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationsFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LocationsFiltersComponent, "aus-locations-filters", never, { "title": "title"; "map": "map"; }, { "onFind": "onFind"; "onCleanroom": "onCleanroom"; }, never, never, false>;
}
