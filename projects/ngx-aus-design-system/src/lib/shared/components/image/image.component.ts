import { NgStyle } from "@angular/common";
import { AfterViewInit, Component, Input } from "@angular/core";
import { BrowserService } from "../../services/browser/browser.service";

import {
  ImageBackgroundDimensions,
  ImageBackgroundVariants,
  ImageCaption,
  ImageRoundedCorners,
  ImageVariant,
} from "./image.model";

@Component({
  selector: "aus-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
})
export class ImageComponent implements AfterViewInit {
  @Input() variant?: ImageVariant = "image";
  @Input() src: string = "";
  @Input() fullwidth?: boolean = false;
  @Input() backgroundDimensions?: ImageBackgroundDimensions;
  @Input() altText: string = "";
  @Input() roundedCorners?: ImageRoundedCorners;
  @Input() caption?: ImageCaption;
  @Input() bgVariant?: ImageBackgroundVariants;
  @Input() loading?: boolean = false;

  styles: NgStyle["ngStyle"] = this.getStyle();
  window: Window | null;
  br: string = "";

  constructor(private browserService: BrowserService) {
    this.window = this.browserService.getWindow();
    this.window?.addEventListener("resize", () => {
      this.styles = this.getStyle();
    });
  }

  ngAfterViewInit(): void {
    this.window?.dispatchEvent(new Event("resize"));
  }

  getWindowWidth() {
    return this.window?.innerWidth || 0;
  }

  getStyle() {
    const corners = {
      borderTopLeftRadius: (this.roundedCorners?.topLeft ?? 10) + "px",
      borderTopRightRadius: (this.roundedCorners?.topRight ?? 10) + "px",
      borderBottomLeftRadius: (this.roundedCorners?.bottomLeft ?? 10) + "px",
      borderBottomRightRadius: (this.roundedCorners?.bottomRight ?? 10) + "px",
    };
    if (this.variant === "image") {
      return {
        ...corners,
        ...(this.fullwidth ? { width: "100%" } : {}),
      };
    }
    let breakpoint: keyof ImageBackgroundDimensions = "desktop";
    if (this.getWindowWidth() < 1200) {
      breakpoint = "desktop";
    }
    if (this.getWindowWidth() < 992) {
      breakpoint = "tablet";
    }
    if (this.getWindowWidth() < 768) {
      breakpoint = "mobile";
    }
    this.br = breakpoint;
    return {
      ...corners,
      width: this.backgroundDimensions?.[breakpoint].width || "auto",
      height: this.backgroundDimensions?.[breakpoint].height || "auto",
    };
  }
}
