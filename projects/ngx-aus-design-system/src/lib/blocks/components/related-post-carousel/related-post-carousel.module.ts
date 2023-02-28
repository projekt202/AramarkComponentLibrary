import { InteriorPageHeroCarouselModule } from "./../interior-page-hero-carousel/interior-page-hero-carousel.module";
import { SwiperModule } from "swiper/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { ImageModule } from "../../../shared/components/image/image.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { ArticleCardModule } from "../article-card/article-card.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { RelatedPostCarouselComponent } from "./related-post-carousel.component";

@NgModule({
  declarations: [RelatedPostCarouselComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ArticleCardModule,
    SanitizePipeModule,
    ButtonModule,
    ImageModule,
    CarouselModule,
    GraphQLModule,
    HttpClientModule,
    LazyLoadImageModule,
    SwiperModule,
    InteriorPageHeroCarouselModule,
  ],
  providers: [],
  exports: [RelatedPostCarouselComponent],
})
export class RelatedPostCarouselModule {}
