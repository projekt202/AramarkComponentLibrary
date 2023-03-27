import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { FieldType, FieldTypeConfig } from "@ngx-formly/core";
import { MatDatepicker } from "@angular/material/datepicker";
import {
  InputSizes,
  InputStatus,
  InputKeypressEvt,
} from "../input/input.model";

@Component({
  selector: "aus-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["../input/input.component.scss"],
})
export class FormInputComponent extends FieldType<FieldTypeConfig> {
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
  @Input() size?: InputSizes = "medium";
  @Input() statusIcon?: InputStatus;
  @Input() datepicker?: boolean;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() keypress: EventEmitter<InputKeypressEvt> =
    new EventEmitter<InputKeypressEvt>();

  @ViewChild("control") control?: ElementRef<HTMLInputElement>;
  @ViewChild("picker") picker?: MatDatepicker<any>;

  isValueVisible: boolean = true;

  constructor() {
    super();
  }

  setValue(val: string) {
    this.value = val;
    this.field.formControl.setValue(val);
    if (this.control) {
      this.control.nativeElement.value = val;
    }
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

  ngOnInit(): void {
    this.isValueVisible = this.type !== "password";
  }

  onDateChange(e: { value: string }) {
    this.setValue(new Date(e.value).toLocaleDateString());
  }

  onClick() {
    if (this.props["datepicker"] && this.picker) {
      this.picker.open();
    }
  }

  toggleCalendar() {
    if (this.props["datepicker"] && this.picker) {
      if (this.picker.opened) {
        this.picker.close();
      } else {
        this.picker.open();
      }
    }
  }
}
