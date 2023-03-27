import { TypographyModule } from "./../typography/typography.module";
import { CheckboxModule } from "./../checkbox/checkbox.module";
import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { CheckboxGroupComponent } from "./checkbox-group.component";
import { Checkbox } from "./checkbox-group.model";

export default {
  title: "Components/Shared/Checkbox Group",
  component: CheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckboxGroupComponent],
      imports: [CheckboxModule, TypographyModule],
    }),
  ],
} as Meta;

const Template: Story<CheckboxGroupComponent> = (
  args: CheckboxGroupComponent
) => ({
  props: args,
});

const TemplateHelperText: Story<CheckboxGroupComponent> = (
  args: CheckboxGroupComponent
) => {
  return {
    props: {
      ...args,
      onChange: () => {},
    },
    template: `
      <aus-checkbox-group
        [label]="label"
        [required]="required"
        [items]="items"
        (checkedChange)="onChange($event)"
      >
        <ng-container statusMsg>
          <aus-typography
            [presetClassNames]="['text-preset-9']"
            text="Select as many options as you like. <a style='font-weight: 500;' href='#' class='link'><span class='link__label'>How do I choose?</span></a>"
          ></aus-typography>
        </ng-container>
      </aus-checkbox-group>
    `,
  };
};

const items = [
  {
    name: "default_1",
    label: "Label 1",
    size: "medium",
  },
  {
    name: "default_2",
    label: "Label 2",
    size: "medium",
  },
  {
    name: "default_3",
    label: "Label 3",
    size: "medium",
  },
] as Checkbox[];

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  required: false,
  items,
};

export const HelperText = TemplateHelperText.bind({});
HelperText.args = {
  label: "Label",
  required: true,
  items,
};
