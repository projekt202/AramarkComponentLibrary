import { Component, Input } from "@angular/core";
import {
  CustomerCardComponentAuthor,
  CustomerCardComponentVariant,
} from "./customer-card.model";

@Component({
  selector: "aus-customer-card",
  templateUrl: "./customer-card.component.html",
  styleUrls: ["./customer-card.component.scss"],
})
export class CustomerCardComponent {
  @Input() imgUrl?: string;
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() route?: string;
  @Input() href?: string;
  @Input() variant?: CustomerCardComponentVariant;
  @Input() author?: CustomerCardComponentAuthor;
  @Input() rating?: number;
  @Input() date?: string;

  constructor() {}
}
