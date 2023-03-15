import { Component, Input } from "@angular/core";

export interface PageLayoutIntro {
  title: string;
  description?: string;
}

@Component({
  selector: "app-page-layout",
  templateUrl: "./page-layout.component.html",
  styleUrls: ["./page-layout.component.scss"],
})
export class PageLayoutComponent {
  @Input() title: string = "";
  @Input() description?: string;
}
