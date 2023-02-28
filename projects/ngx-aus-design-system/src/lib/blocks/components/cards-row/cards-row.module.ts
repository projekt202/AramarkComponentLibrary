import { SwiperModule } from "swiper/angular";
import { RouterModule } from "@angular/router";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { CardModule } from "../../../shared/components/card/card.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { CardsRowComponent } from "./cards-row.component";

@NgModule({
  declarations: [CardsRowComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    RouterModule,
    SwiperModule,
  ],
  providers: [],
  exports: [CardsRowComponent],
})
export class CardsRowModule {}
