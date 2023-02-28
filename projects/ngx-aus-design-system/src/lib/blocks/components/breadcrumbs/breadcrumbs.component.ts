import { Component, Input } from "@angular/core";
import { BreadcrumbsPaths } from "./breadcrumbs.model";

@Component({
  selector: "aus-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"],
})
export class BreadcrumbsComponent {
  @Input() paths: BreadcrumbsPaths = [];
  @Input() variant: string = "";

  constructor() {}
}
