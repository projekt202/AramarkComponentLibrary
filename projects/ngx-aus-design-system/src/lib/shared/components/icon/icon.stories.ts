import type { Story, Meta } from '@storybook/angular';

import { IconComponent } from './icon.component';

export default {
  title: 'Icon',
  component: IconComponent,
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  size: 'large',
  name: 'atom',
};

export const Black = Template.bind({});
Black.args = {
  variant: 'black',
  size: 'large',
  name: 'badge',
};

export const White = Template.bind({});
White.args = {
  variant: 'white',
  size: 'large',
  name: 'billing',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'black',
  name: 'box',
  size: 'small',
};

export const Custom = Template.bind({});
Custom.args = {
  variant: 'transparent',
  name: 'calendar',
  size: 'large',
  fontSize: 100,
  color: '#FF0000',
};
