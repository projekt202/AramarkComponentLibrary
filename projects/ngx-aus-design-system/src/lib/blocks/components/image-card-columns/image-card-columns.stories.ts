import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { SupportCardComponent } from "../../../shared/components/support-card/support-card.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { ImageCardColumnsComponent } from "./image-card-columns.component";

export default {
  title: "Image Card Columns",
  component: ImageCardColumnsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        SupportCardComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ImageComponent,
        ButtonComponent,
      ],
      imports: [LazyLoadImageModule],
    }),
  ],
} as Meta;

const Template: Story<ImageCardColumnsComponent> = (
  args: ImageCardColumnsComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  bg: "white",
  cards: [
    {
      imgUrl: "https://api.lorem.space/image?w=300&h=300",
      pretitle: "Prospective Customer",
      title: "Talk to a member of our sales team",
      text: "We’ll discuss your needs and help you find the right product delivery services for you.",
      btn: {
        target: "_blank",
        title: "Contact Sales",
        url: "https://www.google.com",
        variant: "red",
      },
    },
    {
      imgUrl: "https://api.lorem.space/image?w=350&h=350",
      title: "Talk to a member of our sales team",
      text: "We’ll discuss your needs and help you find the right product delivery services for you.",
      btn: {
        target: "_blank",
        title: "Contact Sales",
        url: "https://www.google.com",
        variant: "red",
      },
      secondaryBtn: {
        target: "_blank",
        title: "View & Pay Invoices",
        url: "https://www.google.com",
        variant: "outline",
      },
    },
  ],
};

export const OneCard = Template.bind({});
OneCard.args = {
  bg: "gray",
  cards: [
    {
      imgUrl: "https://api.lorem.space/image?w=300&h=300",
      pretitle: "Prospective Customer",
      title: "Talk to a member of our sales team",
      text: "We’ll discuss your needs and help you find the right product delivery services for you.",
      btn: {
        target: "_blank",
        title: "Contact Sales",
        url: "https://www.google.com",
        variant: "red",
      },
    },
  ],
};

export const Icons = Template.bind({});
Icons.args = {
  bg: "black",
  cards: [
    {
      pretitle: "Prospective Customer",
      title: "Talk to a member of our sales team",
      text: "We’ll discuss your needs and help you find the right product delivery services for you.",
      icon: {
        name: "box",
      },
      btn: {
        target: "_blank",
        title: "Contact Sales",
        url: "https://www.google.com",
        variant: "red",
      },
    },
    {
      pretitle: "Prospective Customer",
      title: "Talk to a member of our sales team",
      text: "We’ll discuss your needs and help you find the right product delivery services for you.",
      icon: {
        name: "box",
      },
      btn: {
        target: "_blank",
        title: "Contact Sales",
        url: "https://www.google.com",
        variant: "red",
      },
    },
    {
      pretitle: "Prospective Customer",
      title: "Talk to a member of our sales team",
      text: "We’ll discuss your needs and help you find the right product delivery services for you.",
      icon: {
        name: "box",
      },
      btn: {
        target: "_blank",
        title: "Contact Sales",
        url: "https://www.google.com",
        variant: "red",
      },
    },
  ],
};
