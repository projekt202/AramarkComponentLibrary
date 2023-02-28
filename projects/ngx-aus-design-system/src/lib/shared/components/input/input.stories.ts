import { FormsModule } from '@angular/forms';
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { NgxMaskModule } from 'ngx-mask';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { TypographyComponent } from '../typography/typography.component';

import { InputComponent } from './input.component';

export default {
  title: 'Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent, TypographyComponent, SanitizePipe],
      imports: [FormsModule, NgxMaskModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col u-6/12@md u-5/12@lg u-4/12@xl">${story}</div>
          </div>
        </div>`
    ),
  ],
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  maxLength: 100,
  isRequired: true,
  isDisabled: false,
  label: 'Last Name',
  validationErrorMsg: 'Error message lorem ipsum dolor sit amet.',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  name: 'default',
  maxLength: 100,
  isRequired: true,
  isDisabled: false,
  label: 'Last Name',
  subtitle: '(XXXXX)',
  validationErrorMsg: 'Error message lorem ipsum dolor sit amet.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabled',
  maxLength: 100,
  isDisabled: true,
  label: 'Last Name',
};
