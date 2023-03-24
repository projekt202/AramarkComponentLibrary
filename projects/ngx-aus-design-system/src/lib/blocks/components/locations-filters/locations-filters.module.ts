import { InputComponent } from "./../../../shared/components/input/input.component";
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
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [LocationsFiltersComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    IconModule,
    InputComponent,
    DropdownModule,
    FormsModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  exports: [LocationsFiltersComponent],
})
export class LocationsFiltersModule {}
