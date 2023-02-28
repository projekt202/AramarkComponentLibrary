import { Component, Input } from "@angular/core";

import {
  InteriorPageHeroCarouselSlide,
  InteriorPageHeroCarouselVariants,
} from "./interior-page-hero-carousel.model";

@Component({
  selector: "aus-interior-page-hero-carousel",
  templateUrl: "./interior-page-hero-carousel.component.html",
  styleUrls: ["./interior-page-hero-carousel.component.scss"],
})
export class InteriorPageHeroCarouselComponent {
  @Input() title: string = "";
  @Input() variant: InteriorPageHeroCarouselVariants = "white";
  @Input() slides: InteriorPageHeroCarouselSlide[] = [];

  constructor() {}
}
