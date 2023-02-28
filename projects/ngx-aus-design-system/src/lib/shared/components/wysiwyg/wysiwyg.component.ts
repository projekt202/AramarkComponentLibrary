import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

import { WysiwygBackgroundColors, WysiwygColumns } from "./wysiwyg.model";

@Component({
  selector: "aus-wysiwyg",
  templateUrl: "./wysiwyg.component.html",
  styleUrls: ["./wysiwyg.component.scss"],
})
export class WysiwygComponent implements AfterViewInit, OnChanges {
  @Input() bgColor?: WysiwygBackgroundColors = "white";
  @Input() fullwidth?: boolean = false;
  @Input() data: string = "";
  @Input() embedded?: boolean = false;
  @Input() cols?: WysiwygColumns;
  @Input() ariaHidden?: "true" | "false";
  @Input() isContent: boolean = false;

  constructor(private hostElement: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.ariaHidden) {
      this.setContentFocusable(this.ariaHidden === "false");
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const ariaHiddenChanges = changes?.["ariaHidden"];
    if (ariaHiddenChanges?.currentValue !== ariaHiddenChanges?.previousValue) {
      this.setContentFocusable(ariaHiddenChanges.currentValue === "false");
    }
  }

  setContentFocusable(isFocusable: boolean) {
    // Anchor tags are currently the only focusable elements that can be rendered in a WYSIWYG
    const links = this.hostElement.nativeElement.querySelectorAll("a");
    if (links && links.length > 0) {
      links.forEach?.((l: any) => {
        l.setAttribute("tabindex", isFocusable ? 0 : -1);
      });
    }
  }
}
