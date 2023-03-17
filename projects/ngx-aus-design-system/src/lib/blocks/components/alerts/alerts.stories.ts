import { Story, Meta, moduleMetadata, componentWrapperDecorator } from "@storybook/angular";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";

import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { AlertsComponent } from "./alerts.component";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { WysiwygComponent } from "NgxAusDesignSystem";
import { AlertComponent } from "../alert/alert.component";

export default {
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        WysiwygComponent,
        SanitizePipe,
        Array2StringPipe,
        AlertComponent
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
  component: AlertsComponent,
  title: "Components/Blocks/Alerts",
} as Meta;

const Template: Story<AlertsComponent> = (args: AlertsComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  alerts: [{
    alertType: "successful",
    title: "Success!",
    msg: "Your password has successfully been reset. Please log in.",
    timeToHide: 99999
  }, {
    alertType: "error",
    title: "Something went wrong.",
    msg: "This user does not exist.",
    timeToHide: 99999
  }]
};
