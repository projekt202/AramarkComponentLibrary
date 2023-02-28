import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "aus-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.scss"],
})
export class CheckboxComponent {
  @Input() name: string = "";
  @Input() label: string = "Legal checkbox";
  @Input() isChecked?: boolean = false;
  @Input() isDisabled?: boolean = false;
  @Input() labelUrl?: string;

  @Output() isCheckedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  onChange(e: Event) {
    this.checked.emit((e.target as HTMLInputElement).checked);
  }
}
