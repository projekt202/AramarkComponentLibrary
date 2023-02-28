import { Component, Input } from "@angular/core";
import { ButtonComponentTarget } from "../button/button.component.model";

@Component({
  selector: "aus-arrow-link",
  templateUrl: "./arrow-link.component.html",
  styleUrls: ["./arrow-link.component.scss"],
})
export class ArrowLinkComponent {
  @Input() title: string = "";
  @Input() url: string = "";
  @Input() target: ButtonComponentTarget = "_self";
  @Input() underline?: boolean;

  constructor() {}
}
