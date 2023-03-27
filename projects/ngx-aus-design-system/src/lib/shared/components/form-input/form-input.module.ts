import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule, NativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { TypographyModule } from "../typography/typography.module";
import { FormInputComponent } from "./form-input.component";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

@NgModule({
  declarations: [FormInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    NgxMaskModule,
    TypographyModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [NativeDateAdapter],
  exports: [FormInputComponent],
})
export class InputModule {}
