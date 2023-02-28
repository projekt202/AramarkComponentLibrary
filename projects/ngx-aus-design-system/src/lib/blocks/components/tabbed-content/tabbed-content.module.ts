import { FullwidthImageCardColumnsModule } from "./../fullwidth-image-card-columns/fullwidth-image-card-columns.module";
import { SwiperModule } from "swiper/angular";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSmartModalModule } from "ngx-smart-modal";

import { ImageModule } from "./../../../shared/components/image/image.module";
import { WysiwygModule } from "../../../shared/components/wysiwyg/wysiwyg.module";
import { ProductCardModule } from "../../../shared/components/product-card/product-card.module";
import { ProductCardRowModule } from "../product-card-row/product-card-row.module";
import { TabsModule } from "../../../shared/components/tabs/tabs.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { CarouselModule } from "../../../shared/components/carousel/carousel.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { GraphQLModule } from "../../../graphql.module";
import { TabbedContentComponent } from "./tabbed-content.component";
import { RouterTestingModule } from "@angular/router/testing";
import { GoogleTagManagerModule } from "angular-google-tag-manager";

@NgModule({
  declarations: [TabbedContentComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    TabsModule,
    ButtonModule,
    ProductCardModule,
    ProductCardRowModule,
    WysiwygModule,
    ImageModule,
    IconModule,
    CarouselModule,
    LazyLoadImageModule,
    NgxSmartModalModule.forRoot(),
    HttpClientModule,
    GraphQLModule,
    RouterTestingModule,
    SwiperModule,
    AngularContentPortalModule,
    RouterModule.forRoot([]),
    GoogleTagManagerModule,
    FullwidthImageCardColumnsModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
    { provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" },
  ],
  exports: [TabbedContentComponent],
})
export class TabbedContentModule {}
