import { NgModule } from "@angular/core";

import { AlertsComponent } from "./alerts.component";
import { AlertModule } from "../alert/alert.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports: [AlertsComponent],
})
export class AlertsModule {}
