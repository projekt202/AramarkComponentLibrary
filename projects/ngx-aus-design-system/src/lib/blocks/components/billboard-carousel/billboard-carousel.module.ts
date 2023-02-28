import { BillboardModule } from "./../billboard/billboard.module";
import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { SwiperModule } from "swiper/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { BillboardCarouselComponent } from "./billboard-carousel.component";

@NgModule({
  declarations: [BillboardCarouselComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    LazyLoadImageModule,
    IconModule,
    CarouselModule,
    SwiperModule,
    NgxSmoothScrollModule,
    BillboardModule,
  ],
  providers: [],
  exports: [BillboardCarouselComponent],
})
export class BillboardCarouselModule {}
