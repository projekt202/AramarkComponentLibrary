import { SupportCardModule } from "./../../../shared/components/support-card/support-card.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { ImageCardColumnsComponent } from "./image-card-columns.component";

@NgModule({
  declarations: [ImageCardColumnsComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    SupportCardModule,
    IconModule,
    ImageModule,
    ButtonModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [ImageCardColumnsComponent],
})
export class ImageCardColumnsModule {}
