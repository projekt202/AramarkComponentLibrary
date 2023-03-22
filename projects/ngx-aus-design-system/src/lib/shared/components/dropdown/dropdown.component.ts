import { InputSizes, InputStatus } from "./../input/input.model";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "aus-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent {
  @Input() name: string = "";
  @Input() label?: string = "";
  @Input() placeholder: string = "";
  @Input() items: string[] = [];
  @Input() isDisabled?: boolean;
  @Input() isRequired?: boolean;
  @Input() initialIdx?: number;
  @Input() size?: InputSizes = "medium";
  @Input() statusIcon?: InputStatus;
  @Input() multiselect?: boolean;

  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  selected: string = "";
  didInteract: boolean = false;
  searchTerm?: string;

  constructor() {}

  hasInitialIdx() {
    return typeof this.initialIdx === "number";
  }

  getInitialIdx() {
    return this.initialIdx || 0;
  }

  onChange(val: string) {
    this.didInteract = true;
    this.selected = val || "";
    this.change.emit(val);
    this.selectedChange.emit(val);
  }

  setSelected(val: string) {
    this.selected = val;
  }

  onSearch(e: { term: string; items: any[] }) {
    this.searchTerm = e.term;
  }

  clearSelected() {
    this.onChange("");
  }
}
