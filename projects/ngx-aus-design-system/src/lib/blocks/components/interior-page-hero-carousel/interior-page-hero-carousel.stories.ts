import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { SwiperModule } from "swiper/angular";

import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { InteriorPageHeroComponent } from "../interior-page-hero/interior-page-hero.component";
import { InteriorPageHeroCarouselComponent } from "./interior-page-hero-carousel.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
        InteriorPageHeroComponent,
        CarouselComponent,
        IconComponent,
        ImageComponent,
      ],
      imports: [CommonModule, SwiperModule, LazyLoadImageModule],
    }),
  ],
  component: InteriorPageHeroCarouselComponent,
  title: "Components/Blocks/Interior Page Hero Carousel",
} as Meta;

const Template: Story<InteriorPageHeroCarouselComponent> = (
  args: InteriorPageHeroCarouselComponent
) => ({
  props: args,
});

const slides = [
  {
    variant: "left-image",
    type: "light",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    header: "Aramark Donates 250,000 Face Masks to American Red Cross",
    btn: {
      text: "Read More",
      target: "_blank",
      variant: "red",
      href: "/test",
    },
  },
  {
    variant: "left-image",
    type: "dark",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    header: "Aramark Donates 250,000 Face Masks to American Red Cross",
    btn: {
      text: "Read More",
      target: "_blank",
      variant: "red",
      href: "/test",
    },
  },
  {
    variant: "right-image",
    type: "dark",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    header: "Aramark Donates 250,000 Face Masks to American Red Cross",
    btn: {
      text: "Read More",
      target: "_blank",
      variant: "red",
      href: "/test",
    },
  },
  {
    variant: "left-image",
    type: "dark",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    header: "Aramark Donates 250,000 Face Masks to American Red Cross",
    btn: {
      text: "Read More",
      target: "_blank",
      variant: "red",
      href: "/test",
    },
  },
  {
    variant: "right-image",
    type: "light",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    header: "Aramark Donates 250,000 Face Masks to American Red Cross",
    btn: {
      text: "Read More",
      target: "_blank",
      variant: "red",
      href: "/test",
    },
  },
  {
    variant: "right-image",
    type: "dark",
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    header: "Aramark Donates 250,000 Face Masks to American Red Cross",
    btn: {
      text: "Read More",
      target: "_blank",
      variant: "red",
      href: "/test",
    },
  },
];

export const White = Template.bind({});
White.args = {
  title: "Newsroom",
  variant: "white",
  // @ts-ignore
  slides,
};

export const Black = Template.bind({});
Black.args = {
  title: "Newsroom",
  variant: "black",
  // @ts-ignore
  slides,
};
