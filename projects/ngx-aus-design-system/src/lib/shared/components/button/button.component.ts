import { Component, Input, OnInit } from "@angular/core";
import { decode } from "html-entities";
import { originData } from "../../variables/origin-data/origin-data";

import { IconComponentNames } from "../icon/icon.model";
import {
  ButtonComponentTarget,
  ButtonComponentVariants,
  ButtonSizes,
} from "./button.component.model";

@Component({
  selector: "aus-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() route?: string;
  @Input() href?: string;
  @Input() target: ButtonComponentTarget = "_self";
  @Input() text: string = "";
  @Input() variant: ButtonComponentVariants = "red";
  @Input() disabled: boolean = false;
  @Input() icon?: {
    name: IconComponentNames;
    position: "left" | "right";
  };
  @Input() fullwidth?: boolean;
  @Input() btnType?: "button" | "submit";
  @Input() useButton?: boolean;
  @Input() origin?: string;
  @Input() size?: ButtonSizes = "large";

  isAnchorLink: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.href?.charAt(0) === "#") {
      this.isAnchorLink = true;
    }
  }

  getText() {
    return decode(this.text);
  }

  anchorPreview() {
    if (
      (this.origin === originData.pagePreview ||
        this.origin === originData.blockPreview) &&
      this.isAnchorLink
    ) {
      parent.postMessage(
        {
          armkToDo: "armk-go-iframe-anchor",
          id: this.href?.slice(1),
        },
        "*"
      );
    }
  }

  getClasses() {
    const classes = ["button"];
    if (this.variant === "white") {
      classes.push("button--bg-white");
    }
    if (this.variant === "black") {
      classes.push("button--bg-black");
    }
    if (this.variant === "red") {
      classes.push("button--bg-red");
    }
    if (this.variant === "transparent") {
      classes.push("button--bg-transparent");
    }
    if (this.variant === "outline") {
      classes.push("button--bg-outline");
    }
    if (this.fullwidth) {
      classes.push("button--fullwidth");
    }
    if (this.disabled) {
      classes.push("button--disabled");
    }
    if (this.size) {
      classes.push(`button--size-${this.size}`);
    }
    return classes.join(" ");
  }
}
