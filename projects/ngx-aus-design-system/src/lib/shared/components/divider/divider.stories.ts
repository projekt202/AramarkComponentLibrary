import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { DividerComponent } from './divider.component';

export default {
  title: 'Divider',
  component: DividerComponent,
  decorators: [
    moduleMetadata({
      declarations: [DividerComponent],
    }),
  ],
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
  props: args,
});

export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  width: 100,
  thickness: 10,
  color: '#00FF00',
  alignment: 'left',
  margin: {
    top: 100,
    bottom: 100,
  },
};
