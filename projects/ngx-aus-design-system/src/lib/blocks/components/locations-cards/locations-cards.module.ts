import { LocationCardModule } from "./../../../shared/components/location-card/location-card.module";
import { SwiperModule } from "swiper/angular";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationsCardsComponent } from "./locations-cards.component";

@NgModule({
  declarations: [LocationsCardsComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    ImageModule,
    CarouselModule,
    IconModule,
    SwiperModule,
    LocationCardModule,
  ],
  providers: [],
  exports: [LocationsCardsComponent],
})
export class LocationsCardsModule {}
