import { Component, Input, OnInit } from "@angular/core";
import { FullwidthImageCardCta } from "./fullwidth-image-card.model";

@Component({
  selector: "aus-fullwidth-image-card",
  templateUrl: "./fullwidth-image-card.component.html",
  styleUrls: ["./fullwidth-image-card.component.scss"],
})
export class FullwidthImageCardComponent implements OnInit {
  @Input() imgUrl: string = "";
  @Input() title: string = "";
  @Input() subtitle?: string = "";
  @Input() text?: string = "";
  @Input() cta?: FullwidthImageCardCta;

  ngOnInit(): void {}
}
