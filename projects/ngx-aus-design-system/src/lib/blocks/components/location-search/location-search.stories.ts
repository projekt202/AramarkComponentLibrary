import { TypographyModule } from "./../../../shared/components/typography/typography.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { GoogleMapsModule } from "@angular/google-maps";
import { NgSelectModule } from "@ng-select/ng-select";
import { Story, Meta, moduleMetadata } from "@storybook/angular";

import { GraphQLModule } from "../../../graphql.module";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { DropdownComponent } from "../../../shared/components/dropdown/dropdown.component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { InputComponent } from "../../../shared/components/input/input.component";
import { TypographyComponent } from "../../../shared/components/typography/typography.component";
import { Array2StringPipe } from "../../../shared/pipes/array2string/array2string.pipe";
import { SanitizePipe } from "../../../shared/pipes/sanitize/sanitize.pipe";
import { LocationMapComponent } from "../location-map/location-map.component";
import { LocationsFiltersComponent } from "../locations-filters/locations-filters.component";
import { LocationSearchComponent } from "./location-search.component";
import { NgxMaskModule } from "ngx-mask";

export default {
  title: "Components/Blocks/Location Search",
  component: LocationSearchComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        /* TypographyComponent,
        SanitizePipe,
        Array2StringPipe,
        InputComponent, */
        DropdownComponent,
        ButtonComponent,
        IconComponent,
        LocationMapComponent,
        LocationsFiltersComponent,
      ],
      imports: [
        FormsModule,
        NgSelectModule,
        GoogleMapsModule,
        GraphQLModule,
        HttpClientModule,
        InputComponent,
        TypographyModule,
        NgxMaskModule.forRoot(),
      ],
    }),
  ],
} as Meta;

const Template: Story<LocationSearchComponent> = (
  args: LocationSearchComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  title: "Aramark Uniform Services Locations",
  button: {
    url: "#",
    variant: "red",
    target: "_blank",
    title: "Request a Quote",
  },
};
