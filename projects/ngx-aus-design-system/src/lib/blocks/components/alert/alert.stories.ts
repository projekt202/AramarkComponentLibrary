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

export const AlertSuccessful = Template.bind({});
AlertSuccessful.args = {
  alertType: "successful",
  title: "Success!",
  msg: "Your password has successfully been reset. Please log in.",
  timeToHide: 99999
};
export const AlertError = Template.bind({});
AlertError.args = {
  alertType: "error",
  title: "Something went wrong.",
  msg: "This user does not exist.",
  timeToHide: 99999
};
export const Alert_HideIn5s = Template.bind({});
Alert_HideIn5s.args = {
  alertType: "error",
  title: "Something went wrong.",
  msg: "This user does not exist.",
  timeToHide: 5000
};
