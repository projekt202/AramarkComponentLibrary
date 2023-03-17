import { NgModule } from "@angular/core";

import { AlertsComponent } from "./alerts.component";
import { AlertModule } from "../alert/alert.module";

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    AlertModule
  ],
  providers: [],
  exports: [AlertsComponent],
})
export class AlertsModule {}
