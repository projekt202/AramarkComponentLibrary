import { Component, Input } from "@angular/core";

import {
  FullwidthImageCardColumnsBg,
  FullwidthImageCardColumnsItem,
} from "./fullwidth-image-card-columns.model";

@Component({
  selector: "aus-fullwidth-image-card-columns",
  templateUrl: "./fullwidth-image-card-columns.component.html",
  styleUrls: ["./fullwidth-image-card-columns.component.scss"],
})
export class FullwidthImageCardColumnsComponent {
  @Input() cards: FullwidthImageCardColumnsItem[] = [];
  @Input() bg: FullwidthImageCardColumnsBg = "white";
  @Input() embedded?: boolean;

  constructor() {}
}
