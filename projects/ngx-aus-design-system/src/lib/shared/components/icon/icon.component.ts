import { Component, Input } from "@angular/core";

import {
  IconComponentNames,
  IconComponentSizes,
  IconComponentVariants,
} from "./icon.model";

@Component({
  selector: "aus-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
})
export class IconComponent {
  @Input() name: IconComponentNames = "atom";
  @Input() size: IconComponentSizes = "large";
  @Input() variant: IconComponentVariants = "transparent";
  @Input() fontSize?: number | "inherit" = "inherit";
  @Input() color?: string;
  @Input() round?: boolean;

  WideIcons: IconComponentNames[] = [
    "truck",
    "outdoors",
    "light",
    "floor-mat",
    "car",
    "scales",
    "feedback",
    "business-dining",
    "lodging",
    "youtube",
    "tape-measure",
  ];
  WiderIcons: IconComponentNames[] = ["flexibility"];

  constructor() {}

  getClasses() {
    const classes = ["icon"];
    if (this.variant === "transparent") {
      classes.push("icon--bg-transparent");
    }
    if (this.variant === "black") {
      classes.push("icon--bg-black");
    }
    if (this.variant === "black-full") {
      classes.push("icon--bg-black-full");
    }
    if (this.variant === "white") {
      classes.push("icon--bg-white");
    }
    if (this.size === "xs") {
      classes.push("icon--xs");
    }
    if (this.size === "small") {
      classes.push("icon--small");
    }
    if (this.size === "large") {
      classes.push("icon--large");
    }
    if (this.round) {
      classes.push("icon--round");
    }
    if (this.variant !== "transparent" && this.WideIcons.includes(this.name)) {
      classes.push("icon--wide");
    }
    if (this.variant !== "transparent" && this.WiderIcons.includes(this.name)) {
      classes.push("icon--wider");
    }
    return classes.join(" ");
  }

  getCustomStyle() {
    return {
      ...(typeof this.fontSize === "number" && {
        fontSize: `${this.fontSize}px`,
      }),
      ...(this.color && { color: this.color }),
    };
  }
}
