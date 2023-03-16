import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";

import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { InteriorPageHeroComponent } from "./interior-page-hero.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        ButtonComponent,
      ],
      imports: [CommonModule, LazyLoadImageModule],
    }),
  ],
  component: InteriorPageHeroComponent,
  title: "Components/Blocks/Interior Page Hero",
} as Meta;

const Template: Story<InteriorPageHeroComponent> = (
  args: InteriorPageHeroComponent
) => ({
  props: args,
});

export const Dark = Template.bind({});
Dark.args = {
  variant: "right-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const DateRange = Template.bind({});
DateRange.args = {
  variant: "right-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  endDate: "DEC 31, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const Light = Template.bind({});
Light.args = {
  variant: "right-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const DarkLeftImage = Template.bind({});
DarkLeftImage.args = {
  variant: "left-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const LightLeftImage = Template.bind({});
LightLeftImage.args = {
  variant: "left-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const DarkWithButton = Template.bind({});
DarkWithButton.args = {
  variant: "right-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "red",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};

export const LightWithButton = Template.bind({});
LightWithButton.args = {
  variant: "right-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  endDate: "DEC 31, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "black",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};

export const DarkLeftImageWithButton = Template.bind({});
DarkLeftImageWithButton.args = {
  variant: "left-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "red",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};

export const LightLeftImageWithButton = Template.bind({});
LightLeftImageWithButton.args = {
  variant: "left-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  date: "DEC 28, 2022",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "black",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};

export const DarkWithoutDate = Template.bind({});
DarkWithoutDate.args = {
  variant: "right-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const LightWithoutDate = Template.bind({});
LightWithoutDate.args = {
  variant: "right-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const DarkLeftImageWithoutDate = Template.bind({});
DarkLeftImageWithoutDate.args = {
  variant: "left-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const LightLeftImageWithoutDate = Template.bind({});
LightLeftImageWithoutDate.args = {
  variant: "left-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
};

export const DarkWithButtonWithoutDate = Template.bind({});
DarkWithButtonWithoutDate.args = {
  variant: "right-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "red",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};

export const LightWithButtonWithoutDate = Template.bind({});
LightWithButtonWithoutDate.args = {
  variant: "right-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "black",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};

export const DarkLeftImageWithButtonWithoutDate = Template.bind({});
DarkLeftImageWithButtonWithoutDate.args = {
  variant: "left-image",
  type: "dark",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "red",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};

export const LightLeftImageWithButtonWithoutDate = Template.bind({});
LightLeftImageWithButtonWithoutDate.args = {
  variant: "left-image",
  type: "light",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Aramark Uniform services wins two NAUMD image of the year awards",
  button: {
    variant: "black",
    text: "Get in touch with a team member",
    href: "#",
    target: "_blank",
  },
};
