import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";
import { AngularContentPortalModule } from "angular-content-portal";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSmartModalModule } from "ngx-smart-modal";
import { SwiperModule } from "swiper/angular";
import { Array2StringPipe } from "../../pipes/array2string/array2string.pipe";
import { GtmIdPipe } from "../../pipes/gtm/gtm-id.pipe";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";
import { ButtonComponent } from "../button/button.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { TypographyComponent } from "../typography/typography.component";
import { WysiwygComponent } from "../wysiwyg/wysiwyg.component";

import { ProductCardComponent } from "./product-card.component";

export default {
  title: "Product Card",
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ProductCardComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        GtmIdPipe,
        CarouselComponent,
        WysiwygComponent,
      ],
      imports: [
        NgxSmartModalModule.forRoot(),
        AngularContentPortalModule,
        RouterModule.forRoot([]),
        LazyLoadImageModule,
        SwiperModule,
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
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col u-6/12 u-3/12@md">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<ProductCardComponent> = (args: ProductCardComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
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
};

export const MultipleColorOptions = Template.bind({});
MultipleColorOptions.args = {
  id: "123",
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
      tag: "New",
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
};
