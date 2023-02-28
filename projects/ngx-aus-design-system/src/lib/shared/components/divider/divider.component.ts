import { Component, Input } from "@angular/core";
import { DividerAlignment, DividerMargin } from "./divider.model";

@Component({
  selector: "aus-divider",
  templateUrl: "./divider.component.html",
  styleUrls: ["./divider.component.scss"],
})
export class DividerComponent {
  @Input() width?: number;
  @Input() thickness?: number;
  @Input() color?: string;
  @Input() margin?: DividerMargin;
  @Input() alignment?: DividerAlignment = "center";

  constructor() {}
}
