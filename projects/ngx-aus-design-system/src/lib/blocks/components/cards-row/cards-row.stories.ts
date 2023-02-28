import { RouterTestingModule } from "@angular/router/testing";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { SwiperModule } from "swiper/angular";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import {
  ButtonComponentVariants,
  ButtonComponentTarget,
} from "../../../shared/components/button/button.component.model";
import { CardComponent } from "../../../shared/components/card/card.component";
import { CardComponentVariants } from "../../../shared/components/card/card.model";
import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { IconComponentNames } from "../../../shared/components/icon/icon.model";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { CardsRowComponent } from "./cards-row.component";

export default {
  title: "CardsRow",
  component: CardsRowComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        CardsRowComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        ButtonComponent,
        CardComponent,
        CarouselComponent,
      ],
      imports: [RouterTestingModule, SwiperModule],
    }),
  ],
} as Meta;

const Template: Story<CardsRowComponent> = (args: CardsRowComponent) => ({
  props: args,
});

const mock = {
  variant: "white" as CardComponentVariants,
  icon: "package" as IconComponentNames,
  title: "Uniform",
  text: "Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms",
  button: {
    variant: "black" as ButtonComponentVariants,
    text: "Get a Quote",
    href: "https://www.google.com",
    target: "_blank" as ButtonComponentTarget,
  },
};
const mockAlt = {
  variant: "transparent" as CardComponentVariants,
  icon: "package" as IconComponentNames,
  title: "Uniform",
  text: "Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms",
  button: {
    variant: "black" as ButtonComponentVariants,
    text: "Get a Quote",
    href: "https://www.google.com",
    target: "_blank" as ButtonComponentTarget,
  },
};
const mockAlt2 = {
  variant: "white" as CardComponentVariants,
  icon: "package" as IconComponentNames,
  title: "Uniform",
  text: "Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms",
};
const mockAlt3 = {
  variant: "gray" as CardComponentVariants,
  icon: "package" as IconComponentNames,
  title: "Uniform",
  text: "Establish professionalism with your customers, improve employee morale and boost your brand identity with crisp uniforms",
};
const data = [];
const dataAlt = [];
const dataAlt2 = [];
const dataAlt3 = [];
for (let i = 0; i < 50; i++) {
  data.push(mock);
  dataAlt.push(mockAlt);
  dataAlt2.push(mockAlt2);
  dataAlt3.push(mockAlt3);
}

export const Black = Template.bind({});
Black.args = {
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: data.slice(0, 13),
  button: {
    text: "Get in touch with a team member",
    route: "/test",
    variant: "red",
  },
};

export const BlackWhiteButton = Template.bind({});
BlackWhiteButton.args = {
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: data.slice(0, 3),
  button: {
    text: "Get in touch with a team member",
    route: "/test",
    variant: "white",
  },
};

export const White = Template.bind({});
White.args = {
  variant: "white",
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: dataAlt.slice(0, 5),
  button: {
    text: "Get in touch with a team member",
    route: "/test",
    variant: "red",
  },
};

export const GrayCards = Template.bind({});
GrayCards.args = {
  variant: "white",
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: dataAlt3.slice(0, 5),
  button: {
    text: "Get in touch with a team member",
    route: "/test",
    variant: "red",
  },
};

export const BlackNoButtons = Template.bind({});
BlackNoButtons.args = {
  variant: "black",
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: dataAlt2.slice(0, 4),
};

export const WhiteBlackButton = Template.bind({});
WhiteBlackButton.args = {
  variant: "white",
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: dataAlt.slice(0, 8),
  button: {
    text: "Get in touch with a team member",
    route: "/test",
    variant: "black",
  },
};

export const NoButton = Template.bind({});
NoButton.args = {
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: data.slice(0, 2),
};

export const NoCardButton = Template.bind({});
NoCardButton.args = {
  title: "The Essentials",
  text: "Mix and match from a variety of products and service offerings.",
  data: dataAlt2.slice(0, 6),
  button: {
    text: "Get in touch with a team member",
    route: "/test",
    variant: "red",
  },
};
