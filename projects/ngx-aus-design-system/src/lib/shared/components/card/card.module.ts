import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "../button/button.module";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { CardComponent } from "./card.component";

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    TypographyModule,
    IconModule,
    ButtonModule,
  ],
  providers: [],
  exports: [CardComponent],
})
export class CardModule {}
