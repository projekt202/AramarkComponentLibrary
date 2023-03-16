import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { ArrowLinkComponent } from "../../../shared/components/arrow-link/arrow-link.component";
import { FullwidthImageCardComponent } from "../../../shared/components/fullwidth-image-card/fullwidth-image-card.component";
import { FullwidthImageCardCta } from "../../../shared/components/fullwidth-image-card/fullwidth-image-card.model";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { FullwidthImageCardColumnsComponent } from "./fullwidth-image-card-columns.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  title: "Fullwidth Image Card Columns",
  component: FullwidthImageCardColumnsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FullwidthImageCardComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ArrowLinkComponent,
      ],
      imports: [LazyLoadImageModule],
    }),
  ],
} as Meta;

const Template: Story<FullwidthImageCardColumnsComponent> = (
  args: FullwidthImageCardColumnsComponent
) => ({
  props: args,
});

const cards = [
  {
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    title: "John Zillmer",
    subtitle: "Chief Executive Officer",
  },
  {
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    title: "John Zillmer",
    subtitle: "Chief Executive Officer",
    cta: {
      variant: "link" as FullwidthImageCardCta["variant"],
      config: {
        title: "Learn more",
        url: "https://www.google.com",
      },
    },
  },
  {
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    title: "John Zillmer",
    subtitle: "Chief Executive Officer",
    cta: {
      variant: "arrow-link" as FullwidthImageCardCta["variant"],
      config: {
        title: "Learn more",
        url: "https://www.google.com",
      },
    },
  },
  {
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    title: "John Zillmer",
  },
  {
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    title: "John Zillmer",
    subtitle: "Chief Executive Officer",
    text: "Lorem incididunt enim aliquip laborum ullamco in ullamco commodo. Commodo elit eiusmod quis cillum.",
    cta: {
      variant: "link" as FullwidthImageCardCta["variant"],
      config: {
        title: "Learn more",
        url: "https://www.google.com",
      },
    },
  },
  {
    imgUrl: "https://api.lorem.space/image?w=1366&h=470",
    title: "John Zillmer",
    cta: {
      variant: "arrow-link" as FullwidthImageCardCta["variant"],
      config: {
        title: "Learn more",
        url: "https://www.google.com",
      },
    },
  },
];

export const White = Template.bind({});
White.args = {
  bg: "white",
  cards,
};

export const Black = Template.bind({});
Black.args = {
  bg: "black",
  cards,
};

export const Gray = Template.bind({});
Gray.args = {
  bg: "gray",
  cards,
};
