import { AlertType } from "./alert.component.model";
import * as i0 from "@angular/core";
export declare class AlertComponent {
    alertType: AlertType;
    title?: string;
    msg: string;
    timeToHide?: number;
    showAlert?: boolean;
    ngOnChanges(): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "aus-alert", never, { "alertType": "alertType"; "title": "title"; "msg": "msg"; "timeToHide": "timeToHide"; }, {}, never, never, false>;
}
