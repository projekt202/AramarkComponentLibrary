import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
import { NgxSmartModalService } from "ngx-smart-modal";
import { Router, ActivatedRoute } from "@angular/router";

import { ProductCardDetails, ProductCardOption } from "./product-card.model";
import { GoogleTagManagerService } from "angular-google-tag-manager";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: "aus-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements AfterViewInit {
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() legal: string = "";
  @Input() details: ProductCardDetails = {
    sizes: "",
    description: "",
  };
  @Input() options: ProductCardOption[] = [
    {
      imgUrl: "",
      color: "",
      colorName: "",
      tag: "",
    },
  ];
  @Input() forModalPreviewURL?: boolean;
  @Input() noQueryParamsUpdate?: boolean;
  @Input() forWizard?: {
    industry: string;
    services: string;
  };

  @ViewChild("carousel") carousel?: CarouselComponent;

  isModalOpen: boolean = false;
  prevSelectedIdx: number = 0;
  selectedIdx: number = 0;
  didLoadPreviewModal: boolean = false;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private route: ActivatedRoute,
    private router: Router,
    private gtms: GoogleTagManagerService
  ) {}

  ngAfterViewInit(): void {
    if (this.forModalPreviewURL) {
      this.route.queryParams.subscribe((params: any) => {
        if (!this.didLoadPreviewModal && params?.pid === this.id) {
          const timeout = setTimeout(() => {
            this.toggleModal(true);
            clearTimeout(timeout);
          }, 500);
        }
      });
    }
  }

  toggleModal(state: boolean, e?: MouseEvent) {
    e?.preventDefault();
    this.isModalOpen = state;
    if (state) return this.ngxSmartModalService.open("product-" + this.id);
    this.didLoadPreviewModal = true;
    return this.ngxSmartModalService.close("product-" + this.id);
  }

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

  onCloseFinishedHandler() {
    // Remove product ID query parameter when closing details modal
    this.router.navigate([], {
      queryParamsHandling: "merge",
      relativeTo: this.route,
      queryParams: {
        pid: null,
      },
    });
  }

  onOpenFinishedHandler() {
    if (this.noQueryParamsUpdate) return;
    // Append product ID as a new query parameter when opening details modal
    this.router.navigate([], {
      queryParamsHandling: "merge",
      relativeTo: this.route,
      queryParams: {
        pid: this.id,
      },
    });
  }

  getOptionColor(color: string) {
    const _color = color.toLowerCase();
    if (
      _color === "#ffffff" ||
      _color === "#fff" ||
      _color === "rgb(255, 255, 255)" ||
      _color === "rgb(255,255,255)" ||
      _color === "white"
    ) {
      return "#f5f5f5";
    }
    return color;
  }

  onRequestQuote() {
    if (this.forWizard) {
      this.gtms.pushTag({
        event: "Wizard Step 3",
        industry: this.forWizard.industry,
        "product category": this.forWizard.services,
      });
    }
  }
}
