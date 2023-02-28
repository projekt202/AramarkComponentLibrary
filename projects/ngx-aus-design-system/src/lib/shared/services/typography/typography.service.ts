import { ElementRef, Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TypographyService {
  constructor(private ds: DomSanitizer) {}

  setText(
    element: ElementRef<any>['nativeElement'],
    selector: string,
    value: string
  ) {
    const node = element.querySelector(selector);
    if (node) {
      node.innerHTML = this.ds.sanitize(SecurityContext.HTML, value);
    }
  }
}
