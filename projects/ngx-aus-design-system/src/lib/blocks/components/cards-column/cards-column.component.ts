import { Component, Input } from "@angular/core";

import { CardComponentVariants } from "../../../shared/components/card/card.model";
import {
  CardsColumnComponentBtn,
  CardsColumnComponentData,
  CardsColumnComponentLayout,
  CardsColumnComponentVariants,
} from "./cards-column.model";

@Component({
  selector: "aus-cards-column",
  templateUrl: "./cards-column.component.html",
  styleUrls: ["./cards-column.component.scss"],
})
export class CardsColumnComponent {
  @Input() variant: CardsColumnComponentVariants = "black";
  @Input() data: CardsColumnComponentData = [];
  @Input() button?: CardsColumnComponentBtn;
  @Input() layout?: CardsColumnComponentLayout = "2";

  constructor() {}

  getCardsVariant(): CardComponentVariants {
    if (this.variant === "black") return "left-aligned-white";
    return "left-aligned-black";
  }
}
