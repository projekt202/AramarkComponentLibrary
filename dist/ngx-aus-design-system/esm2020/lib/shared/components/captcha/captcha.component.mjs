import { Component, EventEmitter, Input, Output } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "ng-recaptcha";
export class CaptchaComponent {
    constructor() {
        this.siteKey = "";
        this.onResponse = new EventEmitter();
    }
    resolved(captchaResponse) {
        this.onResponse.emit({
            ok: true,
            data: captchaResponse,
        });
    }
    onError(errorDetails) {
        this.onResponse.emit({
            ok: false,
            data: errorDetails,
        });
    }
}
CaptchaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CaptchaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CaptchaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CaptchaComponent, selector: "aus-captcha", inputs: { siteKey: "siteKey" }, outputs: { onResponse: "onResponse" }, ngImport: i0, template: "<div style=\"margin-bottom: 12px\">\n  <re-captcha\n    (resolved)=\"resolved($event)\"\n    (errored)=\"onError($event)\"\n    errorMode=\"handled\"\n    [siteKey]=\"siteKey\"\n  ></re-captcha>\n</div>\n", dependencies: [{ kind: "component", type: i1.RecaptchaComponent, selector: "re-captcha", inputs: ["id", "siteKey", "theme", "type", "size", "tabIndex", "badge", "errorMode"], outputs: ["resolved", "error"], exportAs: ["reCaptcha"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CaptchaComponent, decorators: [{
            type: Component,
            args: [{ selector: "aus-captcha", template: "<div style=\"margin-bottom: 12px\">\n  <re-captcha\n    (resolved)=\"resolved($event)\"\n    (errored)=\"onError($event)\"\n    errorMode=\"handled\"\n    [siteKey]=\"siteKey\"\n  ></re-captcha>\n</div>\n" }]
        }], propDecorators: { siteKey: [{
                type: Input
            }], onResponse: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50cy9jYXB0Y2hhL2NhcHRjaGEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWF1cy1kZXNpZ24tc3lzdGVtL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudHMvY2FwdGNoYS9jYXB0Y2hhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVF2RSxNQUFNLE9BQU8sZ0JBQWdCO0lBSjdCO1FBS1csWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNwQixlQUFVLEdBQ2xCLElBQUksWUFBWSxFQUFtQixDQUFDO0tBZXZDO0lBYkMsUUFBUSxDQUFDLGVBQXVCO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25CLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLGVBQWU7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxZQUFtQjtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNuQixFQUFFLEVBQUUsS0FBSztZQUNULElBQUksRUFBRSxZQUFtRDtTQUMxRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs4R0FqQlUsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsMEhDUjdCLDhNQVFBOzRGREFhLGdCQUFnQjtrQkFKNUIsU0FBUzsrQkFDRSxhQUFhOzhCQUlkLE9BQU87c0JBQWYsS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVjYXB0Y2hhRXJyb3JQYXJhbWV0ZXJzIH0gZnJvbSBcIm5nLXJlY2FwdGNoYVwiO1xuaW1wb3J0IHsgQ2FwdGNoYVJlc3BvbnNlIH0gZnJvbSBcIi4vY2FwdGNoYS5tb2RlbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXVzLWNhcHRjaGFcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jYXB0Y2hhLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIENhcHRjaGFDb21wb25lbnQge1xuICBASW5wdXQoKSBzaXRlS2V5OiBzdHJpbmcgPSBcIlwiO1xuICBAT3V0cHV0KCkgb25SZXNwb25zZTogRXZlbnRFbWl0dGVyPENhcHRjaGFSZXNwb25zZT4gPVxuICAgIG5ldyBFdmVudEVtaXR0ZXI8Q2FwdGNoYVJlc3BvbnNlPigpO1xuXG4gIHJlc29sdmVkKGNhcHRjaGFSZXNwb25zZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5vblJlc3BvbnNlLmVtaXQoe1xuICAgICAgb2s6IHRydWUsXG4gICAgICBkYXRhOiBjYXB0Y2hhUmVzcG9uc2UsXG4gICAgfSk7XG4gIH1cblxuICBvbkVycm9yKGVycm9yRGV0YWlsczogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9uUmVzcG9uc2UuZW1pdCh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBkYXRhOiBlcnJvckRldGFpbHMgYXMgdW5rbm93biBhcyBSZWNhcHRjaGFFcnJvclBhcmFtZXRlcnMsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMnB4XCI+XG4gIDxyZS1jYXB0Y2hhXG4gICAgKHJlc29sdmVkKT1cInJlc29sdmVkKCRldmVudClcIlxuICAgIChlcnJvcmVkKT1cIm9uRXJyb3IoJGV2ZW50KVwiXG4gICAgZXJyb3JNb2RlPVwiaGFuZGxlZFwiXG4gICAgW3NpdGVLZXldPVwic2l0ZUtleVwiXG4gID48L3JlLWNhcHRjaGE+XG48L2Rpdj5cbiJdfQ==