import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { ArrowLinkComponent } from "../../../shared/components/arrow-link/arrow-link.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { WysiwygComponent } from "../../../shared/components/wysiwyg/wysiwyg.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { BannerBarComponent } from "./banner-bar.component";

export default {
  title: "Banner Bar",
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        IconComponent,
        WysiwygComponent,
        SanitizePipe,
        Array2StringPipe,
        ArrowLinkComponent,
        ButtonComponent,
      ],
    }),
  ],
  component: BannerBarComponent,
} as Meta;

const Template: Story<BannerBarComponent> = (args: BannerBarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: "landline-phone",
  background: "white",
  content:
    '<h6>To Speak To A Representative, Call <a href="tel:18002726275">1-800-ARAMARK.</a></h6>',
};

export const FormattedIconOnTop = Template.bind({});
FormattedIconOnTop.args = {
  icon: "landline-phone",
  background: "gray",
  iconOnTop: true,
  content:
    '<h6>To <strong>Speak</strong> To A <em>Representative</em>, Call <a href="tel:18002726275">1-800-ARAMARK.</a> Lorem ipsum dolor sit amet consectetur adipiscing elit!</h6>',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  background: "black",
  content:
    '<h6>To Speak To A Representative, Call <a href="tel:18002726275">1-800-ARAMARK.</a></h6>',
};

export const WithArrowLink = Template.bind({});
WithArrowLink.args = {
  icon: "landline-phone",
  background: "white",
  noCard: true,
  content:
    '<h6>To Speak To A Representative, Call <a href="tel:18002726275" class="armk-link-red">1-800-ARAMARK.</a></h6>',
  link: {
    target: "_self",
    title: "Visit Store",
    url: "https://www.google.com",
    underline: true,
  },
};

export const WithButton = Template.bind({});
WithButton.args = {
  icon: "landline-phone",
  background: "white",
  noCard: true,
  content:
    '<h6>To Speak To A Representative, Call <a href="tel:18002726275" class="armk-link-red">1-800-ARAMARK.</a></h6>',
  btn: {
    target: "_self",
    variant: "black",
    title: "Visit Store",
    url: "https://www.google.com",
  },
};
