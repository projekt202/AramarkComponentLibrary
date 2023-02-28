import { Component, Input } from "@angular/core";
import { LocationCoords } from "./location-card.model";

@Component({
  selector: "aus-location-card",
  templateUrl: "./location-card.component.html",
  styleUrls: ["./location-card.component.scss"],
})
export class LocationCardComponent {
  @Input() map: boolean = true;
  @Input() city: string = "";
  @Input() name: string = "";
  @Input() address: string = "";
  @Input() zip: string = "";
  @Input() phone: string = "";
  @Input() url: string = "";
  @Input() coords?: LocationCoords = {
    lat: 0,
    lng: 0,
  };

  constructor() {}

  getEncodedAddress(address: string) {
    return encodeURIComponent(address);
  }
}
