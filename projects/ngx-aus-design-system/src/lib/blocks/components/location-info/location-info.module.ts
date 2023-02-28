import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { LocationInfoComponent } from "./location-info.component";

@NgModule({
  declarations: [LocationInfoComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    IconModule,
    ImageModule,
    WysiwygModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [LocationInfoComponent],
})
export class LocationInfoModule {}
