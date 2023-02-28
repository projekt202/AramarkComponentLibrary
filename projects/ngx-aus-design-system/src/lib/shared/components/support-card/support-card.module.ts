import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { ButtonModule } from "../button/button.module";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { SupportCardComponent } from "./support-card.component";

@NgModule({
  declarations: [SupportCardComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    TypographyModule,
    IconModule,
    ButtonModule,
  ],
  providers: [],
  exports: [SupportCardComponent],
})
export class SupportCardModule {}
