import {
  Component,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { MapInfoWindow, GoogleMap } from "@angular/google-maps";

import { ButtonConfig } from "../../../shared/components/button/button.component.model";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";
import { LocationMapItem, LocationMapVariant } from "./location-map.model";

@Component({
  selector: "aus-location-map",
  templateUrl: "./location-map.component.html",
  styleUrls: ["./location-map.component.scss"],
})
export class LocationMapComponent {
  @Input() variant: LocationMapVariant = "single";
  @Input() locations: LocationMapItem[] = [];
  @Input() isInitiallyOpen?: boolean;
  @Input() button?: ButtonConfig;

  @ViewChildren(MapInfoWindow) infoWindows?: QueryList<MapInfoWindow>;
  @ViewChild(GoogleMap) map?: GoogleMap;

  @ViewChildren("locationItem") locationItems?: QueryList<HTMLLIElement>;
  activeIdx: number = 0;

  isOpen = this.isInitiallyOpen;

  window: Window | null;

  geolocation: {
    lat: number;
    lng: number;
  } = {
    lat: 0,
    lng: 0,
  };

  defaultGeo = {
    lat: 39.373057,
    lng: -97.50632,
  };

  constructor(
    private browserService: BrowserService,
    private platform: PlatformService
  ) {
    this.window = this.browserService.getWindow();
    if (this.platform.isBrowser()) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.geolocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
      });
    }
  }

  onMapInit() {
    this.centerSinglePin();
  }

  getMap() {
    return this.map;
  }

  showAndFixSidebar() {
    this.isOpen = true;
    this.isInitiallyOpen = true;
  }

  getWindowWidth() {
    return this.window?.innerWidth || 0;
  }

  centerSinglePin() {
    if (this.variant === "single") {
      const width = this.getWindowWidth();
      const isMobile = width < 768;
      this.map?.panBy(isMobile ? 0 : -(width / 5), 0);
    }
  }

  closePopups() {
    this.infoWindows?.toArray().forEach((popup) => {
      popup.close();
    });
  }

  focusListItem(idx: number) {
    this.activeIdx = idx;
    const item = this.locationItems?.toArray()[idx] as unknown as {
      nativeElement: { scrollIntoView: ({}) => {} };
    };
    if (!item) return;
    item.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  centerLocation(idx: number) {
    this.closePopups();
    this.infoWindows?.toArray()[idx].open();
  }

  openInfo(idx: number) {
    if (this.variant === "single") return;
    this.activeIdx = idx;
    this.isOpen = true;
    this.centerLocation(idx);
    this.focusListItem(idx);
  }

  onClickMap() {
    if (!this.isInitiallyOpen) {
      this.isOpen = false;
    }
    this.closePopups();
  }
}
