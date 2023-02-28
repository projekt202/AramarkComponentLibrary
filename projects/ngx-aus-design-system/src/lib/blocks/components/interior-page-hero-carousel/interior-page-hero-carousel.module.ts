import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { InteriorPageHeroModule } from "./../interior-page-hero/interior-page-hero.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { SwiperModule } from "swiper/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { InteriorPageHeroCarouselComponent } from "./interior-page-hero-carousel.component";

@NgModule({
  declarations: [InteriorPageHeroCarouselComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    IconModule,
    ImageModule,
    InteriorPageHeroModule,
    CarouselModule,
    LazyLoadImageModule,
    SwiperModule,
  ],
  providers: [],
  exports: [InteriorPageHeroCarouselComponent],
})
export class InteriorPageHeroCarouselModule {}
