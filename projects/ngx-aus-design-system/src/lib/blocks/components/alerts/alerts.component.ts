import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AlertComponent } from "../alert/alert.component.model";

@Component({
  selector: "aus-alerts",
  templateUrl: "./alerts.component.html",
  styleUrls: ["./alerts.component.scss"],
})
export class AlertsComponent {
  @Input() alerts: AlertComponent[] = [];
  @Output() onHide = new EventEmitter<number>();

  hide(i: number) {
    this.onHide.emit(i);
  }
}
