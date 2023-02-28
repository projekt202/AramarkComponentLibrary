import { AfterViewInit, Component, Input } from "@angular/core";
import { SwiperOptions } from "swiper";

import { BrowserService } from "../../../shared/services/browser/browser.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { ProductCardRowProducts } from "./product-card-row.model";

@Component({
  selector: "aus-product-card-row",
  templateUrl: "./product-card-row.component.html",
  styleUrls: ["./product-card-row.component.scss"],
})
export class ProductCardRowComponent implements AfterViewInit {
  @Input() products: ProductCardRowProducts = [];
  @Input() carouselConfig?: SwiperOptions = {};
  @Input() desktopWrap?: boolean = false;
  @Input() desktopPreview?: boolean;
  @Input() forModalPreviewURL?: boolean;
  @Input() standalone?: boolean;
  @Input() chunkSizeDesktop?: number = 4;
  @Input() noCarousel?: boolean;
  @Input() noQueryParamsUpdate?: boolean;
  @Input() forWizard?: {
    industry: string;
    services: string;
  };

  showAllProducts: boolean = !this.desktopPreview;

  chunkSize: number = 4;
  chunks = this.getChunks();

  constructor(private bs: BrowserService, private ps: PlatformService) {}

  ngAfterViewInit(): void {
    this.showAllProducts = !this.desktopPreview;
    this.updateChunks();
  }

  viewAllProducts() {
    if (!this.showAllProducts) {
      this.showAllProducts = true;
      this.updateChunks();
    }
  }

  retractAllProducts() {
    if (this.showAllProducts) {
      this.showAllProducts = false;
      this.updateChunks();
    }
  }

  updateChunks(resize: boolean = true) {
    this.chunks = this.getChunks();
    if (resize) {
      const timeout = setTimeout(() => {
        this.bs.getWindow()?.dispatchEvent(new Event("resize"));
        clearTimeout(timeout);
      }, 500);
    }
  }

  getChunks() {
    if (this.ps.isServer()) return [];
    const isDesktop = (this.bs.getWindow()?.innerWidth || 0) >= 1024;
    const finalChunkSize = this.chunkSizeDesktop ?? this.chunkSize;
    if (this.desktopWrap && isDesktop) {
      if (this.showAllProducts) {
        return [this.products];
      } else {
        return [this.products.slice(0, finalChunkSize)];
      }
    }
    const chunks = [];
    for (
      let i = 0;
      i < this.products.length;
      i += isDesktop ? finalChunkSize : this.chunkSize
    ) {
      const chunk = this.products.slice(
        i,
        i + (isDesktop ? finalChunkSize : this.chunkSize)
      );
      chunks.push(chunk);
    }
    return chunks;
  }

  setProducts(prods: ProductCardRowProducts) {
    this.products = prods;
    this.updateChunks();
  }

  getCarouselConfig() {
    return {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      autoHeight: true,
      ...this.carouselConfig,
    };
  }
}
