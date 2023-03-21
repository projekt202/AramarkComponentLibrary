import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AlertType } from "./alert.component.model";

@Component({
  selector: "aus-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent {
  @Input() alertType: AlertType = "successful";
  @Input() title?: string;
  @Input() msg: string = "";
  @Input() timeToHide?: number;// Miliseconds.
  @Output() onHide = new EventEmitter<void>();
  showAlert?: boolean = false;

  ngOnChanges() {
    this.showAlert = true;
    setTimeout(() => {
      this.hide();
    }, this.timeToHide ?? 20000);
    if (this.title === undefined) {
      switch (this.alertType) {
        case "successful":
          this.title = "Success!";
          break;
        case "error":
          this.title = "Something went wrong.";
          break;
      }
    }
  }

  hide() {
    this.showAlert = false;
    this.onHide.emit();
  }
}
