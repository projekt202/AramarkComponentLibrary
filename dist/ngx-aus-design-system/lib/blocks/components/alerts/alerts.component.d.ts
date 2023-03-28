import { EventEmitter } from "@angular/core";
import { AlertComponent } from "../alert/alert.component.model";
import * as i0 from "@angular/core";
export declare class AlertsComponent {
    alerts: AlertComponent[];
    onHide: EventEmitter<number>;
    hide(i: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertsComponent, "aus-alerts", never, { "alerts": "alerts"; }, { "onHide": "onHide"; }, never, never, false>;
}
