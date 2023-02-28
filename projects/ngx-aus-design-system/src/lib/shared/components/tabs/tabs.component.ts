import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from "@angular/core";
import { BrowserService } from "../../services/browser/browser.service";

@Component({
  selector: "aus-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
})
export class TabsComponent implements AfterViewInit {
  @Input() categories: string[] = [];
  @Input() dropdownPlaceholder?: string;
  @Input() disabled?: boolean;
  @Input() valueIdx?: number;
  @Input() name?: string = "categories";
  @Output() onSelection = new EventEmitter<number>();

  @ViewChild("wrapper") wrapper?: { nativeElement: HTMLDivElement };
  @ViewChild("list") list?: { nativeElement: HTMLUListElement };
  @ViewChild("dropdown") dropdown?: { nativeElement: HTMLSelectElement };
  @ViewChild("placeholder") placeholder?: { nativeElement: HTMLSpanElement };

  activeIdx: number = -1;
  didInit: boolean = false;
  didFinishLayout: boolean = false;
  isOverflown: boolean = this.getControlVisibility();

  window: Window | null;

  constructor(
    private cdRef: ChangeDetectorRef,
    private browserService: BrowserService
  ) {
    this.window = this.browserService.getWindow();
  }

  ngAfterViewInit(): void {
    this.didInit = true;
    this.activeIdx = this.dropdownPlaceholder ? -1 : 0;
    this.isOverflown = this.getControlVisibility();
    this.window?.addEventListener("resize", () => {
      this.updateDropdownWidth();
      this.getControlVisibility();
    });
    const timeout = this.window?.setTimeout(() => {
      this.window?.dispatchEvent(new Event("resize"));
      this.didFinishLayout = true;
      this.cdRef.detectChanges();
      clearTimeout(timeout);
    }, 100);
    this.cdRef.detectChanges();
  }

  setActiveIdx(idx: number) {
    this.activeIdx = idx;
  }

  getControlVisibility() {
    if (this.getWindowWidth() < 768) {
      this.isOverflown = true;
      return true;
    }
    if (!this.list && !this.didInit) {
      this.isOverflown = true;
      return true;
    }
    if (this.list && this.wrapper) {
      const wrapperWidth = this.wrapper.nativeElement.offsetWidth;
      const listWidth = this.list.nativeElement.offsetWidth;
      const res = listWidth > wrapperWidth;
      this.isOverflown = res;
      return res;
    }
    return false;
  }

  getWindowWidth() {
    return this.window?.innerWidth || 0;
  }

  updateDropdownWidth() {
    const timeout = this.window?.setTimeout(() => {
      if (this.dropdown?.nativeElement && this.placeholder?.nativeElement) {
        this.dropdown.nativeElement.style.width =
          90 + this.placeholder.nativeElement.scrollWidth + "px";
      }
      clearTimeout(timeout);
    }, 50);
  }

  selectCategory(idx: number) {
    this.activeIdx = idx;
    this.onSelection.emit(idx);
  }

  onDropdownSelect(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    const selectedIdx = this.categories.findIndex((cat) => cat === val);
    this.selectCategory(selectedIdx);
    this.updateDropdownWidth();
  }

  ngOnChanges(): void {
    if (this.valueIdx) {
      this.setActiveIdx(this.valueIdx);
    }
  }
}
