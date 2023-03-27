import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Checkbox } from "./checkbox-group.model";

@Component({
  selector: "aus-checkbox-group",
  templateUrl: "./checkbox-group.component.html",
  styleUrls: ["./checkbox-group.component.scss"],
})
export class CheckboxGroupComponent {
  @Input() label: string = "";
  @Input() items: Checkbox[] = [];
  @Input() required?: boolean;

  @Output() checkedChange: EventEmitter<Checkbox[]> = new EventEmitter();

  isRequiredError?: boolean = false;

  updateIsRequiredError() {
    if (this.required) {
      this.isRequiredError = !this.items.find((item) => item.isChecked);
    }
  }

  onCheckedChange(val: boolean, name: string) {
    const newItems = [...this.items];
    const found = newItems.find((item) => item.name === name);
    if (!found) return;
    found.isChecked = val;
    this.updateIsRequiredError();
    this.checkedChange.emit(newItems);
  }
}
