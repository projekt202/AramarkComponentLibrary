import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";

import {
  LoadingData,
  TypographyComponentTags,
  TypographyComponentVariants,
  TypographyComponentWeights,
  TypographyPresets,
  TypographyPresetVariants,
} from "./typography.component.model";
import { BrowserService } from "../../services/browser/browser.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "aus-typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.scss"],
})
export class TypographyComponent implements AfterViewInit {
  @Input() text: string = "";
  @Input() for?: string;
  @Input() color?: string;
  @Input() weight?: TypographyComponentWeights;
  @Input() tag?: TypographyComponentTags;
  @Input() variant?: TypographyComponentVariants = "p";
  @Input() presetClassNames?: TypographyPresets[];
  @Input() presetVariant?: TypographyPresetVariants;
  @Input() disabled?: boolean;
  @Input() route?: string;
  @Input() href?: string;
  @Input() idName?: string;
  @Input() loading?: boolean = false;
  @Input() loadingData: LoadingData = {
    lines: 1,
  };
  textSanitized: SafeHtml = "";

  constructor(
    private hostElement: ElementRef,
    private bs: BrowserService,
    private domSanitizer: DomSanitizer
  ) {}

  ngAfterViewInit(): void {
    if (this.tag) {
      const _document = this.bs.getDocument();
      if (_document) {
        const parent = this.hostElement.nativeElement;
        const original = parent.querySelector(".typography");
        const final = _document.createElement(this.tag);
        final.innerHTML = original.innerHTML;
        [...original.attributes].forEach((attr) => {
          final.setAttribute(attr.nodeName, attr.nodeValue);
        });
        parent.replaceChild(final, original);
      }
    }
  }

  getCustomStyle() {
    return {
      ...(this.color && { color: this.color }),
      ...(this.weight && { fontWeight: this.weight }),
    };
  }

  getLinkClasses() {
    const classes: string[] = ["typography", "a"];
    if (this.variant === "a-accent") {
      classes.push("a-accent");
    }
    if (this.disabled) {
      classes.push("a-disabled");
    }
    return classes.join(" ");
  }

  ngOnChange() {
    this.textSanitized = this.sanitize(this.text);
  }

  sanitize(text: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(text);
  }
}
