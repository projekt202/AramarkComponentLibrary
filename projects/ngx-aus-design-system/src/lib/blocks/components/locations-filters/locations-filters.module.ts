import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DropdownModule } from "./../../../shared/components/dropdown/dropdown.module";
import { InputModule } from "./../../../shared/components/input/input.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationsFiltersComponent } from "./locations-filters.component";

@NgModule({
  declarations: [LocationsFiltersComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    IconModule,
    InputModule,
    DropdownModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  exports: [LocationsFiltersComponent],
})
export class LocationsFiltersModule {}
