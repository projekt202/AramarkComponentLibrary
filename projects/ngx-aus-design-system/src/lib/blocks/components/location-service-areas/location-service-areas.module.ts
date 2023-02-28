import { SwiperModule } from "swiper/angular";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationServiceAreasComponent } from "./location-service-areas.component";

@NgModule({
  declarations: [LocationServiceAreasComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    ImageModule,
    CarouselModule,
    SwiperModule,
  ],
  providers: [],
  exports: [LocationServiceAreasComponent],
})
export class LocationServiceAreasModule {}
