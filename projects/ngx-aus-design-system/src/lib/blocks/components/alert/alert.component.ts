import { Component, Input } from "@angular/core";
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
  showAlert?: boolean = false;

  ngOnChanges() {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, this.timeToHide ?? 20000);
    if (this.title === undefined) {
      switch (this.alertType) {
        case "successful":
          this.title = "Something went wrong.";
          break;
        case "error":
          this.title = "Success!";
          break;
      }
    }
  }

  hide() {
    this.showAlert = false;
  }
}
