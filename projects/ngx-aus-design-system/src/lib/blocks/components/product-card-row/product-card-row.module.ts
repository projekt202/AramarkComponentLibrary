import { ProductCardModule } from "./../../../shared/components/product-card/product-card.module";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { SwiperModule } from "swiper/angular";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { GtmIdPipeModule } from "./../../../shared/pipes/gtm/gtm-id.module";
import { CarouselModule } from "./../../../shared/components/carousel/carousel.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { ProductCardRowComponent } from "./product-card-row.component";

@NgModule({
  declarations: [ProductCardRowComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    CarouselModule,
    GtmIdPipeModule,
    WysiwygModule,
    NgxSmartModalModule,
    SwiperModule,
    AngularContentPortalModule,
    RouterModule.forRoot([]),
    LazyLoadImageModule,
    GoogleTagManagerModule,
    ProductCardModule,
  ],
  providers: [],
  exports: [ProductCardRowComponent],
})
export class ProductCardRowModule {}
