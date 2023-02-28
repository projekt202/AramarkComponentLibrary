import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { ProductDetailComponent } from "./product-detail.component";

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    LazyLoadImageModule,
    CarouselModule,
    WysiwygModule,
  ],
  providers: [],
  exports: [ProductDetailComponent],
})
export class ProductDetailModule {}
