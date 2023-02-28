import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IconModule } from "./../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { BreadcrumbsComponent } from "./breadcrumbs.component";

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [CommonModule, TypographyModule, SanitizePipeModule, IconModule],
  providers: [],
  exports: [BreadcrumbsComponent],
})
export class BreadcrumbsModule {}
