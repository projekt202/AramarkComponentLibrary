import { Component, EventEmitter, Input, Output } from "@angular/core";
import { InputKeypressEvt } from "./input.model";

@Component({
  selector: "aus-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() pattern?: string;
  @Input() name: string = "";
  @Input() value: string = "";
  @Input() label?: string = "";
  @Input() subtitle?: string;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() multiline?: boolean;
  @Input() placeholder?: string;
  @Input() isDisabled?: boolean;
  @Input() isRequired?: boolean;
  @Input() validationErrorMsg?: string;
  @Input() type: "text" | "number" | "email" | "tel" | "search" = "text";
  @Input() mask?: string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() keypress: EventEmitter<InputKeypressEvt> =
    new EventEmitter<InputKeypressEvt>();

  setValue(val: string) {
    this.value = val;
  }

  onKeypress(e: KeyboardEvent) {
    this.keypress.emit({
      val: this.value,
      key: e.key,
    });
  }

  constructor() {}
}
