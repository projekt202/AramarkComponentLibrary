import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import * as AOS from "aos";

import { ButtonComponentVariants } from "../../../shared/components/button/button.component.model";
import { AnimationService } from "../../../shared/services/animation/animation.service";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { ResponsiveImages } from "../../../shared/services/media/media.model";
import { MediaService } from "../../../shared/services/media/media.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import {
  FwHeroVariant,
  FwHeroCard,
  FwHeroBanner,
  FwHeroTextColor,
} from "./fw-hero.model";

@Component({
  selector: "aus-fw-hero",
  templateUrl: "./fw-hero.component.html",
  styleUrls: ["./fw-hero.component.scss"],
})
export class FwHeroComponent implements OnInit, AfterViewInit {
  @Input() variant: FwHeroVariant = "card";
  @Input() imgUrl: string = "";
  @Input() responsiveImgs: ResponsiveImages = {
    default_background: "",
  };
  @Input() card: FwHeroCard = {
    title: "",
    gradient: true,
    variant: "white",
    position: "left",
  };
  @Input() banner?: FwHeroBanner;
  @Input() textColor?: FwHeroTextColor;
  @Input() animated?: boolean;

  constructor(
    private bs: BrowserService,
    private ms: MediaService,
    private ps: PlatformService,
    private as: AnimationService
  ) {}

  ngOnInit(): void {
    if (this.ps.isBrowser()) {
      this.bs.getWindow()?.addEventListener("resize", () => {
        this.imgUrl = this.ms.getResponsiveImage(this.responsiveImgs);
      });
    }
  }

  ngAfterViewInit(): void {
    this.bs.getWindow()?.dispatchEvent(new Event("resize"));
    if (this.animated) {
      this.as.animTextLines("#fwhero-title .typography", "#fwhero-title");
    }
    if (this.ps.isBrowser()) {
      AOS.refresh();
    }
  }

  getCardBtnVariant(): ButtonComponentVariants {
    if (this.card.variant === "white") return "black";
    if (this.card.variant === "black") return "white";
    if (this.variant === "blur" && this.card.button?.variant) {
      return this.card.button.variant;
    }
    return "white";
  }

  getBannerBtnVariant(): ButtonComponentVariants {
    if (this.banner?.variant === "white") return "red";
    return "white";
  }
}
