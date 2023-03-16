import { Array2StringPipe } from './../../../shared/pipes/array2string/array2string.pipe';
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { QuoteComponent } from "./quote.component";

export default {
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, SanitizePipe, Array2StringPipe],
      imports: [LazyLoadImageModule],
    }),
  ],
  component: QuoteComponent,
  title: "Quote",
} as Meta;

const Template: Story<QuoteComponent> = (args: QuoteComponent) => ({
  props: args,
});

export const Dark = Template.bind({});
Dark.args = {
  type: "dark",
  author: {
    image: "https://api.lorem.space/image?w=470&h=470",
    name: "Bob Miller",
    title: "Managing Partner, Toyota.",
    location: "Huntington Beach",
  },
  quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
};

export const Light = Template.bind({});
Light.args = {
  type: "light",
  author: {
    image: "https://api.lorem.space/image?w=470&h=470",
    name: "Bob Miller",
    title: "Managing Partner, Toyota.",
    location: "Huntington Beach",
  },
  quoteText: `"One of the greatest things about Aramark, is it's a hassle-free service. Mats, towels, jackets and uniforms are always clean and delivered on time.It's one less thing I have to worry about! Aramark makes my life so much easier"`,
};
