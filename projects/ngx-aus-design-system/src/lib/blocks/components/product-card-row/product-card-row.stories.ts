import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { SwiperModule } from "swiper/angular";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularContentPortalModule } from "angular-content-portal";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { GtmIdPipe } from "../../../shared/pipes/gtm/gtm-id.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { ProductCardRowComponent } from "./product-card-row.component";

export default {
  title: "Product Card Row",
  component: ProductCardRowComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ProductCardComponent,
        TypographyComponent,
        SanitizePipe,
        ButtonComponent,
        CarouselComponent,
        IconComponent,
        GtmIdPipe,
        WysiwygComponent,
      ],
      imports: [
        NgxSmartModalModule.forRoot(),
        SwiperModule,
        AngularContentPortalModule,
        RouterModule.forRoot([]),
        LazyLoadImageModule,
        GoogleTagManagerModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: "/",
        },
        { provide: "googleTagManagerId", useValue: "GTM-NMCM4JJ" },
      ],
    }),
  ],
} as Meta;

const Template: Story<ProductCardRowComponent> = (
  args: ProductCardRowComponent
) => ({
  props: args,
});

const products = [];
const productsColorOptions = [];
for (let i = 0; i <= 7; i += 1) {
  products.push({
    id: "123",
    name: "Aramark FlexFit™ Women's Jean",
    details: {
      sizes: "XS-3XL",
      description: `
        100% polyester with mechanical stretch. Imported.
        <br /><br />
        58% cotton/30% polyester/8% rayon/4% spandex
        4-way stretch denim
        <br /><br />
        <ul>
          <li>Lorem ipmsum dolor</li>
          <li>Lorem ipmsum dolor</li>
        </ul>
      `,
    },
    options: [
      {
        color: "#FF0000",
        colorName: "Red",
        imgUrl: "https://api.lorem.space/image?w=500&h=500",
      },
    ],
    legal:
      'Legal disclaimer text lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  });
  productsColorOptions.push({
    id: "123",
    tag: "New",
    name: "Aramark FlexFit™ Women's 3/4 Sleeve Polo",
    details: {
      sizes: "XS-3XL",
      description: `
        100% polyester with mechanical stretch. Imported.
        <br /><br />
        58% cotton/30% polyester/8% rayon/4% spandex
        4-way stretch denim
        <br /><br />
        <ul>
          <li>Lorem ipmsum dolor</li>
          <li>Lorem ipmsum dolor</li>
        </ul>
      `,
    },
    options: [
      {
        color: "#FF0000",
        colorName: "Red",
        imgUrl: "https://api.lorem.space/image?w=500&h=500",
      },
      {
        color: "#00FF00",
        colorName: "Green",
        imgUrl: "https://api.lorem.space/image?w=600&h=600",
      },
      {
        color: "#0000FF",
        colorName: "Blue",
        imgUrl: "https://api.lorem.space/image?w=700&h=700",
      },
    ],
    legal:
      'Legal disclaimer text lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  });
}

export const Default = Template.bind({});
Default.args = {
  products,
};

export const MultipleColorOptions = Template.bind({});
MultipleColorOptions.args = {
  products: productsColorOptions,
};
