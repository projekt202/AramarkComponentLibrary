import { Array2StringPipe } from './../../pipes/array2string/array2string.pipe';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { TypographyComponent } from '../typography/typography.component';

import { ArrowLinkComponent } from './arrow-link.component';

export default {
  title: 'Arrow Link',
  component: ArrowLinkComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyComponent, SanitizePipe, Array2StringPipe],
    }),
  ],
} as Meta;

const Template: Story<ArrowLinkComponent> = (args: ArrowLinkComponent) => ({
  props: args,
});

export const Underline = Template.bind({});
Underline.args = {
  title: 'Call 1-800-ARAMARK',
  url: 'https://www.google.com',
  target: '_blank',
  underline: true,
};

export const Default = Template.bind({});
Default.args = {
  title: 'Call 1-800-ARAMARK',
  url: 'https://www.google.com',
  target: '_blank',
  underline: false,
};
