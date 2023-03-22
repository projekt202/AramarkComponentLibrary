import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AlertType } from "./alert.component.model";

@Component({
  selector: "aus-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent implements OnInit {
  @Input() type: AlertType = "successful";
  @Input() title?: string;
  @Input() msg: string = "";
  @Input() timeToHide?: number;// Miliseconds.
  @Output() onHide = new EventEmitter<void>();
  public showAlert = true;

  ngOnInit(): void {
    if (this.timeToHide) setTimeout(() => this.hide(), this.timeToHide ?? 20000);
  }

  hide(): void {
    if (this.showAlert) this.onHide.emit();
    this.showAlert = false;
  }
}
