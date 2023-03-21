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
  showAlert?: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.hide();
    }, this.timeToHide ?? 20000);
  }

  hide() {
    this.showAlert = false;
    this.onHide.emit();
  }
}
