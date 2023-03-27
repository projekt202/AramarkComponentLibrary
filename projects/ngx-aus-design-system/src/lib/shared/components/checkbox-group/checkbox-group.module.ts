import { TypographyModule } from "./../typography/typography.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CheckboxModule } from "./../checkbox/checkbox.module";
import { CheckboxGroupComponent } from "./checkbox-group.component";

@NgModule({
  declarations: [CheckboxGroupComponent],
  imports: [CommonModule, CheckboxModule, TypographyModule],
  providers: [],
  exports: [CheckboxGroupComponent],
})
export class CheckboxGroupModule {}
