import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyModule } from "../typography/typography.module";
import { CheckboxComponent } from "./checkbox.component";

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, TypographyModule],
  providers: [],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}
