import { Component, Input } from "@angular/core";

import {
  ImageCardColumnsBg,
  ImageCardColumnsItem,
} from "./image-card-columns.model";

@Component({
  selector: "aus-image-card-columns",
  templateUrl: "./image-card-columns.component.html",
  styleUrls: ["./image-card-columns.component.scss"],
})
export class ImageCardColumnsComponent {
  @Input() cards: ImageCardColumnsItem[] = [];
  @Input() bg: ImageCardColumnsBg = "white";

  constructor() {}
}
