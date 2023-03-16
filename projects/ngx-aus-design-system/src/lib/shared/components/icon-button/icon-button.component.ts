import { Component, EventEmitter, Input, Output } from "@angular/core";

import { IconComponentNames } from "./../icon/icon.model";
import { IconButtonSizes } from "./icon-button.model";

@Component({
  selector: "lib-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
})
export class IconButtonComponent {
  @Input() icon: IconComponentNames = "uniform";
  @Input() size: IconButtonSizes = "large";
  @Input() ariaLabel: string = "";
  @Input() disabled?: boolean = false;
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}
