import { Component, Input } from "@angular/core";

import { ArrowLinkInputs } from "../../../shared/components/arrow-link/arrow-link.model";
import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { IconComponentNames } from "../../../shared/components/icon/icon.model";
import { BannerBarComponentBackgrounds } from "./banner-bar.model";

@Component({
  selector: "aus-banner-bar",
  templateUrl: "./banner-bar.component.html",
  styleUrls: ["./banner-bar.component.scss"],
})
export class BannerBarComponent {
  @Input() icon?: IconComponentNames;
  @Input() content: string = "";
  @Input() iconOnTop?: boolean;
  @Input() background: BannerBarComponentBackgrounds = "white";
  @Input() link?: ArrowLinkInputs;
  @Input() btn?: ButtonConfig;
  @Input() noCard?: boolean;

  constructor() {}
}
