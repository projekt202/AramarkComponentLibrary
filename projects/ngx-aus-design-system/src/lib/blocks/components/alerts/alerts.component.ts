import { Component, Input } from "@angular/core";
import { AlertComponent } from "../alert/alert.component.model";

@Component({
  selector: "aus-alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
})
export class AlertsComponent {
  @Input() alerts: AlertComponent[] = [];
}
