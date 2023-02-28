import { BillboardModule } from "./../billboard/billboard.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { TwoColumnBillboardsComponent } from "./two-column-billboards.component";

@NgModule({
  declarations: [TwoColumnBillboardsComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    BillboardModule,
  ],
  providers: [],
  exports: [TwoColumnBillboardsComponent],
})
export class TwoColumnBillboardsModule {}
