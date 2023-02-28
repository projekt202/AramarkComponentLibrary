import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "aus-radio-buttons",
  templateUrl: "./radio-buttons.component.html",
  styleUrls: ["./radio-buttons.component.scss"],
})
export class RadioButtonsComponent {
  @Input() options: string[] = [];
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  selection: string = "";

  constructor() {}

  onChange(option: string) {
    this.selection = option;
    this.selected.emit(option);
  }
}
