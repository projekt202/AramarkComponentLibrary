import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { BillboardComponent } from "./billboard.component";

@NgModule({
  declarations: [BillboardComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    LazyLoadImageModule,
    IconModule,
  ],
  providers: [],
  exports: [BillboardComponent],
})
export class BillboardModule {}
