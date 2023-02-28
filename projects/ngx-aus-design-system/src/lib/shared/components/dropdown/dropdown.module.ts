import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { IconModule } from "../icon/icon.module";
import { TypographyModule } from "../typography/typography.module";
import { DropdownComponent } from "./dropdown.component";

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TypographyModule,
    IconModule,
  ],
  providers: [],
  exports: [DropdownComponent],
})
export class DropdownModule {}
