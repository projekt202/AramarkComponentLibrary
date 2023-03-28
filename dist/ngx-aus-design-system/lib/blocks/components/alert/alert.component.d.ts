import { EventEmitter, OnInit } from "@angular/core";
import { AlertType } from "./alert.component.model";
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    type: AlertType;
    title?: string;
    msg: string;
    timeToHide?: number;
    onHide: EventEmitter<void>;
    show: boolean;
    ngOnInit(): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "aus-alert", never, { "type": "type"; "title": "title"; "msg": "msg"; "timeToHide": "timeToHide"; }, { "onHide": "onHide"; }, never, never, false>;
}
