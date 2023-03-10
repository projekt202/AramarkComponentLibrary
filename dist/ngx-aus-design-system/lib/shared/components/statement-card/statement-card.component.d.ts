import { AfterViewInit } from "@angular/core";
import { PlatformService } from "../../services/platform/platform.service";
import { IconComponentNames } from "../icon/icon.model";
import * as i0 from "@angular/core";
export declare class StatementCardComponent implements AfterViewInit {
    private ps;
    icon?: IconComponentNames;
    title: string;
    text: string;
    anim?: {
        index?: number;
        name: string;
    };
    constructor(ps: PlatformService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatementCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StatementCardComponent, "aus-statement-card", never, { "icon": "icon"; "title": "title"; "text": "text"; "anim": "anim"; }, {}, never, never, false>;
}
