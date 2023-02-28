import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { CookieModule } from "ngx-cookie";
import { NgModule } from "@angular/core";

import { ArrowLinkModule } from "./../../../shared/components/arrow-link/arrow-link.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { WysiwygModule } from "../../../shared/components/wysiwyg/wysiwyg.module";
import { AlertBarComponent } from "./alert-bar.component";
import { GraphQLModule } from "../../../graphql.module";

@NgModule({
  declarations: [AlertBarComponent],
  imports: [
    CommonModule,
    TypographyModule,
    ArrowLinkModule,
    WysiwygModule,
    SanitizePipeModule,
    GraphQLModule,
    HttpClientModule,
    CookieModule.withOptions(),
  ],
  providers: [],
  exports: [AlertBarComponent],
})
export class AlertBarModule {}
