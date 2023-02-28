import { Component, Input } from "@angular/core";

import {
  LocationServiceAreasBackgrounds,
  LocationServiceAreasVariants,
} from "./location-service-areas.model";

@Component({
  selector: "aus-location-service-areas",
  templateUrl: "./location-service-areas.component.html",
  styleUrls: ["./location-service-areas.component.scss"],
})
export class LocationServiceAreasComponent {
  @Input() title: string = "";
  @Input() locations: string[] = [];
  @Input() variant: LocationServiceAreasVariants = "list";
  @Input() background: LocationServiceAreasBackgrounds = "white";

  constructor() {}

  getChunks() {
    const chunks = [];
    const numPerColumn = Math.ceil(this.locations.length / 4);
    for (let i = 0; i < this.locations.length; i += numPerColumn) {
      const chunk = this.locations.slice(i, i + numPerColumn);
      chunks.push(chunk);
    }
    return chunks;
  }
}
