import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { StatementCardComponent } from "./statement-card.component";

@NgModule({
  declarations: [StatementCardComponent],
  imports: [CommonModule, TypographyModule, IconModule],
  providers: [],
  exports: [StatementCardComponent],
})
export class StatementCardModule {}
