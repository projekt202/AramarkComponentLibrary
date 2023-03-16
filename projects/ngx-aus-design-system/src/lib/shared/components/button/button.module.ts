import { Array2StringPipeModule } from "./../../pipes/array2string/array2string.module";
import { SanitizePipeModule } from "./../../pipes/sanitize/sanitize.module";
import { TypographyModule } from "./../typography/typography.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxSmoothScrollModule } from "@boatzako/ngx-smooth-scroll";
import { IconModule } from "../icon/icon.module";
import { ButtonComponent } from "./button.component";

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    NgxSmoothScrollModule,
    RouterModule,
    IconModule,
    TypographyModule,
    SanitizePipeModule,
    Array2StringPipeModule,
  ],
  providers: [],
  exports: [ButtonComponent],
})
export class ButtonModule {}
