import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ArrowLinkModule } from "./../../../shared/components/arrow-link/arrow-link.module";
import { ButtonModule } from "./../../../shared/components/button/button.module";
import { SupportCardModule } from "./../../../shared/components/support-card/support-card.module";
import { FullwidthImageCardModule } from "./../../../shared/components/fullwidth-image-card/fullwidth-image-card.module";
import { ImageModule } from "./../../../shared/components/image/image.module";
import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { TwoColumnWysiwygComponent } from "./two-column-wysiwyg.component";

@NgModule({
  declarations: [TwoColumnWysiwygComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    WysiwygModule,
    ImageModule,
    SupportCardModule,
    FullwidthImageCardModule,
    ButtonModule,
    IconModule,
    ArrowLinkModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [TwoColumnWysiwygComponent],
})
export class TwoColumnWysiwygModule {}
