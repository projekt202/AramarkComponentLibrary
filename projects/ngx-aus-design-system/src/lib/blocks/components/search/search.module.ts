import { SwiperModule } from "swiper/angular";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { NgxSmartModalModule } from "ngx-smart-modal";

import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { PaginationModule } from "./../../../shared/components/pagination/pagination.module";
import { LocationCardModule } from "./../../../shared/components/location-card/location-card.module";
import { ProductCardModule } from "./../../../shared/components/product-card/product-card.module";
import { ProductCardRowModule } from "./../product-card-row/product-card-row.module";
import { TabsModule } from "./../../../shared/components/tabs/tabs.module";
import { InputModule } from "./../../../shared/components/input/input.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { GraphQLModule } from "../../../graphql.module";
import { SearchComponent } from "./search.component";
import { InputComponent } from "../../../shared/components/input/input.component";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    InputComponent,
    NgxMaskModule.forRoot(),
    TabsModule,
    IconModule,
    CarouselModule,
    ProductCardRowModule,
    ProductCardModule,
    LocationCardModule,
    PaginationModule,
    WysiwygModule,
    NgxSmartModalModule.forRoot(),
    SwiperModule,
    AngularContentPortalModule,
    RouterModule.forRoot([]),
    LazyLoadImageModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({
      animation: "progress",
      loadingText: "Loading...",
    }),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
