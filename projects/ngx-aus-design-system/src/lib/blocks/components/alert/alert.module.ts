import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert.component";
import { TypographyModule } from "../../../shared/components/typography/typography.module";

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    TypographyModule,
  ],
  providers: [],
  exports: [AlertComponent],
})
export class AlertModule {}
