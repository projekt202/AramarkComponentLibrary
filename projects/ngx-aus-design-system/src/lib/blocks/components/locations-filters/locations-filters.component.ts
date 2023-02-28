import { Component, EventEmitter, Input, Output } from "@angular/core";

import { InputKeypressEvt } from "../../../shared/components/input/input.model";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { LocationsFiltersSearchParams } from "./locations-filters.model";

@Component({
  selector: "aus-locations-filters",
  templateUrl: "./locations-filters.component.html",
  styleUrls: ["./locations-filters.component.scss"],
})
export class LocationsFiltersComponent {
  @Input() title: string = "";
  @Input() map: boolean = true;

  @Output() onFind: EventEmitter<LocationsFiltersSearchParams> =
    new EventEmitter<LocationsFiltersSearchParams>();
  @Output() onCleanroom: EventEmitter<void> = new EventEmitter<void>();

  zip: string = "";
  city: string = "";
  state: string = "";
  href: string = "/find-a-location/";

  constructor(
    private platform: PlatformService,
    private browserService: BrowserService
  ) {
    if (this.platform.isBrowser() && this.map) {
      const _window = this.browserService.getWindow();
      if (_window) {
        if (_window.location.search) {
          const urlSearchParams = new URLSearchParams(_window.location.search);
          if (urlSearchParams) {
            if (urlSearchParams.get("cleanroom")) {
              const timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.onCleanroomClick();
              }, 500);
            } else {
              if (urlSearchParams.get("zip")) {
                this["zip"] = urlSearchParams.get("zip")!;
              } else {
                this["city"] = urlSearchParams.get("city")!;
                this["state"] = urlSearchParams.get("state")!;
              }
              const timeout = setTimeout(() => {
                clearTimeout(timeout);
                this.onFindClick();
              }, 500);
            }
          }
        }
      }
    }
  }

  onChange(val: string, name: "zip" | "city" | "state") {
    this[name] = val;
    if (name === "zip") {
      this["city"] = "";
      this["href"] = "/find-a-location/?zip=" + val;
    } else if (name === "city" || name === "state") {
      this["zip"] = "";
      this["href"] = "/find-a-location/?";
      if (this["city"]) {
        this["href"] += "city=" + this["city"] + "&";
      }
      if (this["state"]) {
        this["href"] += "state=" + this["state"];
      }
    }
  }

  onFindClick() {
    this.onFind.emit({ zip: this.zip, state: this.state, city: this.city });
  }

  onCleanroomClick() {
    this.onCleanroom.emit();
  }

  onSubmit(e: InputKeypressEvt) {
    if (e.key === "Enter") {
      if (this.map) {
        this.onFindClick();
      } else {
        const _window = this.browserService.getWindow();
        if (_window) {
          _window.location.href = this.href;
        }
      }
    }
  }
}
