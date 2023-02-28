import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import {
  AccordionComponentIntro,
  AccordionComponentItem,
  AccordionComponentComponentType,
  AccordionComponentComponentVariant,
} from "./accordion.component.model";

@Component({
  selector: "aus-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent {
  @Input() variant: AccordionComponentComponentVariant = "fullwidth";
  @Input() type: AccordionComponentComponentType = "white";
  @Input() data: AccordionComponentItem[] = [];
  @Input() intro?: AccordionComponentIntro;

  openIdx: null | number = null;

  constructor(public sanitizer: DomSanitizer) {}

  getClasses() {
    const classes = ["accordion"];
    if (this.variant === "fullwidth") {
      classes.push("accordion--fullwidth");
    } else {
      classes.push("accordion--centered");
    }
    if (this.type === "black") {
      classes.push("accordion--black");
    }
    if (this.type === "white") {
      classes.push("accordion--white");
    }
    if (this.intro) {
      if (this.intro.position === "left") {
        classes.push("accordion--intro-left");
      }
      if (this.intro.position === "right") {
        classes.push("accordion--intro-right");
      }
      if (this.intro.position === "top") {
        classes.push("accordion--intro-top");
      }
    }
    return classes.join(" ");
  }

  setOpenIdx(idx: null | number) {
    this.openIdx = idx;
  }

  onToggleHandler(idx: number) {
    if (this.openIdx === idx) {
      this.setOpenIdx(null);
    } else {
      this.setOpenIdx(idx);
    }
  }
}
