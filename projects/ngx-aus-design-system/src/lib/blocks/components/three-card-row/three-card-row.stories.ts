import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { SwiperModule } from "swiper/angular";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { IconComponentNames } from "../../../shared/components/icon/icon.model";
import { StatementCardComponent } from "../../../shared/components/statement-card/statement-card.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { ThreeCardRowComponent } from "./three-card-row.component";

export default {
  title: "Three Card Row",
  component: ThreeCardRowComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        StatementCardComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        CarouselComponent,
      ],
      imports: [SwiperModule],
    }),
  ],
} as Meta;

const Template: Story<ThreeCardRowComponent> = (
  args: ThreeCardRowComponent
) => ({
  props: args,
});

const cards = [
  {
    icon: "caring" as IconComponentNames,
    title: "Selecting the right uniforms",
    text: "It starts with a conversation between you and an industry expert. We learn about your business and identify what uniforms and delivery cadence will have you operating at peak efficiency and set your business apart from the competition.",
  },
  {
    icon: "package" as IconComponentNames,
    title: "Customized for your brand",
    text: "Right down to the thread count, we customize your order with the right uniforms that match your team's usage, size and personalize them to your brand by adding logos, names or other customizations.",
  },
  {
    icon: "delivery" as IconComponentNames,
    title: "Deliver. Pick-up. Clean. Repeat.",
    text: "Your dedicated Aramark service member visits weekly replacing your used uniforms with freshly laundered uniforms using our scientifically formulated wash process. We routinely inspect each uniform to ensure every stich and seam stays in top form.",
  },
];

export const Black = Template.bind({});
Black.args = {
  variant: "black",
  title: "How It Works",
  cards,
};

export const Gray = Template.bind({});
Gray.args = {
  variant: "gray",
  title: "How It Works",
  cards,
};

export const White = Template.bind({});
White.args = {
  variant: "white",
  title: "How It Works",
  cards,
};

export const Animated = Template.bind({});
Animated.args = {
  animated: true,
  variant: "white",
  title: "How It Works",
  cards,
};
