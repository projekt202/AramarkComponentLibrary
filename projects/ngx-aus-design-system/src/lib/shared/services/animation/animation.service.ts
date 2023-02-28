import { Injectable } from '@angular/core';
import SplitType, { TargetElement } from 'split-type';
import gsap from 'gsap';

import { PlatformService } from '../platform/platform.service';
import { BrowserService } from '../browser/browser.service';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor(private ps: PlatformService, private bs: BrowserService) {}

  animTextLines(target: TargetElement, parent: string): void {
    if (this.ps.isBrowser()) {
      // Wait until fonts are loaded to avoid layout shifting
      const doc = this.bs.getDocument();
      doc.fonts.ready.then(() => {
        const parentElem = doc.querySelector(parent);
        parentElem?.classList.remove('anim-loading');
        const text = new SplitType(target, {
          types: 'lines',
        });
        gsap
          .timeline()
          .from(text.lines, {
            duration: 1,
            stagger: 0.25,
            rotateX: -90,
            rotateY: -10,
            opacity: 0,
            y: 50,
          })
          .then(() => {
            text.revert();
          });
      });
    }
  }
}
