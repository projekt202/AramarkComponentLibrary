import { SwiperModule } from "swiper/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { ArticleCardModule } from "./../article-card/article-card.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { RelatedPostComponent } from "./related-post.component";

@NgModule({
  declarations: [RelatedPostComponent],
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
  ],
  providers: [],
  exports: [RelatedPostComponent],
})
export class RelatedPostModule {}
