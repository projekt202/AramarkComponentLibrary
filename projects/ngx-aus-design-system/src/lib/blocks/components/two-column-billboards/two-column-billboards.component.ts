import { Component, Input } from "@angular/core";
import {
  BillboardBgcolors,
  BillboardsInput,
} from "./two-column-billboards.model";

@Component({
  selector: "aus-two-column-billboards",
  templateUrl: "./two-column-billboards.component.html",
  styleUrls: ["./two-column-billboards.component.scss"],
})
export class TwoColumnBillboardsComponent {
  @Input() bgColor: BillboardBgcolors = "gray";
  @Input() billboards: BillboardsInput[] = [];

  constructor() {}
}
