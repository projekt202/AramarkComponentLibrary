import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { LocationInfoComponent } from "./location-info.component";

export default {
  title: "Location Info",
  component: LocationInfoComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LocationInfoComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
        ButtonComponent,
        ImageComponent,
        WysiwygComponent,
      ],
      imports: [LazyLoadImageModule],
    }),
  ],
} as Meta;

const Template: Story<LocationInfoComponent> = (
  args: LocationInfoComponent
) => ({
  props: args,
});

export const SingleImage = Template.bind({});
SingleImage.args = {
  type: "single-image",
  heading: "Lawrence, MA",
  subheading: "Aramark Uniform Services",
  subtitle: "We're in your area.",
  description:
    "<p>The Aramark Lawrence, MA location offers the full suite of Aramark services, delivering exceptional quality products to businesses just like yours – every single day! From uniforms and floor mats to restroom supplies and beyond, get what you need, when you need it from your local team. Contact the Lawrence location to build a service package to meet your unique needs. Our highly responsive, experienced team helps you every step of the way, whether you're getting set up with a needs assessment, or making week-to-week adjustments.</p>",
  btnQuoteUrl: "https://www.google.com",
  btnSupportUrl: "https://www.google.com",
  images: ["https://api.lorem.space/image?w=1200&h=700"],
};

export const Grid = Template.bind({});
Grid.args = {
  type: "grid",
  heading: "Lawrence, MA",
  subheading: "Aramark Uniform Services",
  subtitle: "We're in your area.",
  description:
    "<p>The Aramark Lawrence, MA location offers the full suite of Aramark services, delivering exceptional quality products to businesses just like yours – every single day! From uniforms and floor mats to restroom supplies and beyond, get what you need, when you need it from your local team. Contact the Lawrence location to build a service package to meet your unique needs. Our highly responsive, experienced team helps you every step of the way, whether you're getting set up with a needs assessment, or making week-to-week adjustments.</p>",
  btnQuoteUrl: "https://www.google.com",
  btnSupportUrl: "https://www.google.com",
  images: [
    "https://api.lorem.space/image?w=1366&h=470",
    "https://api.lorem.space/image?w=500&h=500",
    "https://api.lorem.space/image?w=600&h=600",
  ],
};
