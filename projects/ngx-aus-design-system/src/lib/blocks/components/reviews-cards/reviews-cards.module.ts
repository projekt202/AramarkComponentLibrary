import { SwiperModule } from "swiper/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CustomerCardModule } from "./../../../shared/components/customer-card/customer-card.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { ReviewsCardsComponent } from "./reviews-cards.component";
import { TimeAgoPipeModule } from "../../../shared/pipes/time-ago/time-ago.module";

@NgModule({
  declarations: [ReviewsCardsComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    CustomerCardModule,
    CarouselModule,
    TimeAgoPipeModule,
    SwiperModule,
  ],
  providers: [],
  exports: [ReviewsCardsComponent],
})
export class ReviewsCardsModule {}
