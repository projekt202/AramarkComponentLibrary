import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { NgxParallaxScrollModule } from "ngx-parallax-scroll";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ImageModule } from "./../../../shared/components/image/image.module";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { CallToActionTextComponent } from "./call-to-action-text.component";

@NgModule({
  declarations: [CallToActionTextComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    ImageModule,
    LazyLoadImageModule,
    NgxParallaxScrollModule,
    NgxSmoothScrollModule,
  ],
  providers: [],
  exports: [CallToActionTextComponent],
})
export class CallToActionTextModule {}
