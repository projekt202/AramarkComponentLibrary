import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie";

import { PlatformService } from "../platform/platform.service";
import { BrowserService } from "../browser/browser.service";

@Injectable({
  providedIn: "root",
})
export class FormsService {
  private hiddenFields: { key: string; val: string }[];

  constructor(
    private browserService: BrowserService,
    private cookieService: CookieService,
    private platformService: PlatformService
  ) {
    // Dynamic campaign hidden fields
    this.hiddenFields = [
      { key: "Consent_Type", val: "" },
      { key: "Email_Opt_In", val: "" },
      { key: "Referrer", val: "" },
      { key: "Originating_Page", val: "" },
      { key: "Conversion_Page", val: "" },
      { key: "Products", val: "" },
      { key: "UTM_Campaign", val: "" },
      { key: "UTM_Medium", val: "" },
      { key: "UTM_Source", val: "" },
      { key: "UTM_Content", val: "" },
      { key: "UTM_Term", val: "" },
      { key: "GCLID", val: "" },
      { key: "Marketing_Campaign_ID", val: "" },
    ];

    if (this.platformService.isBrowser()) {
      const _window = this.browserService.getWindow();
      if (!_window) return;
      const urlSearchParams = new URLSearchParams(_window.location.search);
      this.hiddenFields.forEach((field) => {
        if (field.key === "Conversion_Page") {
          field.val = _window.location.pathname;
          return;
        }

        if (field.key === "Marketing_Campaign_ID") {
          const valURLParams = urlSearchParams.get("utm_sfcid");
          const valCookies = this.cookieService.get("utm_sfcid");
          if (valURLParams || valCookies) {
            field.val = valURLParams || valCookies || "";
          } else {
            const referrer = this.cookieService.get("Referrer");
            switch (referrer) {
              case "Google":
              case "Bing":
              case "Yahoo":
                field.val = "MCID-008019";
                break;
              case "Facebook":
                field.val = "MCID-008020";
                break;
              case "LinkedIn":
                field.val = "MCID-008021";
                break;
              case "aramark.com":
                field.val = "MCID-007441";
                break;
              case "ameripride.com":
                field.val = "MCID-007988";
                break;
              default:
                field.val = "MCID-008022";
                break;
            }
          }
          return;
        }

        // If found in URL query parameters
        const valURLParams = urlSearchParams.get(field.key.toLowerCase());
        if (valURLParams) {
          field.val = valURLParams;
        }

        // If found in cookies
        const valCookies = this.cookieService.get(field.key);
        if (valCookies) {
          field.val = valCookies;
        }
      });
    }
  }

  getHiddenFields(consent: boolean) {
    if (this.platformService.isBrowser()) {
      const consentField = this.hiddenFields.find(
        (field) => field.key === "Consent_Type"
      );
      const emailOptInField = this.hiddenFields.find(
        (field) => field.key === "Email_Opt_In"
      );
      if (consentField) {
        consentField.val = consent ? "Express" : "No Consent";
      }
      if (emailOptInField) {
        emailOptInField.val = consent ? "TRUE" : "";
      }
    }
    return this.hiddenFields;
  }
}
