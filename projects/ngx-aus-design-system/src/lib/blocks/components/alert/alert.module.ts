import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert.component";
import { TypographyModule } from "../../../shared/components/typography/typography.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    TypographyModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [AlertComponent],
})
export class AlertModule {}
