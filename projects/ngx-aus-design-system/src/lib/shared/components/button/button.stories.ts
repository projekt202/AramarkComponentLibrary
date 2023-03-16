import { Array2StringPipeModule } from "./../../pipes/array2string/array2string.module";
import { SanitizePipeModule } from "./../../pipes/sanitize/sanitize.module";
import { TypographyModule } from "./../typography/typography.module";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { IconComponent } from "../icon/icon.component";
import { ButtonComponent } from "./button.component";

export default {
  title: "Components/Shared/Button",
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

export const LegacyWhite = Template.bind({});
LegacyWhite.args = {
  text: "Get in touch with a team member",
  variant: "white",
  route: "/test",
  target: "_self",
};

export const LegacyBlack = Template.bind({});
LegacyBlack.args = {
  text: "Get in touch with a team member",
  variant: "black",
  route: "/test",
  target: "_self",
};

export const LegacyRed = Template.bind({});
LegacyRed.args = {
  text: "Get in touch with a team member",
  variant: "red",
  route: "/test",
  target: "_self",
};

export const LegacyExternalLink = Template.bind({});
LegacyExternalLink.args = {
  text: "Get in touch with a team member",
  variant: "red",
  href: "https://www.google.com",
  target: "_blank",
};

export const LegacyDisabled = Template.bind({});
LegacyDisabled.args = {
  disabled: true,
  text: "Get in touch with a team member",
  variant: "black",
  href: "https://www.google.com",
  target: "_blank",
};

export const LegacyIcon = Template.bind({});
LegacyIcon.args = {
  text: "Get in touch with a team member",
  variant: "black",
  href: "https://www.google.com",
  target: "_blank",
  icon: {
    name: "quote",
    position: "left",
  },
};

export const LegacyIconDisabled = Template.bind({});
LegacyIconDisabled.args = {
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

export const LegacyTransparent = Template.bind({});
LegacyTransparent.args = {
  text: "Get in touch with a team member",
  variant: "transparent",
  href: "https://www.google.com",
  target: "_blank",
  icon: {
    name: "pickup",
    position: "left",
  },
};

export const LegacyTransparentDisabled = Template.bind({});
LegacyTransparentDisabled.args = {
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

export const LegacyOutline = Template.bind({});
LegacyOutline.args = {
  text: "Get in touch with a team member",
  variant: "outline",
  href: "https://www.google.com",
  target: "_blank",
  disabled: false,
};

export const LegacyOutlineWithIcon = Template.bind({});
LegacyOutlineWithIcon.args = {
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

export const LegacyOutlineDisabled = Template.bind({});
LegacyOutlineDisabled.args = {
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
