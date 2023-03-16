import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { SwiperModule } from "swiper/angular";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { CustomerCardComponent } from "../../../shared/components/customer-card/customer-card.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { TimeAgoPipe } from "../../../shared/pipes/time-ago/time-ago.pipe";
import { ReviewsCardsComponent } from "./reviews-cards.component";

export default {
  title: "Reviews Cards",
  component: ReviewsCardsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CustomerCardComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        CarouselComponent,
        TimeAgoPipe,
      ],
      imports: [SwiperModule],
    }),
  ],
} as Meta;

const Template: Story<ReviewsCardsComponent> = (
  args: ReviewsCardsComponent
) => ({
  props: args,
});

const reviews = [];
for (let i = 0; i < 3; i += 1) {
  reviews.push({
    text: "One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.",
    title: "Toyota of Huntington Beach",
    href: "https://www.google.com",
    date: "2022/09/31",
    rating: 5,
  });
}

export const Default = Template.bind({});
Default.args = {
  title: "Aramark Customer Reviews",
  reviews,
};
