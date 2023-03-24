import { TypographyModule } from "./../typography/typography.module";
import { MatNativeDateModule, NativeDateAdapter } from "@angular/material/core";
import { NgxMaskModule } from "ngx-mask";
import { FormsModule } from "@angular/forms";
import { NgClass, NgIf, NgTemplateOutlet } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import {
  MatDatepicker,
  MatDatepickerModule,
} from "@angular/material/datepicker";
import { InputKeypressEvt, InputSizes, InputStatus } from "./input.model";

@Component({
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgTemplateOutlet,
    FormsModule,
    NgxMaskModule,
    TypographyModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [NativeDateAdapter],
  selector: "aus-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
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

  setValue(val: string) {
    this.value = val;
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

  constructor() {}

  ngOnInit(): void {
    this.isValueVisible = this.type !== "password";
  }

  onDateChange(e: { value: string }) {
    this.setValue(new Date(e.value).toLocaleDateString());
  }

  onClick() {
    if (this.datepicker && this.picker) {
      this.picker.open();
    }
  }

  toggleCalendar() {
    if (this.datepicker && this.picker) {
      if (this.picker.opened) {
        this.picker.close();
      } else {
        this.picker.open();
      }
    }
  }
}
