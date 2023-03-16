import { Array2StringPipe } from "./../../pipes/array2string/array2string.pipe";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";
import { TypographyComponent } from "../typography/typography.component";

import { ImageComponent } from "./image.component";

export default {
  title: "Components/Shared/Image",
  component: ImageComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ImageComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
      ],
      imports: [LazyLoadImageModule],
    }),
  ],
} as Meta;

const Template: Story<ImageComponent> = (args: ImageComponent) => ({
  props: args,
});

export const ImgTag = Template.bind({});
ImgTag.args = {
  variant: "image",
  altText: "Alt text goes here",
  src: "https://api.lorem.space/image?w=1366&h=470",
};

export const ImgTagFullwidthWhite = Template.bind({});
ImgTagFullwidthWhite.args = {
  fullwidth: true,
  variant: "image",
  altText: "Alt text goes here",
  src: "https://api.lorem.space/image?w=1366&h=470",
  bgVariant: "white",
  roundedCorners: {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  },
  caption: {
    text: "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    subtitle: "Infographic created by Erica Viscio, OEE.",
  },
};

export const ImgTagFullwidthBlack = Template.bind({});
ImgTagFullwidthBlack.args = {
  fullwidth: true,
  variant: "image",
  altText: "Alt text goes here",
  src: "https://api.lorem.space/image?w=1366&h=470",
  bgVariant: "black",
  roundedCorners: {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  },
  caption: {
    text: "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    subtitle: "Infographic created by Erica Viscio, OEE.",
  },
};

export const ImgTagFullwidthGray = Template.bind({});
ImgTagFullwidthGray.args = {
  fullwidth: true,
  variant: "image",
  altText: "Alt text goes here",
  src: "https://api.lorem.space/image?w=1366&h=470",
  bgVariant: "gray",
  roundedCorners: {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  },
  caption: {
    text: "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    subtitle: "Infographic created by Erica Viscio, OEE.",
  },
};

export const BackgroundImage = Template.bind({});
BackgroundImage.args = {
  variant: "background",
  altText: "Alt text goes here",
  src: "https://api.lorem.space/image?w=1366&h=470",
  roundedCorners: {
    topLeft: 20,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 20,
  },
  backgroundDimensions: {
    mobile: {
      width: "100%",
      height: "100px",
    },
    tablet: {
      width: "200px",
      height: "200px",
    },
    desktop: {
      width: "150px",
      height: "300px",
    },
  },
};
