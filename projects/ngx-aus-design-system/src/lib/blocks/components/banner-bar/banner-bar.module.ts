import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { WysiwygModule } from "./../../../shared/components/wysiwyg/wysiwyg.module";
import { ArrowLinkModule } from "./../../../shared/components/arrow-link/arrow-link.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { IconModule } from "../../../shared/components/icon/icon.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { BannerBarComponent } from "./banner-bar.component";

@NgModule({
  declarations: [BannerBarComponent],
  imports: [
    CommonModule,
    TypographyModule,
    IconModule,
    SanitizePipeModule,
    ButtonModule,
    ArrowLinkModule,
    WysiwygModule,
  ],
  providers: [],
  exports: [BannerBarComponent],
})
export class BannerBarModule {}
