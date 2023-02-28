import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RecaptchaErrorParameters } from "ng-recaptcha";
import { CaptchaResponse } from "./captcha.model";

@Component({
  selector: "aus-captcha",
  templateUrl: "./captcha.component.html",
})
export class CaptchaComponent {
  @Input() siteKey: string = "";
  @Output() onResponse: EventEmitter<CaptchaResponse> =
    new EventEmitter<CaptchaResponse>();

  resolved(captchaResponse: string): void {
    this.onResponse.emit({
      ok: true,
      data: captchaResponse,
    });
  }

  onError(errorDetails: Event): void {
    this.onResponse.emit({
      ok: false,
      data: errorDetails as unknown as RecaptchaErrorParameters,
    });
  }
}
