import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { AngularContentPortalModule } from "angular-content-portal";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { NgxSmartModalModule } from "ngx-smart-modal";

import { GraphQLModule } from "../../../graphql.module";
import { SwiperModule } from "swiper/angular";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { TabsComponent } from "../../../shared/components/tabs/tabs.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { ProductCardRowComponent } from "../product-card-row/product-card-row.component";
import { TabbedContentComponent } from "./tabbed-content.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  title: "Components/Blocks/Tabbed Content",
  component: TabbedContentComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TabsComponent,
        ButtonComponent,
        ProductCardComponent,
        ProductCardRowComponent,
        TypographyComponent,
        WysiwygComponent,
        ImageComponent,
        IconComponent,
        SanitizePipe,
        Array2StringPipe,
        CarouselComponent,
      ],
      imports: [
        LazyLoadImageModule,
        NgxSmartModalModule.forRoot(),
        HttpClientModule,
        GraphQLModule,
        RouterTestingModule,
        SwiperModule,
        AngularContentPortalModule,
        RouterModule.forRoot([]),
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

const Template: Story<TabbedContentComponent> = (
  args: TabbedContentComponent
) => ({
  props: args,
});

const categories = ["Uniforms", "Floor Mats", "Restroom", "First Aid"];

const wysiwyg = {
  data: '<h4>Uniforms</h4><p>Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms. Our uniform service will launder, inspect and deliver your uniforms according to your schedule.</p><ul><li>Outerwear & Coverings</li><li>Enhanced & High Visibility</li><li>Flame Resistant</li><li>Executive</li><li>Dickies and Other Top Brands</li><li>Industry-Specific Workwear (Manufacturing, Healthcare and more)</li></ul><a href="https://www.google.com" class="armk-btn-red">Request a Quote</a><a href="https://www.google.com" class="armk-btn-outline">More about Uniform Services</a>',
};

const image = {
  src: "https://picsum.photos/1366/500",
  altText: "Lorem ipsum",
};

const products = [];
for (let i = 0; i < 4; i += 1) {
  products.push({
    id: "123",
    name: "Aramark FlexFit™ Women's Jean",
    details: {
      sizes: "XS-3XL",
      description: `
      <p>100% polyester with mechanical stretch. Imported.</p>
      <p>58% cotton/30% polyester/8% rayon/4% spandex</p>
      <p>4-way stretch denim</p>
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
    legal: "Ipsum ipsum sunt qui nisi amet elit adipisicing anim labore.",
  });
}

export const GrayFullwidth = Template.bind({});
GrayFullwidth.args = {
  variant: "gray",
  layout: "fullwidth",
  title: "Providing the following services:",
  categories,
  content: [[{ products }], [{ image }], [{ image }], [{ wysiwyg }]],
};

export const BlackTwoThirds = Template.bind({});
BlackTwoThirds.args = {
  variant: "black",
  layout: "2-3",
  title: "Providing the following services:",
  categories,
  content: [
    [{ wysiwyg }, { products }],
    [{ wysiwyg }, { wysiwyg }],
    [{ image }, { wysiwyg }],
    [{ image }, { image }],
  ],
};

export const WhiteHalves = Template.bind({});
WhiteHalves.args = {
  variant: "white",
  layout: "50-50",
  title: "Providing the following services:",
  categories,
  content: [
    [{ wysiwyg }, { image }],
    [{ image }, { wysiwyg }],
    [{ image }, { image }],
    [{ wysiwyg }, { wysiwyg }],
  ],
};
