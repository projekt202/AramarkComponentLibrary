import { Component, Input } from "@angular/core";

import { ButtonComponentTarget } from "../../../shared/components/button/button.component.model";
import { LocationCoords } from "../../../shared/components/location-card/location-card.model";

@Component({
  selector: "aus-locations-cards",
  templateUrl: "./locations-cards.component.html",
  styleUrls: ["./locations-cards.component.scss"],
})
export class LocationsCardsComponent {
  @Input() title: string = "";
  @Input() allLocationsLink: {
    title: string;
    url: string;
    target?: ButtonComponentTarget;
  } = {
    url: "#",
    target: "_blank",
    title: "View all locations",
  };
  @Input() locations: {
    city: string;
    name: string;
    address: string;
    zip: string;
    phone: string;
    url: string;
    coords: LocationCoords;
  }[] = [];

  constructor() {}
}
