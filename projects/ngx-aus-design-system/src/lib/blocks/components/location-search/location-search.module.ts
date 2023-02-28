import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../../../graphql.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LocationMapModule } from "./../location-map/location-map.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { DropdownModule } from "./../../../shared/components/dropdown/dropdown.module";
import { InputModule } from "./../../../shared/components/input/input.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationSearchComponent } from "./location-search.component";
import { LocationsFiltersModule } from "../locations-filters/locations-filters.module";

@NgModule({
  declarations: [LocationSearchComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    InputModule,
    DropdownModule,
    ButtonModule,
    IconModule,
    LocationMapModule,
    LocationsFiltersModule,
    FormsModule,
    NgSelectModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [LocationSearchComponent],
})
export class LocationSearchModule {}
