import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import * as AOS from "aos";

import { ButtonComponentTarget } from "../../../shared/components/button/button.component.model";
import {
  IconComponentNames,
  IconComponentVariants,
} from "../../../shared/components/icon/icon.model";
import { AnimationService } from "../../../shared/services/animation/animation.service";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { ResponsiveImages } from "../../../shared/services/media/media.model";
import { MediaService } from "../../../shared/services/media/media.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { FwHeroTextColor } from "../fw-hero/fw-hero.model";
import {
  CallToActionTextAlignment,
  CallToActionTextButton,
  CallToActionTextComponentType,
  CallToActionTextComponentVariant,
} from "./call-to-action-text.component.model";

@Component({
  selector: "aus-call-to-action-text",
  templateUrl: "./call-to-action-text.component.html",
  styleUrls: ["./call-to-action-text.component.scss"],
})
export class CallToActionTextComponent implements OnInit, AfterViewInit {
  @Input() variant: CallToActionTextComponentVariant = "without-body-text";
  @Input() type: CallToActionTextComponentType = "light";
  @Input() iconName?: IconComponentNames;
  @Input() preHeader?: string = "";
  @Input() header: string = "";
  @Input() bodyText?: string = "";
  @Input() headerItalic?: boolean;
  @Input() preHeaderItalic?: boolean;
  @Input() bgUrl?: string;
  @Input() bgUrlTablet?: string;
  @Input() bgUrlMobile?: string;
  @Input() responsiveImages?: ResponsiveImages = {
    default_background: "",
  };
  @Input() buttons?: CallToActionTextButton[];
  @Input() divider?: boolean;
  @Input() logo?: {
    url: string;
    target: ButtonComponentTarget;
  };
  @Input() alignment?: CallToActionTextAlignment = "center";
  @Input() parallax?: boolean = false;
  @Input() textColor?: FwHeroTextColor;
  @Input() animated?: boolean;

  iconVariant: IconComponentVariants = "black";
  currentBgUrl: string = this.bgUrl || "";

  constructor(
    private browserService: BrowserService,
    private ms: MediaService,
    private ps: PlatformService,
    private as: AnimationService
  ) {
    if (this.ps.isBrowser()) {
      this.browserService.getWindow()?.addEventListener("resize", () => {
        this.currentBgUrl = this.getBgUrl() || "";
      });
    }
  }

  ngOnInit() {
    if (this.ps.isBrowser()) {
      this.currentBgUrl = this.getBgUrl() || "";
    }
    if (this.variant === "without-body-text") {
      this.bodyText = "";
    }
    if (this.type === "dark") {
      this.iconVariant = "white";
    }
  }

  ngAfterViewInit(): void {
    if (this.animated) {
      this.as.animTextLines("#ctatext-title .typography", "#ctatext-title");
    }
    if (this.ps.isBrowser()) {
      AOS.refresh();
    }
  }

  getClasses() {
    const classes = ["call-to-action-text"];
    switch (this.variant) {
      case "bg-img":
        classes.push("variant--bg-img");
        break;
      case "with-body-text":
        classes.push("variant--with-body-text");
        break;
      case "without-body-text":
      default:
        classes.push("variant--without-body-text");
        break;
    }
    if (this.type === "dark") {
      classes.push("type--dark");
      this.iconVariant = "white";
    } else {
      classes.push("type--light");
    }
    switch (this.alignment) {
      case "center":
        classes.push("alignment--center");
        break;
      case "left":
        classes.push("alignment--left");
        break;
      case "left-alt":
        classes.push("alignment--left-alt");
        break;
      case "right-alt":
        classes.push("alignment--right-alt");
        break;
      case "center-alt":
        classes.push("alignment--center-alt");
        break;
      default:
        break;
    }
    if (this.parallax) {
      classes.push("parallax");
    }
    return classes.join(" ");
  }

  getBgUrl() {
    if (this.responsiveImages) {
      const res = this.ms.getResponsiveImage(this.responsiveImages);
      return res;
    }
    return "";
  }

  getHeaderVariant() {
    switch (this.variant) {
      case "bg-img":
        return this.alignment === "left" ? "h3" : "h2";
      default:
        return "h3";
    }
  }

  getButtons() {
    if (!this.buttons) return [];
    return this.buttons?.filter((btn) => !!btn);
  }
}
