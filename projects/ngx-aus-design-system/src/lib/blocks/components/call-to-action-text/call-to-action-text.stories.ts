import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { NgxParallaxScrollModule } from "ngx-parallax-scroll";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";

import { CallToActionTextComponent } from "./call-to-action-text.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { ImageComponent } from "../../../shared/components/image/image.component";
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
        ImageComponent,
      ],
      imports: [
        CommonModule,
        LazyLoadImageModule,
        NgxParallaxScrollModule,
        NgxSmoothScrollModule,
      ],
    }),
  ],
  component: CallToActionTextComponent,
  title: "Components/Blocks/Call to action - text",
} as Meta;

const Template: Story<CallToActionTextComponent> = (
  args: CallToActionTextComponent
) => ({
  props: args,
});

export const Dark = Template.bind({});
Dark.args = {
  type: "dark",
  iconName: "box",
  preHeader: "How can we help you?",
  header:
    "Tell us a bit about yourself and your needs. Our local representatives are ready to help you understand the available options.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};
export const DarkWithoutButton = Template.bind({});
DarkWithoutButton.args = {
  type: "dark",
  divider: true,
  variant: "with-body-text",
  bodyText:
    "Hand-select the towels that best suit your needs and cleaning applications. View and filter product options below to start customizing your service plan.",
  header: "Towels That Help Get The Job Done",
};
export const Light = Template.bind({});
Light.args = {
  type: "light",
  iconName: "quote",
  preHeader: "How can we help you?",
  header:
    "Tell us a bit about yourself and your needs. Our local representatives are ready to help you understand the available options.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};
export const LightWithoutButton = Template.bind({});
LightWithoutButton.args = {
  type: "light",
  divider: true,
  variant: "with-body-text",
  bodyText:
    "Hand-select the towels that best suit your needs and cleaning applications. View and filter product options below to start customizing your service plan.",
  header: "Towels That Help Get The Job Done",
};

export const DarkWithoutIcon = Template.bind({});
DarkWithoutIcon.args = {
  type: "dark",
  preHeader: "How can we help you?",
  header:
    "Tell us a bit about yourself and your needs. Our local representatives are ready to help you understand the available options.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};
export const LightWithoutIcon = Template.bind({});
LightWithoutIcon.args = {
  type: "light",
  preHeader: "How can we help you?",
  header:
    "Tell us a bit about yourself and your needs. Our local representatives are ready to help you understand the available options.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};

export const DarkWithBodyText = Template.bind({});
DarkWithBodyText.args = {
  variant: "with-body-text",
  type: "dark",
  iconName: "quote",
  preHeader: "How can we help you?",
  header: "Towels That Help Get The Job Done",
  bodyText:
    "Hand-select the towels that best suit your needs and cleaning applications. View and filter product options below to start customizing your service plan.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};

export const DarkBackgroundImage = Template.bind({});
DarkBackgroundImage.args = {
  variant: "bg-img",
  type: "dark",
  textColor: "white",
  preHeaderItalic: true,
  preHeader: "Aramark Flexfitᵀᴹ",
  header: "Let Your Team Flex to Whatever the Day Throws at Them",
  bodyText:
    "Men and women's premium, performance apparel line designed to be responsive to the unique demands of today's workforce.",
  responsiveImages: {
    default_background: "https://i.postimg.cc/B6dnZJfj/Hero-V2-Desktop.png",
    tablet_background: "https://i.postimg.cc/MKj59tTS/hero.jpg",
  },
  logo: {
    url: "https://www.google.com",
    target: "_blank",
  },
  parallax: false,
  buttons: [
    {
      text: "View Collection",
      href: "#",
      target: "_blank",
      variant: "white",
    },
    {
      variant: "red",
      text: "Get Rental Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const DarkAnimated = Template.bind({});
DarkAnimated.args = {
  animated: true,
  variant: "bg-img",
  type: "dark",
  textColor: "white",
  preHeaderItalic: true,
  preHeader: "Aramark Flexfitᵀᴹ",
  header: "Let Your Team Flex to Whatever the Day Throws at Them",
  bodyText:
    "Men and women's premium, performance apparel line designed to be responsive to the unique demands of today's workforce.",
  responsiveImages: {
    default_background: "https://i.postimg.cc/B6dnZJfj/Hero-V2-Desktop.png",
    tablet_background: "https://i.postimg.cc/MKj59tTS/hero.jpg",
  },
  logo: {
    url: "https://www.google.com",
    target: "_blank",
  },
  parallax: false,
  buttons: [
    {
      text: "View Collection",
      href: "#",
      target: "_blank",
      variant: "white",
    },
    {
      variant: "red",
      text: "Get Rental Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const DarkBackgroundImageLeftAligned = Template.bind({});
DarkBackgroundImageLeftAligned.args = {
  variant: "bg-img",
  type: "dark",
  alignment: "left",
  header: "Aramark Flexfitᵀᴹ",
  headerItalic: true,
  bodyText: "The Official Uniform of the Working Athlete",
  responsiveImages: {
    default_background: "https://i.postimg.cc/B6dnZJfj/Hero-V2-Desktop.png",
    tablet_background: "https://i.postimg.cc/MKj59tTS/hero.jpg",
    desktop_background:
      "https://i.postimg.cc/mZPLY4V4/Full-image-background-with-info-1.jpg",
  },
  parallax: false,
  buttons: [
    {
      text: "View Collection",
      href: "#",
      target: "_blank",
      variant: "white",
    },
    {
      variant: "red",
      text: "Get Rental Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const LightBackgroundImage = Template.bind({});
LightBackgroundImage.args = {
  variant: "bg-img",
  type: "light",
  preHeader: "Aramark Flexfitᵀᴹ",
  header: "Let Your Team Flex to Whatever the Day Throws at Them",
  bodyText:
    "Men and women's premium, performance apparel line designed to be responsive to the unique demands of today's workforce.",
  responsiveImages: {
    default_background: "https://i.postimg.cc/Fzcsjt3N/Hero-V2-Desktop.jpg",
    tablet_background: "https://i.postimg.cc/vHN67yJw/hero.jpg",
  },
  logo: {
    url: "https://www.google.com",
    target: "_blank",
  },
  parallax: false,
  buttons: [
    {
      text: "View Collection",
      href: "#",
      target: "_blank",
      variant: "black",
    },
    {
      variant: "red",
      text: "Get Rental Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const LightBackgroundImageLeftAligned = Template.bind({});
LightBackgroundImageLeftAligned.args = {
  variant: "bg-img",
  type: "light",
  alignment: "left",
  header: "Enhanced & High Visibility Uniforms",
  bodyText: "Lorem ipsum dolor sit amet",
  responsiveImages: {
    default_background: "https://i.postimg.cc/Fzcsjt3N/Hero-V2-Desktop.jpg",
    tablet_background: "https://i.postimg.cc/vHN67yJw/hero.jpg",
    desktop_background:
      "https://i.postimg.cc/pTydhpPF/Full-image-background-with-info-1.jpg",
  },
  parallax: false,
  buttons: [
    {
      text: "View Collection",
      href: "#",
      target: "_blank",
      variant: "outline",
    },
    {
      variant: "red",
      text: "Get Rental Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const LightBackgroundImageLeftAltAligned = Template.bind({});
LightBackgroundImageLeftAltAligned.args = {
  variant: "bg-img",
  type: "light",
  alignment: "left-alt",
  preHeader: "Aramark Towels",
  header: "Let Your Team Flex to Whatever the Day Throws at Them",
  bodyText:
    "Men and women's premium, performance apparel line designed to be responsive to the unique demands of today's workforce.",
  responsiveImages: {
    default_background: "https://api.lorem.space/image?w=1366&h=992",
  },
  logo: {
    url: "https://www.google.com",
    target: "_blank",
  },
  parallax: false,
  buttons: [
    {
      text: "View Collection",
      href: "#",
      target: "_blank",
      variant: "outline",
    },
    {
      variant: "red",
      text: "Get Rental Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const DarkBackgroundImageRightAltAligned = Template.bind({});
DarkBackgroundImageRightAltAligned.args = {
  variant: "bg-img",
  type: "dark",
  alignment: "right-alt",
  header: "Let Your Team Flex to Whatever the Day Throws at Them",
  bodyText:
    "Men and women's premium, performance apparel line designed to be responsive to the unique demands of today's workforce.",
  responsiveImages: {
    default_background: "https://api.lorem.space/image?w=1366&h=992",
  },
  parallax: false,
  buttons: [
    {
      text: "View Collection",
      href: "#",
      target: "_blank",
      variant: "outline",
    },
    {
      variant: "red",
      text: "Get Rental Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const DarkBackgroundImageCenterAltAligned = Template.bind({});
DarkBackgroundImageCenterAltAligned.args = {
  variant: "bg-img",
  type: "dark",
  alignment: "center-alt",
  preHeaderItalic: false,
  preHeader: "CUSTOM UNIFORM SERVICES",
  header: "Professionally Laundered, Stocked Weekly",
  responsiveImages: {
    default_background: "https://api.lorem.space/image?w=1366&h=992",
  },
  parallax: false,
  buttons: [
    {
      text: "View Products",
      href: "#",
      target: "_blank",
      variant: "white",
    },
    {
      variant: "red",
      text: "Request a Quote",
      href: "#",
      target: "_blank",
    },
  ],
};

export const LightWithBodyText = Template.bind({});
LightWithBodyText.args = {
  variant: "with-body-text",
  type: "light",
  iconName: "quote",
  preHeader: "How can we help you?",
  header: "Towels That Help Get The Job Done",
  bodyText:
    "Hand-select the towels that best suit your needs and cleaning applications. View and filter product options below to start customizing your service plan.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};

export const LightWithDivider = Template.bind({});
LightWithDivider.args = {
  divider: true,
  variant: "with-body-text",
  type: "light",
  iconName: "quote",
  preHeader: "How can we help you?",
  header: "Towels That Help Get The Job Done",
  bodyText:
    "Hand-select the towels that best suit your needs and cleaning applications. View and filter product options below to start customizing your service plan.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};

export const DarkWithDivider = Template.bind({});
DarkWithDivider.args = {
  divider: true,
  variant: "with-body-text",
  type: "dark",
  iconName: "quote",
  preHeader: "How can we help you?",
  header: "Towels That Help Get The Job Done",
  bodyText:
    "Hand-select the towels that best suit your needs and cleaning applications. View and filter product options below to start customizing your service plan.",
  buttons: [
    {
      variant: "red",
      text: "Get in touch with a team member",
      href: "#",
      target: "_blank",
    },
  ],
};
