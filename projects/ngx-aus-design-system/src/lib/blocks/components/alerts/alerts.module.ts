import { NgModule } from "@angular/core";

import { AlertsComponent } from "./alerts.component";
import { AlertModule } from "../alert/alert.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    AlertModule
  ],
  providers: [],
  exports: [AlertsComponent],
})
export class AlertsModule {}
