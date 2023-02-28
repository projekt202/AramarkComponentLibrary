import { LazyLoadImageModule } from "ng-lazyload-image";
import { SwiperModule } from "swiper/angular";
import { QuoteModule } from "./../quote/quote.module";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { QuoteSliderComponent } from "./quote-slider.component";

@NgModule({
  declarations: [QuoteSliderComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    CarouselModule,
    QuoteModule,
    SwiperModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [QuoteSliderComponent],
})
export class QuoteSliderModule {}
