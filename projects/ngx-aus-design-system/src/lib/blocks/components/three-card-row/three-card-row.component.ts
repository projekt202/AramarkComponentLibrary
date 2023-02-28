import { Component, Input } from "@angular/core";
import { ThreeCardRowCard, ThreeCardRowVariants } from "./three-card-row.model";

@Component({
  selector: "aus-three-card-row",
  templateUrl: "./three-card-row.component.html",
  styleUrls: ["./three-card-row.component.scss"],
})
export class ThreeCardRowComponent {
  @Input() variant: ThreeCardRowVariants = "black";
  @Input() title: string = "";
  @Input() cards: ThreeCardRowCard[] = [];
  @Input() animated?: boolean;

  constructor() {}
}
