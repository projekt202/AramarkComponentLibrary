import { Component, Input, OnDestroy } from "@angular/core";
import { BrowserService } from "../../../shared/services/browser/browser.service";

import {
  CardsRowComponentButton,
  CardsRowComponentData,
  CardsRowComponentVariants,
} from "./cards-row.model";

@Component({
  selector: "aus-cards-row",
  templateUrl: "./cards-row.component.html",
  styleUrls: ["./cards-row.component.scss"],
})
export class CardsRowComponent implements OnDestroy {
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() button?: CardsRowComponentButton;
  @Input() variant?: CardsRowComponentVariants = "black";
  @Input() data: CardsRowComponentData = [];

  isUnderThreshold: boolean = this.getIsUnderThreshold();

  window: Window | null;
  timeout?: ReturnType<typeof setTimeout>;

  constructor(private browserService: BrowserService) {
    this.window = this.browserService.getWindow();
    this.window?.addEventListener("resize", this.updateIsUnderThreshold);
  }

  ngOnDestroy(): void {
    this.window?.removeEventListener("resize", this.updateIsUnderThreshold);
  }

  getIsUnderThreshold() {
    return (this.window?.innerWidth || 0) < 1366;
  }

  updateIsUnderThreshold() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.isUnderThreshold = (this.window?.innerWidth || 0) < 1366;
      clearTimeout(this.timeout);
    }, 500);
  }
}
