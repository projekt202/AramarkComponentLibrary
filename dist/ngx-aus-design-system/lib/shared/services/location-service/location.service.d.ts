import { HttpClient } from '@angular/common/http';
import { PlatformService } from '../platform/platform.service';
import * as i0 from "@angular/core";
export declare class LocationService {
    private http;
    private platform;
    constructor(http: HttpClient, platform: PlatformService);
    getLocation(cb: ({ lat, lng }: {
        lat: number;
        lng: number;
    }) => void): void;
    reverseGeocode(lat: number, lng: number): import("rxjs").Observable<Object>;
    getStateShortForm(state: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<LocationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LocationService>;
}
