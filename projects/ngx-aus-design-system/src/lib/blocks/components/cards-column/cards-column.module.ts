import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IconModule } from "./../../../shared/components/icon/icon.module";
import { CardModule } from "./../../../shared/components/card/card.module";
import { ButtonModule } from "../../../shared/components/button/button.module";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { SanitizePipeModule } from "../../../shared/pipes/sanitize/sanitize.module";
import { CardsColumnComponent } from "./cards-column.component";

@NgModule({
  declarations: [CardsColumnComponent],
  imports: [
    CommonModule,
    TypographyModule,
    SanitizePipeModule,
    IconModule,
    ButtonModule,
    CardModule,
    RouterModule,
  ],
  providers: [],
  exports: [CardsColumnComponent],
})
export class CardsColumnModule {}
