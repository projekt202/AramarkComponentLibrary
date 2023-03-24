import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule, NativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { TypographyModule } from "../typography/typography.module";
import { InputComponent } from "./input.component";

@NgModule({
  declarations: [
    /* InputComponent */
  ],
  imports: [
    /* CommonModule,
    FormsModule,
    NgxMaskModule,
    TypographyModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule, */
  ],
  providers: [
    /* NativeDateAdapter */
  ],
  exports: [
    /* InputComponent */
  ],
})
export class InputModule {}
