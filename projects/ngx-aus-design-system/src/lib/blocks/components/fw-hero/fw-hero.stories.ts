import { RouterTestingModule } from "@angular/router/testing";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { FwHeroComponent } from "./fw-hero.component";

export default {
  title: "FwHero",
  component: FwHeroComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FwHeroComponent,
        IconComponent,
        TypographyComponent,
        SanitizePipe,
        ButtonComponent,
      ],
      imports: [RouterTestingModule, LazyLoadImageModule],
    }),
  ],
} as Meta;

const Template: Story<FwHeroComponent> = (args: FwHeroComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Uniform to Build Your Brand",
    variant: "white",
  },
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Uniform to Build Your Brand",
    variant: "white",
    button: {
      text: "See Our Styles",
      href: "https://www.google.com",
    },
    position: "right",
  },
  banner: {
    text: "Elevate your brand image with new uniforms designed for the way you work and delivered on your schedule.",
    variant: "black",
    button: {
      text: "Get in touch with a team member",
      href: "https://www.google.com",
    },
  },
};

export const BasicWithButton = Template.bind({});
BasicWithButton.args = {
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Uniform to Build Your Brand",
    variant: "white",
    button: {
      text: "See Our Styles",
      href: "https://www.google.com",
    },
  },
};

export const Full = Template.bind({});
Full.args = {
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Uniform to Build Your Brand",
    variant: "white",
    button: {
      text: "See Our Styles",
      href: "https://www.google.com",
    },
  },
  banner: {
    text: "Elevate your brand image with new uniforms designed for the way you work and delivered on your schedule.",
    variant: "black",
    button: {
      text: "Get in touch with a team member",
      href: "https://www.google.com",
    },
  },
};

export const Alternative = Template.bind({});
Alternative.args = {
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Uniform to Build Your Brand",
    variant: "black",
    button: {
      text: "See Our Styles",
      href: "https://www.google.com",
    },
  },
  banner: {
    text: "Elevate your brand image with new uniforms designed for the way you work and delivered on your schedule.",
    variant: "white",
    button: {
      text: "Get in touch with a team member",
      href: "https://www.google.com",
    },
  },
};

export const AllBlack = Template.bind({});
AllBlack.args = {
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Uniform to Build Your Brand",
    variant: "black",
    button: {
      text: "See Our Styles",
      href: "https://www.google.com",
    },
  },
  banner: {
    text: "Elevate your brand image with new uniforms designed for the way you work and delivered on your schedule.",
    variant: "black",
    button: {
      text: "Get in touch with a team member",
      href: "https://www.google.com",
    },
  },
};

export const BannerAndNoButton = Template.bind({});
BannerAndNoButton.args = {
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Uniform to Build Your Brand",
    variant: "white",
  },
  banner: {
    text: "Elevate your brand image with new uniforms designed for the way you work and delivered on your schedule.",
    variant: "white",
    button: {
      text: "Get in touch with a team member",
      href: "https://www.google.com",
    },
  },
};

export const Blurred = Template.bind({});
Blurred.args = {
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Customized Programs",
    variant: "transparent",
    icon: {
      name: "tailor",
    },
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    button: {
      text: "See our programs",
      href: "https://www.google.com",
    },
  },
};

export const BlurredWithSecondaryButton = Template.bind({});
BlurredWithSecondaryButton.args = {
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Customized Programs",
    variant: "transparent",
    icon: {
      name: "tailor",
    },
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    button: {
      text: "See our programs",
      href: "https://www.google.com",
      variant: "red",
    },
    buttonSecondary: {
      text: "Request a Quote",
      href: "https://www.google.com",
      variant: "white",
    },
  },
};

export const BlurredWithMobileSecondaryButton = Template.bind({});
BlurredWithMobileSecondaryButton.args = {
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Customized Programs",
    variant: "transparent",
    icon: {
      name: "tailor",
    },
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    button: {
      text: "See our programs",
      href: "https://www.google.com",
      variant: "red",
    },
    buttonSecondary: {
      text: "Request a Quote",
      href: "https://www.google.com",
      variant: "white",
    },
    onlyMobileSecondaryBtn: true,
  },
};

export const BlurredWithRedButtonBlackIcon = Template.bind({});
BlurredWithRedButtonBlackIcon.args = {
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Customized Programs",
    variant: "transparent",
    icon: {
      name: "tailor",
      variant: "black",
    },
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    button: {
      text: "See our programs",
      href: "https://www.google.com",
      variant: "red",
    },
  },
};

export const BlurredNoIcon = Template.bind({});
BlurredNoIcon.args = {
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  textColor: "black",
  card: {
    title: "Customized Programs",
    variant: "transparent",
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    button: {
      text: "See our programs",
      href: "https://www.google.com",
      variant: "white",
    },
  },
};

export const BlurredNoIconRedButton = Template.bind({});
BlurredNoIconRedButton.args = {
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Customized Programs",
    variant: "transparent",
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    button: {
      text: "See our programs",
      href: "https://www.google.com",
      variant: "red",
    },
  },
};

export const BlurredButNoGradient = Template.bind({});
BlurredButNoGradient.args = {
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Customized Programs",
    gradient: false,
    variant: "transparent",
    icon: {
      name: "tailor",
    },
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    button: {
      text: "See our programs",
      href: "https://www.google.com",
      variant: "white",
    },
  },
};

export const BlurredAnimated = Template.bind({});
BlurredAnimated.args = {
  animated: true,
  variant: "blur",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Customized Programs",
    gradient: false,
    variant: "transparent",
    text: "We tailor our program to meet your needs. We take 50,000 sizes and customize 100,000 products every day — from professional uniforms to mats, towels, and more. We're set up to provide the best solution for you.",
    icon: {
      name: "tailor",
    },
    button: {
      text: "See our programs",
      href: "https://www.google.com",
      variant: "white",
    },
  },
};

export const TransparencyWhite = Template.bind({});
TransparencyWhite.args = {
  variant: "transparency",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Automotive",
    variant: "white",
    text: "Uniforms and Workplace Supplies To Help You Come Back Safer, Cleaner and Healthier",
  },
  banner: {
    text: "View our collection of Automotive products and services.",
    variant: "white",
    centered: true,
    button: {
      text: "View Products",
      href: "https://www.google.com",
      variant: "black",
    },
    buttonSecondary: {
      text: "Request a Quote",
      href: "https://www.google.com",
      variant: "red",
    },
  },
};

export const TransparencyBlack = Template.bind({});
TransparencyBlack.args = {
  variant: "transparency",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Automotive",
    variant: "black",
    text: "Uniforms and Workplace Supplies To Help You Come Back Safer, Cleaner and Healthier",
    position: "left",
  },
  banner: {
    text: "Elevate your brand image with new uniforms designed for the way you work and delivered on your schedule.",
    variant: "black",
    button: {
      text: "Get in touch with a team member",
      href: "https://www.google.com",
      variant: "white",
    },
    buttonSecondary: {
      text: "Request a Quote",
      href: "https://www.google.com",
      variant: "red",
    },
  },
};

export const TransparencyNoBanner = Template.bind({});
TransparencyNoBanner.args = {
  variant: "transparency",
  responsiveImgs: {
    default_background: "https://api.lorem.space/image?w=1366&h=470",
  },
  card: {
    title: "Automotive",
    variant: "white",
    text: "Uniforms and Workplace Supplies To Help You Come Back Safer, Cleaner and Healthier",
    position: "left",
  },
};
