import { Component, Input } from "@angular/core";
import {
  IconComponentNames,
  IconComponentSizes,
  IconComponentVariants,
} from "../icon/icon.model";
import { CardComponentVariants, CardComponentButton } from "./card.model";

@Component({
  selector: "aus-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() icon?: IconComponentNames;
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() button?: CardComponentButton;
  @Input() variant?: CardComponentVariants = "white";

  constructor() {}

  getIconSize(): IconComponentSizes {
    if (
      this.variant === "left-aligned-black" ||
      this.variant === "left-aligned-white"
    ) {
      return "large";
    }
    return "small";
  }

  getIconVariant(): IconComponentVariants {
    if (this.variant === "left-aligned-white") return "white";
    return "black";
  }
}
