import { TypographyModule } from "./../typography/typography.module";
import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { RadioButtonsComponent } from "./radio-buttons.component";

export default {
  title: "Components/Shared/Radio Buttons",
  component: RadioButtonsComponent,
  decorators: [
    moduleMetadata({
      declarations: [RadioButtonsComponent],
      imports: [TypographyModule],
    }),
  ],
} as Meta;

const Template: Story<RadioButtonsComponent> = (
  args: RadioButtonsComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: ["Label 1", "Label 2", "Label 3"],
};
