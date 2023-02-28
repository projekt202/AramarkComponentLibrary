import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { TypographyComponent } from '../typography/typography.component';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent, TypographyComponent, SanitizePipe],
    }),
  ],
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  label: 'Uniforms',
  isChecked: false,
  isDisabled: false,
};

export const Prechecked = Template.bind({});
Prechecked.args = {
  name: 'default',
  label: 'Uniforms',
  isChecked: true,
  isDisabled: false,
  labelUrl: 'https://www.google.com',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabled',
  label: 'Uniforms',
  isChecked: false,
  isDisabled: true,
};
