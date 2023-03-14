import { Component, Input } from "@angular/core";

@Component({
  selector: "app-accessibility-preview",
  templateUrl: "./accessibility-preview.component.html",
  styleUrls: ["./accessibility-preview.component.scss"],
})
export class AccessibilityPreviewComponent {
  @Input() color: string = "";
  @Input() data: {
    light: boolean[];
    dark: boolean[];
  } = {
    light: [true, true],
    dark: [true, true],
  };
}
