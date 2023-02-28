import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';
import { IconComponent } from '../icon/icon.component';
import { TypographyComponent } from '../typography/typography.component';
import { DropdownComponent } from './dropdown.component';

export default {
  title: 'Dropdown',
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DropdownComponent,
        TypographyComponent,
        SanitizePipe,
        IconComponent,
      ],
      imports: [FormsModule, NgSelectModule],
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

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  name: 'state',
  label: 'State',
  isRequired: true,
  isDisabled: false,
  placeholder: 'Select',
  items: ['State 1', 'State 2', 'State 3', 'State 4'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'state',
  label: 'State',
  isRequired: false,
  isDisabled: true,
  placeholder: 'Select',
  items: ['State 1', 'State 2', 'State 3', 'State 4'],
};
