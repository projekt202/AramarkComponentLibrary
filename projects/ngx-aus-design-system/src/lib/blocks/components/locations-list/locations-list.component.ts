import { Component, Input } from "@angular/core";
import { LocationsListItem, LocationsListTypes } from "./locations-list.model";

@Component({
  selector: "aus-locations-list",
  templateUrl: "./locations-list.component.html",
  styleUrls: ["./locations-list.component.scss"],
})
export class LocationsListComponent {
  @Input() title: string = "";
  @Input() type: LocationsListTypes = "list";
  @Input() data: LocationsListItem[] = [];

  constructor() {}
}
