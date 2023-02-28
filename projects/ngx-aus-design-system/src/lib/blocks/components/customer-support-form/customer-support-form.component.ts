import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { GoogleTagManagerService } from "angular-google-tag-manager";

import { CaptchaResponse } from "../../../shared/components/captcha/captcha.model";
import { BrowserService } from "../../../shared/services/browser/browser.service";
import { PlatformService } from "../../../shared/services/platform/platform.service";

@Component({
  selector: "aus-customer-support-form",
  templateUrl: "./customer-support-form.component.html",
  styleUrls: ["./customer-support-form.component.scss"],
})
export class CustomerSupportFormComponent {
  constructor(
    private hc: HttpClient,
    private bs: BrowserService,
    private gtms: GoogleTagManagerService,
    private ps: PlatformService
  ) {}

  firstName: string = "";
  lastName: string = "";
  businessName: string = "";
  streetAddress: string = "";
  city: string = "";
  state: string = "";
  zipCode: string = "";
  workPhone: string = "";
  workEmail: string = "";
  customerId: string = "";
  comments: string = "";

  isCaptchaValid: boolean = false;
  didStart: boolean = false;
  didScrollIntoView: boolean = false;

  onSubmit() {
    const url = new URL(
      "https://api.aramarkuniform.com/wp-json/email/v1/submit/"
    );
    url.searchParams.append("firstName", this.firstName);
    url.searchParams.append("lastName", this.lastName);
    url.searchParams.append("businessName", this.businessName);
    url.searchParams.append("streetAddress", this.streetAddress);
    url.searchParams.append("city", this.city);
    url.searchParams.append("state", this.state);
    url.searchParams.append("zipCode", this.zipCode);
    url.searchParams.append("workPhone", this.workPhone);
    url.searchParams.append("workEmail", this.workEmail);
    url.searchParams.append("customerID", this.customerId);
    url.searchParams.append("comments", this.comments);
    this.hc.get(url.toString()).subscribe((res: any) => {
      const _window = this.bs.getWindow();
      if (res.code === 200 && _window) {
        this.gtms.pushTag({
          event: "successful form submit",
          "form type": "Customer Support",
        });
        _window.location.href = "https://www.aramarkuniform.com/thank-you";
      }
    });
  }

  getIsValid() {
    return (
      !!this.firstName &&
      !!this.lastName &&
      !!this.businessName &&
      !!this.streetAddress &&
      !!this.city &&
      !!this.state &&
      !!this.zipCode &&
      /\d*/.test(this.zipCode) &&
      !!this.workPhone &&
      /([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})/.test(this.workPhone) &&
      !!this.workEmail &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.workEmail)
    );
  }

  onDropdownChange(val: string) {
    this.state = val;
  }

  onInputChange(
    val: string,
    key:
      | "firstName"
      | "lastName"
      | "businessName"
      | "streetAddress"
      | "city"
      | "zipCode"
      | "workPhone"
      | "workEmail"
      | "customerId"
      | "comments"
  ) {
    this[key] = val;
    if (!this.didStart) {
      this.didStart = true;
      this.gtms.pushTag({
        event: "start form",
        "form type": "Customer Support",
      });
    }
  }

  onCaptchaResponse(e: CaptchaResponse) {
    this.isCaptchaValid = e.ok;
  }

  onIntersection({ visible }: any) {
    if (this.ps.isBrowser() && visible && !this.didScrollIntoView) {
      this.didScrollIntoView = true;
      this.gtms.pushTag({
        event: "view form",
        "form type": "Customer Support",
      });
    }
  }
}
