import { Component, Input, OnInit } from "@angular/core";
import {
  IconComponentNames,
  IconComponentVariants,
} from "../../../shared/components/icon/icon.model";
import {
  BillboardComponentBtn,
  BillboardComponentColumn,
  BillboardComponentType,
  BillboardComponentVariant,
} from "./billboard.component.model";

@Component({
  selector: "aus-billboard",
  templateUrl: "./billboard.component.html",
  styleUrls: ["./billboard.component.scss"],
})
export class BillboardComponent implements OnInit {
  @Input() variant: BillboardComponentVariant = "left-image";
  @Input() type: BillboardComponentType = "light";
  @Input() column: BillboardComponentColumn = "50-50";
  @Input() imgUrl: string = "";
  @Input() iconName?: IconComponentNames;
  @Input() header: string = "";
  @Input() bodyText: string = "";
  @Input() btn?: BillboardComponentBtn;
  iconVariant: IconComponentVariants = "black";

  constructor() {}

  ngOnInit() {
    if (this.type === "dark") {
      this.iconVariant = "white";
    }
  }

  getClasses() {
    const classes = ["billboard"];
    if (this.variant === "left-image") {
      classes.push("variant--left-image");
    } else {
      classes.push("variant--right-image");
    }
    if (this.type === "dark") {
      classes.push("type--dark");
    } else {
      classes.push("type--light");
    }
    if (this.column === "50-50") {
      classes.push("column--c50-50");
    } else {
      classes.push("column--c3-2");
    }
    return classes.join(" ");
  }
}
