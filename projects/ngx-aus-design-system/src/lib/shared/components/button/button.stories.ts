import { Array2StringPipeModule } from "./../../pipes/array2string/array2string.module";
import { SanitizePipeModule } from "./../../pipes/sanitize/sanitize.module";
import { TypographyModule } from "./../typography/typography.module";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { IconComponent } from "../icon/icon.component";
import { ButtonComponent } from "./button.component";

export default {
  title: "Button",
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, IconComponent],
      imports: [
        RouterTestingModule,
        NgxSmoothScrollModule,
        TypographyModule,
        SanitizePipeModule,
        Array2StringPipeModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const White = Template.bind({});
White.args = {
  text: "Get in touch with a team member",
  variant: "white",
  route: "/test",
  target: "_self",
};

export const Black = Template.bind({});
Black.args = {
  text: "Get in touch with a team member",
  variant: "black",
  route: "/test",
  target: "_self",
};

export const Red = Template.bind({});
Red.args = {
  text: "Get in touch with a team member",
  variant: "red",
  route: "/test",
  target: "_self",
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  text: "Get in touch with a team member",
  variant: "red",
  href: "https://www.google.com",
  target: "_blank",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: "Get in touch with a team member",
  variant: "black",
  href: "https://www.google.com",
  target: "_blank",
};

export const Icon = Template.bind({});
Icon.args = {
  text: "Get in touch with a team member",
  variant: "black",
  href: "https://www.google.com",
  target: "_blank",
  icon: {
    name: "quote",
    position: "left",
  },
};

export const IconDisabled = Template.bind({});
IconDisabled.args = {
  text: "Get in touch with a team member",
  variant: "black",
  href: "https://www.google.com",
  target: "_blank",
  icon: {
    name: "pickup",
    position: "left",
  },
  disabled: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
  text: "Get in touch with a team member",
  variant: "transparent",
  href: "https://www.google.com",
  target: "_blank",
  icon: {
    name: "pickup",
    position: "left",
  },
};

export const TransparentDisabled = Template.bind({});
TransparentDisabled.args = {
  text: "Get in touch with a team member",
  variant: "transparent",
  href: "https://www.google.com",
  target: "_blank",
  icon: {
    name: "pickup",
    position: "left",
  },
  disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
  text: "Get in touch with a team member",
  variant: "outline",
  href: "https://www.google.com",
  target: "_blank",
  disabled: false,
};

export const OutlineWithIcon = Template.bind({});
OutlineWithIcon.args = {
  text: "Get in touch with a team member",
  variant: "outline",
  href: "https://www.google.com",
  target: "_blank",
  icon: {
    name: "pickup",
    position: "left",
  },
  disabled: false,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  text: "Get in touch with a team member",
  variant: "outline",
  href: "https://www.google.com",
  target: "_blank",
  disabled: true,
};

export const PrimaryBrand = Template.bind({});
PrimaryBrand.args = {
  text: "Get in touch with a team member",
  variant: "primary-brand",
  route: "/test",
  size: "large",
};

export const PrimaryNeutral = Template.bind({});
PrimaryNeutral.args = {
  text: "Get in touch with a team member",
  variant: "primary-neutral",
  route: "/test",
  size: "large",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Get in touch with a team member",
  variant: "secondary",
  route: "/test",
  size: "medium",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: "Get in touch with a team member",
  variant: "tertiary",
  route: "/test",
  size: "small",
};
