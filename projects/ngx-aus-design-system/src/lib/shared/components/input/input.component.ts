import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { InputKeypressEvt } from "./input.model";

@Component({
  selector: "aus-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements AfterViewInit {
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
  @Input() type: "text" | "number" | "email" | "tel" | "search" | "password" =
    "text";
  @Input() mask?: string;
  @Input() visibilityToggle?: boolean;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() keypress: EventEmitter<InputKeypressEvt> =
    new EventEmitter<InputKeypressEvt>();

  isValueVisible: boolean = true;

  setValue(val: string) {
    this.value = val;
  }

  onKeypress(e: KeyboardEvent) {
    this.keypress.emit({
      val: this.value,
      key: e.key,
    });
  }

  toggleVisibility() {
    if (this.isValueVisible) {
      this.type = "password";
      this.isValueVisible = false;
    } else {
      this.type = "text";
      this.isValueVisible = true;
    }
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.isValueVisible = this.type !== "password";
  }
}
