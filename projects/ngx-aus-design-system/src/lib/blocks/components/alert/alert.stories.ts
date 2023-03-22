import { Story, Meta, moduleMetadata, componentWrapperDecorator } from "@storybook/angular";
import { CommonModule } from "@angular/common";

import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { AlertComponent } from "./alert.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
      ],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="o-container">
          <div class="o-grid o-grid--center">
            <div class="o-grid__col">${story}</div>
          </div>
        </div>`
    ),
  ],
  component: AlertComponent,
  title: "Components/Blocks/Alert",
} as Meta;

const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
});

export const Successful = Template.bind({});
Successful.args = {
  type: "successful",
  title: "Success!",
  msg: "Your password has successfully been reset. Please log in.",
  timeToHide: 99999
};
export const Error = Template.bind({});
Error.args = {
  type: "error",
  title: "Something went wrong.",
  msg: "This user does not exist.",
  timeToHide: 99999
};
export const _HideIn5s = Template.bind({});
_HideIn5s.args = {
  type: "error",
  title: "Something went wrong.",
  msg: "This user does not exist.",
  timeToHide: 5000
};
export const _AlertWithoutTitle = Template.bind({});
_AlertWithoutTitle.args = {
  type: "error",
  msg: "This user does not exist.",
  timeToHide: 5000
};
