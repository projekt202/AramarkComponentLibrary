import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ArrowLinkModule } from "../arrow-link/arrow-link.module";
import { TypographyModule } from "../typography/typography.module";
import { FullwidthImageCardComponent } from "./fullwidth-image-card.component";

@NgModule({
  declarations: [FullwidthImageCardComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    TypographyModule,
    ArrowLinkModule,
  ],
  providers: [],
  exports: [FullwidthImageCardComponent],
})
export class FullwidthImageCardModule {}
