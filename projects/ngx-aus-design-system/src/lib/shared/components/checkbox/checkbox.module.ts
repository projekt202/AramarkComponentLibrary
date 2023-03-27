import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyModule } from "../typography/typography.module";
import { CheckboxComponent } from "./checkbox.component";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, TypographyModule, MatCheckboxModule],
  providers: [],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}
