import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SanitizePipeModule } from "../../pipes/sanitize/sanitize.module";
import { TypographyComponent } from "./typography.component";

@NgModule({
  declarations: [TypographyComponent],
  imports: [CommonModule, RouterModule, SanitizePipeModule],
  providers: [],
  exports: [TypographyComponent],
})
export class TypographyModule {}
