import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { ButtonComponent } from "../../../shared/components/button/button.component";
import { DropdownComponent } from "../../../shared/components/dropdown/dropdown.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { InputComponent } from "../../../shared/components/input/input.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { LocationsFiltersComponent } from "./locations-filters.component";

export default {
  title: "Locations Filters",
  component: LocationsFiltersComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        InputComponent,
        DropdownComponent,
        ButtonComponent,
        IconComponent,
      ],
      imports: [FormsModule, NgSelectModule],
    }),
  ],
} as Meta;

const Template: Story<LocationsFiltersComponent> = (
  args: LocationsFiltersComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: "Aramark Uniform Services Locations",
};
