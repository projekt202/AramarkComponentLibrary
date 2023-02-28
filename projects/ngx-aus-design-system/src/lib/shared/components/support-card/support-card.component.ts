import { Component, Input } from "@angular/core";
import { ButtonConfig } from "../button/button.component.model";
import { IconConfig } from "../icon/icon.model";

@Component({
  selector: "aus-support-card",
  templateUrl: "./support-card.component.html",
  styleUrls: ["./support-card.component.scss"],
})
export class SupportCardComponent {
  @Input() imgUrl?: string;
  @Input() icon?: IconConfig;
  @Input() pretitle?: string = "";
  @Input() title?: string = "";
  @Input() text?: string = "";
  @Input() btn?: ButtonConfig = {
    title: "",
    url: "",
    target: "_blank",
    variant: "red",
  };
  @Input() secondaryBtn?: ButtonConfig;

  constructor() {}
}
