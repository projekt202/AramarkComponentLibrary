import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LocationsListComponent } from "./locations-list.component";

@NgModule({
  declarations: [LocationsListComponent],
  imports: [CommonModule, TypographyModule, SanitizePipeModule, IconModule],
  providers: [],
  exports: [LocationsListComponent],
})
export class LocationsListModule {}
