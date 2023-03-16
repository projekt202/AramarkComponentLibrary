import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { SwiperModule } from "swiper/angular";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";

import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { QuoteComponent } from "../quote/quote.component";
import { QuoteSliderComponent } from "./quote-slider.component";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        QuoteComponent,
        CarouselComponent,
        IconComponent,
      ],
      imports: [SwiperModule, LazyLoadImageModule],
    }),
  ],
  component: QuoteSliderComponent,
  title: "Components/Blocks/Quote slider",
} as Meta;

const Template: Story<QuoteSliderComponent> = (args: QuoteSliderComponent) => ({
  props: args,
});

export const Dark = Template.bind({});
Dark.args = {
  type: "dark",
  quotes: [
    {
      author: {
        image: "https://api.lorem.space/image?w=470&h=470",
        name: "Bob Miller",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
    },
    {
      author: {
        image: "https://api.lorem.space/image?w=470&h=470",
        name: "Bob Miller 2",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
    },
  ],
};

export const LightWithoutImage = Template.bind({});
LightWithoutImage.args = {
  type: "light",
  quotes: [
    {
      author: {
        name: "Bob Miller",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
    },
    {
      author: {
        name: "Bob Miller 2",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 2"`,
    },
    {
      author: {
        name: "Bob Miller 3",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 3"`,
    },
    {
      author: {
        name: "Bob Miller 4",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 4"`,
    },
  ],
};
export const DarkWithoutImage = Template.bind({});
DarkWithoutImage.args = {
  type: "dark",
  quotes: [
    {
      author: {
        name: "Bob Miller",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
    },
    {
      author: {
        name: "Bob Miller 2",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 2"`,
    },
    {
      author: {
        name: "Bob Miller 3",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 3"`,
    },
  ],
};

export const Light = Template.bind({});
Light.args = {
  type: "light",
  quotes: [
    {
      author: {
        image: "https://api.lorem.space/image?w=470&h=470",
        name: "Bob Miller",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
    },
    {
      author: {
        image: "https://api.lorem.space/image?w=470&h=470",
        name: "Bob Miller 2",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 2"`,
    },
    {
      author: {
        image: "https://api.lorem.space/image?w=470&h=470",
        name: "Bob Miller 3",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 3"`,
    },
    {
      author: {
        image: "https://api.lorem.space/image?w=470&h=470",
        name: "Bob Miller 4",
        title: "Managing Partner, Toyota.",
        location: "Huntington Beach",
      },
      quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier - 4"`,
    },
  ],
};
