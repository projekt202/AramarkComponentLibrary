import { GoogleMapsModule } from "@angular/google-maps";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationMapComponent } from "./location-map.component";

@NgModule({
  declarations: [LocationMapComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    GoogleMapsModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [LocationMapComponent],
})
export class LocationMapModule {}
