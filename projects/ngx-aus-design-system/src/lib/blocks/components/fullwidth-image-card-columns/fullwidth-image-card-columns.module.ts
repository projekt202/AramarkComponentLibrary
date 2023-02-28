import { FullwidthImageCardModule } from "./../../../shared/components/fullwidth-image-card/fullwidth-image-card.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ArrowLinkModule } from "./../../../shared/components/arrow-link/arrow-link.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { FullwidthImageCardColumnsComponent } from "./fullwidth-image-card-columns.component";

@NgModule({
  declarations: [FullwidthImageCardColumnsComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ArrowLinkModule,
    LazyLoadImageModule,
    FullwidthImageCardModule,
  ],
  providers: [],
  exports: [FullwidthImageCardColumnsComponent],
})
export class FullwidthImageCardColumnsModule {}
