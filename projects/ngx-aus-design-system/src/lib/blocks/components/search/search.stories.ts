import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { AngularContentPortalModule } from "angular-content-portal";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { SwiperModule } from "swiper/angular";
import { FormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { ProductCardRowComponent } from "../product-card-row/product-card-row.component";
import { SearchComponent } from "./search.component";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { InputComponent } from "../../../shared/components/input/input.component";
import { LocationCardComponent } from "../../../shared/components/location-card/location-card.component";
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { TabsComponent } from "../../../shared/components/tabs/tabs.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { NgxMaskModule } from "ngx-mask";

export default {
  title: "Components/Blocks/Search",
  component: SearchComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        /* TypographyComponent, */
        ButtonComponent,
        /* InputComponent, */
        IconComponent,
        TabsComponent,
        CarouselComponent,
        ProductCardRowComponent,
        ProductCardComponent,
        LocationCardComponent,
        PaginationComponent,
        WysiwygComponent,
        /* SanitizePipe,
        Array2StringPipe, */
      ],
      imports: [
        NgxSmartModalModule.forRoot(),
        SwiperModule,
        AngularContentPortalModule,
        RouterModule.forRoot([]),
        LazyLoadImageModule,
        FormsModule,
        GraphQLModule,
        HttpClientModule,
        InputComponent,
        NgxMaskModule.forRoot(),
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
    }),
  ],
} as Meta;

const Template: Story<SearchComponent> = (args: SearchComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  keyword: "qwerty",
};
