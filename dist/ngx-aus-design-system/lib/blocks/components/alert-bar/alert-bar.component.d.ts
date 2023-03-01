import { AfterViewInit } from "@angular/core";
import { TransferState } from "@angular/platform-browser";
import { Apollo } from "apollo-angular";
import { CookieService } from "ngx-cookie";
import * as i0 from "@angular/core";
export declare class AlertBarComponent implements AfterViewInit {
    private apollo;
    private cookieService;
    private state;
    text: string;
    btn: string;
    isActive: boolean;
    didAccept: boolean;
    didLoadData: boolean;
    haveConsent(): string | undefined;
    constructor(apollo: Apollo, cookieService: CookieService, state: TransferState);
    ngAfterViewInit(): void;
    setConsent(): void;
    accept(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertBarComponent, "aus-alert-bar", never, { "text": "text"; "btn": "btn"; }, {}, never, never, false>;
}
