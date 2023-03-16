import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { SwiperModule } from "swiper/angular";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { BillboardComponent } from "../billboard/billboard.component";
import { BillboardCarouselComponent } from "./billboard-carousel.component";

export default {
  title: "Billboard Carousel",
  decorators: [
    moduleMetadata({
      declarations: [
        BillboardComponent,
        ButtonComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
        CarouselComponent,
      ],
      imports: [SwiperModule, NgxSmoothScrollModule, LazyLoadImageModule],
    }),
  ],
  component: BillboardCarouselComponent,
} as Meta;

const Template: Story<BillboardCarouselComponent> = (
  args: BillboardCarouselComponent
) => ({
  props: args,
});

const slides = [
  {
    variant: "left-image",
    type: "dark",
    column: "50-50",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    iconName: "package",
    header: "Create a clean, safe workplace",
    bodyText:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    variant: "left-image",
    type: "light",
    column: "50-50",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    iconName: "package",
    header: "Create a clean, safe workplace",
    bodyText:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    variant: "right-image",
    type: "dark",
    column: "50-50",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    iconName: "package",
    header: "Create a clean, safe workplace",
    bodyText:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    variant: "left-image",
    type: "dark",
    column: "3-2",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    iconName: "package",
    header: "Create a clean, safe workplace",
    bodyText:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    variant: "right-image",
    type: "light",
    column: "3-2",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    iconName: "package",
    header: "Create a clean, safe workplace",
    bodyText:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    variant: "right-image",
    type: "dark",
    column: "3-2",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    header: "Create a clean, safe workplace",
    bodyText:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
    btn: {
      text: "Why Aramark",
      variant: "white",
      href: "https://www.google.com",
    },
  },
];

export const White = Template.bind({});
White.args = {
  variant: "white",
  // @ts-ignore
  slides,
};

export const Black = Template.bind({});
Black.args = {
  variant: "black",
  // @ts-ignore
  slides,
};

export const Gray = Template.bind({});
Gray.args = {
  variant: "gray",
  // @ts-ignore
  slides,
};
