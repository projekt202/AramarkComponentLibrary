import { Array2StringPipe } from "./../../pipes/array2string/array2string.pipe";
import { FormsModule } from "@angular/forms";
import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from "@storybook/angular";
import { NgxMaskModule } from "ngx-mask";
import { SanitizePipe } from "../../pipes/sanitize/sanitize.pipe";
import { TypographyComponent } from "../typography/typography.component";

import { InputComponent } from "./input.component";

export default {
  title: "Components/Shared/Input",
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        InputComponent,
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
      ],
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
  props: {
    ...args,
    keypress: () => {},
    valueChange: () => {},
  },
});

export const Default = Template.bind({});
Default.args = {
  name: "default",
  maxLength: 100,
  isRequired: true,
  isDisabled: false,
  label: "Label",
  validationErrorMsg: "Error message lorem ipsum dolor sit amet.",
  placeholder: "Placeholder text",
  size: "small",
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  name: "default",
  maxLength: 100,
  isRequired: true,
  isDisabled: false,
  label: "Last Name",
  subtitle: "(XXXXX)",
  validationErrorMsg: "Error message lorem ipsum dolor sit amet.",
  size: "medium",
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: "disabled",
  maxLength: 100,
  isDisabled: true,
  label: "Last Name",
  placeholder: "Placeholder text",
  size: "small",
};

export const Password = Template.bind({});
Password.args = {
  name: "password",
  maxLength: 100,
  isDisabled: false,
  type: "password",
  label: "Password",
  isRequired: true,
  visibilityToggle: true,
  validationErrorMsg: "This field is required",
  size: "small",
};

export const Search = Template.bind({});
Search.args = {
  name: "search",
  type: "search",
  label: "Search",
  size: "medium",
  placeholder: "Keywords",
};
