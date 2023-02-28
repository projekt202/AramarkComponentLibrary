import { Component, Input } from "@angular/core";
import { TwoColumnWYSIWYGColumn } from "./two-column-wysiwyg.model";

@Component({
  selector: "aus-two-column-wysiwyg",
  templateUrl: "./two-column-wysiwyg.component.html",
  styleUrls: ["./two-column-wysiwyg.component.scss"],
})
export class TwoColumnWysiwygComponent {
  @Input() left: TwoColumnWYSIWYGColumn = {
    type: "wysiwyg",
    config: {},
  };
  @Input() right: TwoColumnWYSIWYGColumn = {
    type: "wysiwyg",
    config: {},
  };

  constructor() {}
}
