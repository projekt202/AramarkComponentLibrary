import { AfterViewInit, Component, Input } from "@angular/core";
import { TransferState } from "@angular/platform-browser";
import { Apollo } from "apollo-angular";
import { CookieService } from "ngx-cookie";
import * as dayjs from "dayjs";

import { AlertBarCookies } from "./alert-bar.model";

@Component({
  selector: "aus-alert-bar",
  templateUrl: "./alert-bar.component.html",
  styleUrls: ["./alert-bar.component.scss"],
})
export class AlertBarComponent implements AfterViewInit {
  @Input() text: string = "";
  @Input() btn: string = "";

  isActive: boolean = false;
  didAccept: boolean = false;
  didLoadData: boolean = false;

  haveConsent() {
    return this.cookieService.get(AlertBarCookies.CONSENT);
  }

  constructor(
    private apollo: Apollo,
    private cookieService: CookieService,
    private state: TransferState
  ) {}

  ngAfterViewInit(): void {
    if (!this.haveConsent()) {
      this.isActive = true;
    }
  }

  setConsent() {
    this.cookieService.put(AlertBarCookies.CONSENT, "true", {
      expires: dayjs().add(12, "months").toDate(),
    });
  }

  accept() {
    this.didAccept = true;
    this.isActive = false;
    this.setConsent();
  }

  close() {
    this.isActive = false;
  }
}
