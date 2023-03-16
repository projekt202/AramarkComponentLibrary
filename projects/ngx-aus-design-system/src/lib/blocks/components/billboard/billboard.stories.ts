import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";

import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { BillboardComponent } from "./billboard.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
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
  component: BillboardComponent,
  title: "Components/Blocks/Billboard",
} as Meta;

const Template: Story<BillboardComponent> = (args: BillboardComponent) => ({
  props: args,
});

export const Dark = Template.bind({});
Dark.args = {
  variant: "left-image",
  type: "dark",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Light = Template.bind({});
Light.args = {
  variant: "left-image",
  type: "light",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const DarkRightImage = Template.bind({});
DarkRightImage.args = {
  variant: "right-image",
  type: "dark",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const LightRightImage = Template.bind({});
LightRightImage.args = {
  variant: "right-image",
  type: "light",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Dark3_2 = Template.bind({});
Dark3_2.args = {
  variant: "left-image",
  type: "dark",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Light3_2 = Template.bind({});
Light3_2.args = {
  variant: "left-image",
  type: "light",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Dark3_2RightImage = Template.bind({});
Dark3_2RightImage.args = {
  variant: "right-image",
  type: "dark",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Light3_2RightImage = Template.bind({});
Light3_2RightImage.args = {
  variant: "right-image",
  type: "light",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  iconName: "package",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const DarkWithoutIcon = Template.bind({});
DarkWithoutIcon.args = {
  variant: "left-image",
  type: "dark",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const LightWithoutIcon = Template.bind({});
LightWithoutIcon.args = {
  variant: "left-image",
  type: "light",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const DarkRightImageWithoutIcon = Template.bind({});
DarkRightImageWithoutIcon.args = {
  variant: "right-image",
  type: "dark",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const LightRightImageWithoutIcon = Template.bind({});
LightRightImageWithoutIcon.args = {
  variant: "right-image",
  type: "light",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Dark3_2WithoutIcon = Template.bind({});
Dark3_2WithoutIcon.args = {
  variant: "left-image",
  type: "dark",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Light3_2WithoutIcon = Template.bind({});
Light3_2WithoutIcon.args = {
  variant: "left-image",
  type: "light",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Dark3_2RightImageWithoutIcon = Template.bind({});
Dark3_2RightImageWithoutIcon.args = {
  variant: "right-image",
  type: "dark",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const Light3_2RightImageWithoutIcon = Template.bind({});
Light3_2RightImageWithoutIcon.args = {
  variant: "right-image",
  type: "light",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
};

export const DarkWithoutIconButton = Template.bind({});
DarkWithoutIconButton.args = {
  variant: "left-image",
  type: "dark",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "white",
    href: "https://www.google.com",
  },
};

export const LightWithoutIconButton = Template.bind({});
LightWithoutIconButton.args = {
  variant: "left-image",
  type: "light",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "red",
    route: "/test",
  },
};

export const DarkRightImageWithoutIconButton = Template.bind({});
DarkRightImageWithoutIconButton.args = {
  variant: "right-image",
  type: "dark",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "white",
    href: "https://www.google.com",
  },
};

export const LightRightImageWithoutIconButton = Template.bind({});
LightRightImageWithoutIconButton.args = {
  variant: "right-image",
  type: "light",
  column: "50-50",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "red",
    route: "/test",
  },
};

export const Dark3_2WithoutIconButton = Template.bind({});
Dark3_2WithoutIconButton.args = {
  variant: "left-image",
  type: "dark",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "red",
    route: "/test",
  },
};

export const Light3_2WithoutIconButton = Template.bind({});
Light3_2WithoutIconButton.args = {
  variant: "left-image",
  type: "light",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "red",
    route: "/test",
  },
};

export const Dark3_2RightImageWithoutIconButton = Template.bind({});
Dark3_2RightImageWithoutIconButton.args = {
  variant: "right-image",
  type: "dark",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "white",
    route: "/test",
  },
};

export const Light3_2RightImageWithoutIconButton = Template.bind({});
Light3_2RightImageWithoutIconButton.args = {
  variant: "right-image",
  type: "light",
  column: "3-2",
  imgUrl: "https://api.lorem.space/image?w=1366&h=470",
  header: "Create a clean, safe workplace",
  bodyText:
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  btn: {
    text: "Why Aramark",
    variant: "red",
    route: "/test",
  },
};
