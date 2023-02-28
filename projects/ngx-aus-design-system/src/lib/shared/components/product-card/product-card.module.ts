import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { SwiperModule } from "swiper/angular";
import { GtmIdPipeModule } from "../../pipes/gtm/gtm-id.module";
import { ButtonModule } from "../button/button.module";
import { CarouselModule } from "../carousel/carousel.module";
import { TypographyModule } from "../typography/typography.module";
import { WysiwygModule } from "../wysiwyg/wysiwyg.module";
import { ProductCardComponent } from "./product-card.component";

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    AngularContentPortalModule,
    RouterModule,
    LazyLoadImageModule,
    SwiperModule,
    GoogleTagManagerModule,
    TypographyModule,
    WysiwygModule,
    GtmIdPipeModule,
    CarouselModule,
    ButtonModule,
  ],
  providers: [{ provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" }],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
