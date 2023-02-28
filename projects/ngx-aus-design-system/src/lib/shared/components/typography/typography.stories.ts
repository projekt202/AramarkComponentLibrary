import { RouterTestingModule } from '@angular/router/testing';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';

import { TypographyComponent } from './typography.component';

export default {
  title: 'Typography',
  component: TypographyComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, SanitizePipe],
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<TypographyComponent> = (args: TypographyComponent) => ({
  props: args,
});

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
  text: 'Heading 1',
};

export const Heading1Custom = Template.bind({});
Heading1Custom.args = {
  variant: 'h1',
  weight: '400',
  color: '#00FF00',
  text: 'Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
  text: 'Heading 2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
  text: 'Heading 3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
  text: 'Heading 4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: 'h5',
  text: 'Heading 5',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: 'h6',
  text: 'Heading 6',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
  text: 'Paragraph',
};

export const Span = Template.bind({});
Span.args = {
  variant: 'span',
  text: 'Span',
};

export const Blockquote = Template.bind({});
Blockquote.args = {
  variant: 'blockquote',
  text: 'Blockquote',
};

export const FormText = Template.bind({});
FormText.args = {
  variant: 'form-text',
  text: 'Form text',
  for: 'test-id',
};

export const FormSmall = Template.bind({});
FormSmall.args = {
  variant: 'form-small',
  text: 'Form small',
};

export const Numbers1 = Template.bind({});
Numbers1.args = {
  variant: 'numbers-1',
  text: '999',
};

export const Numbers2 = Template.bind({});
Numbers2.args = {
  variant: 'numbers-2',
  text: '999',
};

export const Numbers3 = Template.bind({});
Numbers3.args = {
  variant: 'numbers-3',
  text: '999',
};

export const Numbers4 = Template.bind({});
Numbers4.args = {
  variant: 'numbers-4',
  text: '999',
};

export const Numbers5 = Template.bind({});
Numbers5.args = {
  variant: 'numbers-5',
  text: '999',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'a',
  text: 'View more',
  route: '/test',
};

export const LinkAccent = Template.bind({});
LinkAccent.args = {
  variant: 'a-accent',
  text: 'See details',
  route: '/test',
};

export const LinkExternal = Template.bind({});
LinkExternal.args = {
  variant: 'a',
  text: 'External link',
  href: 'https://www.google.com',
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  variant: 'a-accent',
  text: 'Disabled link',
  route: '/test',
  disabled: true,
};
