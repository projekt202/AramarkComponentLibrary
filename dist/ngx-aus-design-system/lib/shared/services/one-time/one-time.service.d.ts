import { TransferState } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class OneTimeService {
    private platformId;
    private transferState;
    private keys;
    constructor(platformId: Object, transferState: TransferState);
    makeKey(key: string): any;
    oneTime(key: string): boolean;
    get(key: string, defaultValue?: any): any;
    set(key: string, value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OneTimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OneTimeService>;
}
