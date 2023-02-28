import { StatementCardModule } from "./../../../shared/components/statement-card/statement-card.module";
import { SwiperModule } from "swiper/angular";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { ThreeCardRowComponent } from "./three-card-row.component";

@NgModule({
  declarations: [ThreeCardRowComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    StatementCardModule,
    IconModule,
    CarouselModule,
    SwiperModule,
  ],
  providers: [],
  exports: [ThreeCardRowComponent],
})
export class ThreeCardRowModule {}
