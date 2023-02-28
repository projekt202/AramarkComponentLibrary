import { Component, Input, ViewChild } from "@angular/core";

import { CarouselComponent } from "../../../shared/components/carousel/carousel.component";
import { ProductCardInputs } from "../../../shared/components/product-card/product-card.model";

@Component({
  selector: "aus-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent {
  @Input() product: ProductCardInputs = {
    id: "",
    name: "",
    legal: "",
    details: {
      description: "",
      sizes: "",
    },
    options: [
      {
        color: "",
        colorName: "",
        imgUrl: "",
        tag: "",
      },
    ],
  };

  @ViewChild("carousel") carousel?: CarouselComponent;

  prevSelectedIdx: number = 0;
  selectedIdx: number = 0;

  constructor() {}

  updateColor(idx: number, stopCarousel: boolean = false) {
    if (stopCarousel) {
      this.carousel?.getSwiper()?.autoplay.stop();
    }
    this.prevSelectedIdx = this.selectedIdx;
    this.selectedIdx = idx;
  }

  resetColor() {
    this.selectedIdx = this.prevSelectedIdx;
  }
}
