import { RouterModule } from "@angular/router";
import { IconModule } from "./../../../shared/components/icon/icon.module";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { FwHeroComponent } from "./fw-hero.component";

@NgModule({
  declarations: [FwHeroComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    ButtonModule,
    IconModule,
    RouterModule,
    LazyLoadImageModule,
  ],
  providers: [],
  exports: [FwHeroComponent],
})
export class FwHeroModule {}
