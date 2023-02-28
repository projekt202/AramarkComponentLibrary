import { AfterViewInit, Component, Input } from "@angular/core";
import * as AOS from "aos";

import { PlatformService } from "../../services/platform/platform.service";
import { IconComponentNames } from "../icon/icon.model";

@Component({
  selector: "aus-statement-card",
  templateUrl: "./statement-card.component.html",
  styleUrls: ["./statement-card.component.scss"],
})
export class StatementCardComponent implements AfterViewInit {
  @Input() icon?: IconComponentNames;
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() anim?: {
    index?: number;
    name: string;
  };

  constructor(private ps: PlatformService) {}

  ngAfterViewInit(): void {
    if (this.ps.isBrowser()) {
      AOS.refresh();
    }
  }
}
