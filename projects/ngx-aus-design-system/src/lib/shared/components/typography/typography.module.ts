import { IconModule } from "./../icon/icon.module";
import { Array2StringPipeModule } from "./../../pipes/array2string/array2string.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SanitizePipeModule } from "../../pipes/sanitize/sanitize.module";
import { TypographyComponent } from "./typography.component";

@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    RouterModule,
    SanitizePipeModule,
    Array2StringPipeModule,
    IconModule,
  ],
  providers: [],
  exports: [TypographyComponent],
})
export class TypographyModule {}
