import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RecaptchaModule } from "ng-recaptcha";
import { CaptchaComponent } from "./captcha.component";

@NgModule({
  declarations: [CaptchaComponent],
  imports: [CommonModule, RecaptchaModule],
  providers: [],
  exports: [CaptchaComponent],
})
export class CaptchaModule {}
