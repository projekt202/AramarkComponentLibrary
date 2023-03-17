import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlertsComponent } from "./alerts.component";
import { ArrowLinkModule, WysiwygModule } from "NgxAusDesignSystem";
import { CookieModule } from "ngx-cookie";
import { HttpClientModule } from "@angular/common/http";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { AlertModule } from "../alert/alert.module";

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    AlertModule,
    ArrowLinkModule,
    CommonModule,
    CookieModule.withOptions(),
    HttpClientModule,
    SanitizePipeModule,
    TypographyModule,
    WysiwygModule,
  ],
  providers: [],
  exports: [AlertsComponent],
})
export class AlertsModule {}
