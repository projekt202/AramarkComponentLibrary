import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { IconButtonComponent } from "./icon-button.component";
import { IconModule } from "./../icon/icon.module";

export default {
  title: "Components/Shared/Icon Button",
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [IconModule],
    }),
  ],
} as Meta;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: "atom",
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: "atom",
  disabled: true,
};
