import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { TypographyModule } from "../typography/typography.module";
import { InputComponent } from "./input.component";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, NgxMaskModule, TypographyModule],
  providers: [],
  exports: [InputComponent],
})
export class InputModule {}
