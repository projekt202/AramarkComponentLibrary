import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { LocationCardComponent } from "./location-card.component";

@NgModule({
  declarations: [LocationCardComponent],
  imports: [CommonModule, TypographyModule, IconModule],
  providers: [],
  exports: [LocationCardComponent],
})
export class LocationCardModule {}
