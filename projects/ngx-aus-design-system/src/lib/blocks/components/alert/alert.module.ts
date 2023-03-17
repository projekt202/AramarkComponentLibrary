import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert.component";
import { ArrowLinkModule, WysiwygModule } from "NgxAusDesignSystem";
import { CookieModule } from "ngx-cookie";
import { HttpClientModule } from "@angular/common/http";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";

@NgModule({
  declarations: [AlertComponent],
  imports: [
    ArrowLinkModule,
    CommonModule,
    CookieModule.withOptions(),
    HttpClientModule,
    SanitizePipeModule,
    TypographyModule,
    WysiwygModule,
  ],
  providers: [],
  exports: [AlertComponent],
})
export class AlertModule {}
