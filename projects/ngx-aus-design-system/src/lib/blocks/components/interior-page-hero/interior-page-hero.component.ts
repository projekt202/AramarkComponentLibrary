import { Component, Input, OnInit } from "@angular/core";

import { CallToActionTextButton } from "../call-to-action-text/call-to-action-text.component.model";
import {
  IconComponentNames,
  IconComponentVariants,
} from "../../../shared/components/icon/icon.model";
import {
  InteriorPageHeroComponentVariant,
  InteriorPageHeroComponentType,
} from "./interior-page-hero.component.model";

@Component({
  selector: "aus-interior-page-hero",
  templateUrl: "./interior-page-hero.component.html",
  styleUrls: ["./interior-page-hero.component.scss"],
})
export class InteriorPageHeroComponent implements OnInit {
  @Input() variant: InteriorPageHeroComponentVariant = "left-image";
  @Input() type: InteriorPageHeroComponentType = "light";
  @Input() imgUrl: string = "";
  @Input() date?: string = "";
  @Input() endDate?: string = "";
  @Input() header: string = "";
  @Input() button?: CallToActionTextButton;
  iconName: IconComponentNames = "calendar";
  iconVariant: IconComponentVariants = "transparent";
  icon: IconComponentVariants = "transparent";
  buttonColor = "black";
  @Input() backgroundColor?: string;

  constructor() {}

  ngOnInit() {
    if (this.type === "dark") {
      this.buttonColor = "red";
    }
  }

  getClasses() {
    const classes = ["interiorpagehero", "imp"];
    if (this.variant === "right-image") {
      classes.push("variant--right-image");
    } else {
      classes.push("variant--left-image");
    }
    if (this.type === "dark") {
      classes.push("type--dark");
    } else {
      classes.push("type--light");
    }
    return classes.join(" ");
  }
}
