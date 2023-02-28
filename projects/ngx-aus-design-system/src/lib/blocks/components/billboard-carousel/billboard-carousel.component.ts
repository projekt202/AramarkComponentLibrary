import { Component, Input } from "@angular/core";

import {
  BillboardCarouselSlide,
  BillboardCarouselVariants,
} from "./billboard-carousel.model";

@Component({
  selector: "aus-billboard-carousel",
  templateUrl: "./billboard-carousel.component.html",
  styleUrls: ["./billboard-carousel.component.scss"],
})
export class BillboardCarouselComponent {
  @Input() variant: BillboardCarouselVariants = "white";
  @Input() slides: BillboardCarouselSlide[] = [];

  constructor() {}
}
