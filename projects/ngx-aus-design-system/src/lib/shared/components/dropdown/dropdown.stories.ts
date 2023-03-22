import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";
import { Array2StringPipe } from "../../pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";
import { IconComponent } from "../icon/icon.component";
import { TypographyComponent } from "../typography/typography.component";
import { DropdownComponent } from "./dropdown.component";

export default {
  title: "Components/Shared/Dropdown",
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DropdownComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
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

const outputs = {
  change: () => {},
  selectedChange: () => {},
};

const Template: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: {
    ...args,
    ...outputs,
  },
});

const StatusTemplate: Story<DropdownComponent> = (args: DropdownComponent) => ({
  props: {
    ...args,
    ...outputs,
  },
  template: `
    <aus-dropdown [name]="name" [label]="label" [isRequired]="isRequired" [isDisabled]="isDisabled" [placeholder]="placeholder" [items]="items" [statusIcon]="statusIcon" [size]="size || 'medium'">
      <aus-typography statusMsg [presetClassNames]="['text-preset-9']" text="Error message lorem ipsum"></aus-typography>
    </aus-dropdown>
  `,
});

export const Default = Template.bind({});
Default.args = {
  name: "state",
  label: "State",
  isRequired: true,
  isDisabled: false,
  placeholder: "Select",
  items: ["State 1", "State 2", "State 3", "State 4"],
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "state",
  label: "State",
  isRequired: false,
  isDisabled: true,
  placeholder: "Select",
  items: ["State 1", "State 2", "State 3", "State 4"],
};

export const Multiselect = Template.bind({});
Multiselect.args = {
  name: "state",
  label: "State",
  isRequired: false,
  isDisabled: false,
  multiselect: true,
  placeholder: "Select",
  items: ["State 1", "State 2", "State 3", "State 4"],
};

export const Error = StatusTemplate.bind({});
Error.args = {
  name: "state",
  label: "State",
  isRequired: false,
  isDisabled: false,
  placeholder: "Select",
  items: ["State 1", "State 2", "State 3", "State 4"],
  statusIcon: "negative",
};
