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
      declarations: [TypographyComponent, SanitizePipe, Array2StringPipe],
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  props: args,
});

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  text: "Heading 1",
};

export const Heading1Custom = Template.bind({});
Heading1Custom.args = {
  variant: "h1",
  weight: "400",
  color: "#00FF00",
  text: "Heading 1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "h2",
  text: "Heading 2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: "h3",
  text: "Heading 3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: "h4",
  text: "Heading 4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: "h5",
  text: "Heading 5",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: "h6",
  text: "Heading 6",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: "p",
  text: "Paragraph",
};

export const Span = Template.bind({});
Span.args = {
  variant: "span",
  text: "Span",
};

export const Blockquote = Template.bind({});
Blockquote.args = {
  variant: "blockquote",
  text: "Blockquote",
};

export const FormText = Template.bind({});
FormText.args = {
  variant: "form-text",
  text: "Form text",
  for: "test-id",
};

export const FormSmall = Template.bind({});
FormSmall.args = {
  variant: "form-small",
  text: "Form small",
};

export const Numbers1 = Template.bind({});
Numbers1.args = {
  variant: "numbers-1",
  text: "999",
};

export const Numbers2 = Template.bind({});
Numbers2.args = {
  variant: "numbers-2",
  text: "999",
};

export const Numbers3 = Template.bind({});
Numbers3.args = {
  variant: "numbers-3",
  text: "999",
};

export const Numbers4 = Template.bind({});
Numbers4.args = {
  variant: "numbers-4",
  text: "999",
};

export const Numbers5 = Template.bind({});
Numbers5.args = {
  variant: "numbers-5",
  text: "999",
};

export const Link = Template.bind({});
Link.args = {
  variant: "a",
  text: "View more",
  route: "/test",
};

export const LinkAccent = Template.bind({});
LinkAccent.args = {
  variant: "a-accent",
  text: "See details",
  route: "/test",
};

export const LinkExternal = Template.bind({});
LinkExternal.args = {
  variant: "a",
  text: "External link",
  href: "https://www.google.com",
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  variant: "a-accent",
  text: "Disabled link",
  route: "/test",
  disabled: true,
};

export const StandaloneLink = Template.bind({});
StandaloneLink.args = {
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
