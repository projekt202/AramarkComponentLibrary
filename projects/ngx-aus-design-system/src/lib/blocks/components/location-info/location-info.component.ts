import { Component, Input, OnInit } from "@angular/core";

import { PlatformService } from "../../../shared/services/platform/platform.service";
import { LocationInfoTypes } from "./location-info.model";

@Component({
  selector: "aus-location-info",
  templateUrl: "./location-info.component.html",
  styleUrls: ["./location-info.component.scss"],
})
export class LocationInfoComponent implements OnInit {
  @Input() type: LocationInfoTypes = "single-image";
  @Input() heading: string = "";
  @Input() subheading: string = "";
  @Input() subtitle: string = "";
  @Input() description: string = "";
  @Input() btnQuoteUrl?: string;
  @Input() btnSupportUrl?: string;
  @Input() images: string[] = [];

  constructor(private ps: PlatformService) {}

  ngOnInit(): void {
    // Pick random type and images
    if (this.ps.isBrowser()) {
      const types: LocationInfoTypes[] = ["single-image", "grid"];
      const images: string[] = [...this.images];
      let finalImages = [];
      this.type = types[Math.round(Math.random())];
      if (this.type === "single-image") {
        const randImagesIdx = Math.floor(Math.random() * (images.length - 1));
        finalImages = [images[randImagesIdx]];
      } else {
        finalImages = images.sort(() => 0.5 - Math.random()).slice(0, 3);
      }
      this.images = finalImages.map((img) => img || this.images[0]);
    }
  }
}
