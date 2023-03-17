import { IconComponent } from "./../icon/icon.component";
import { Array2StringPipe } from "./../../pipes/array2string/array2string.pipe";
import { RouterTestingModule } from "@angular/router/testing";
import { Story, Meta, moduleMetadata } from "@storybook/angular";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";

import { TypographyComponent } from "./typography.component";

export default {
  title: "Components/Shared/Typography",
  component: TypographyComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        IconComponent,
      ],
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  props: args,
});

export const LegacyHeading1 = Template.bind({});
LegacyHeading1.args = {
  variant: "h1",
  text: "Heading 1",
};

export const LegacyHeading1Custom = Template.bind({});
LegacyHeading1Custom.args = {
  variant: "h1",
  weight: "400",
  color: "#00FF00",
  text: "Heading 1",
};

export const LegacyHeading2 = Template.bind({});
LegacyHeading2.args = {
  variant: "h2",
  text: "Heading 2",
};

export const LegacyHeading3 = Template.bind({});
LegacyHeading3.args = {
  variant: "h3",
  text: "Heading 3",
};

export const LegacyHeading4 = Template.bind({});
LegacyHeading4.args = {
  variant: "h4",
  text: "Heading 4",
};

export const LegacyHeading5 = Template.bind({});
LegacyHeading5.args = {
  variant: "h5",
  text: "Heading 5",
};

export const LegacyHeading6 = Template.bind({});
LegacyHeading6.args = {
  variant: "h6",
  text: "Heading 6",
};

export const LegacyParagraph = Template.bind({});
LegacyParagraph.args = {
  variant: "p",
  text: "Paragraph",
};

export const LegacySpan = Template.bind({});
LegacySpan.args = {
  variant: "span",
  text: "Span",
};

export const LegacyBlockquote = Template.bind({});
LegacyBlockquote.args = {
  variant: "blockquote",
  text: "Blockquote",
};

export const LegacyFormText = Template.bind({});
LegacyFormText.args = {
  variant: "form-text",
  text: "Form text",
  for: "test-id",
};

export const LegacyFormSmall = Template.bind({});
LegacyFormSmall.args = {
  variant: "form-small",
  text: "Form small",
};

export const LegacyNumbers1 = Template.bind({});
LegacyNumbers1.args = {
  variant: "numbers-1",
  text: "999",
};

export const LegacyNumbers2 = Template.bind({});
LegacyNumbers2.args = {
  variant: "numbers-2",
  text: "999",
};

export const LegacyNumbers3 = Template.bind({});
LegacyNumbers3.args = {
  variant: "numbers-3",
  text: "999",
};

export const LegacyNumbers4 = Template.bind({});
LegacyNumbers4.args = {
  variant: "numbers-4",
  text: "999",
};

export const LegacyNumbers5 = Template.bind({});
LegacyNumbers5.args = {
  variant: "numbers-5",
  text: "999",
};

export const LegacyLink = Template.bind({});
LegacyLink.args = {
  variant: "a",
  text: "View more",
  route: "/test",
};

export const LegacyLinkAccent = Template.bind({});
LegacyLinkAccent.args = {
  variant: "a-accent",
  text: "See details",
  route: "/test",
};

export const LegacyLinkExternal = Template.bind({});
LegacyLinkExternal.args = {
  variant: "a",
  text: "External link",
  href: "https://www.google.com",
};

export const LegacyLinkDisabled = Template.bind({});
LegacyLinkDisabled.args = {
  variant: "a-accent",
  text: "Disabled link",
  route: "/test",
  disabled: true,
};

export const Preset_1 = Template.bind({});
Preset_1.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-1"],
};

export const Preset_2 = Template.bind({});
Preset_2.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-2"],
};

export const Preset_3 = Template.bind({});
Preset_3.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-3"],
};

export const Preset_4 = Template.bind({});
Preset_4.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-4"],
};

export const Preset_5 = Template.bind({});
Preset_5.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-5"],
};

export const Preset_6 = Template.bind({});
Preset_6.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-6"],
};

export const Preset_7 = Template.bind({});
Preset_7.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-7"],
};

export const Preset_8 = Template.bind({});
Preset_8.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-8"],
};

export const Preset_9 = Template.bind({});
Preset_9.args = {
  text: "Hello world!",
  presetClassNames: ["text-preset-9"],
};

export const LinkStandaloneWithIconTemplate = Template.bind({});
LinkStandaloneWithIconTemplate.args = {
  variant: "link",
  text: "Standalone Link",
  route: "/test",
  linkStandalone: true,
  linkSize: "large",
  linkIcon: {
    template:
      "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2ZM8 12C10.7 12 13.8 13.29 14 14H2C2.23 13.28 5.31 12 8 12ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z' fill='#EB002A'/></svg>",
    position: "left",
  },
  disabled: false,
};

export const LinkStandaloneWithIconName = Template.bind({});
LinkStandaloneWithIconName.args = {
  variant: "link",
  text: "Standalone Link",
  route: "/test",
  linkStandalone: true,
  linkSize: "large",
  linkIcon: {
    name: "package",
    position: "right",
  },
  disabled: false,
};

export const LinkStandaloneDisabled = Template.bind({});
LinkStandaloneDisabled.args = {
  variant: "link",
  text: "Standalone Link",
  route: "/test",
  linkStandalone: true,
  linkSize: "large",
  disabled: true,
};

export const LinkInline = Template.bind({});
LinkInline.args = {
  presetClassNames: ["text-preset-7"],
  text: "This paragraph contains an <a href='#' class='link link--inline link--size-medium'><span class='link__label left'>Inline Link</span><i class='link__icon right'><svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z' fill='#EB002A'/></svg></i></a> with an icon and another without: <a href='/test' class='link'><span class='link__label'>Another Link</span></a>",
  route: "/test",
};
