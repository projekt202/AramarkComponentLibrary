import { Injectable } from '@angular/core';
import { BrowserService } from '../browser/browser.service';

import { ResponsiveImages } from './media.model';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  window?: Window | null;

  constructor(private bs: BrowserService) {
    this.window = this.bs.getWindow();
  }

  getResponsiveImage(images: ResponsiveImages): string {
    const windowWidth = this.window?.innerWidth || 0;
    if (windowWidth >= 2560 && images['4k_background']) {
      return images['4k_background'];
    }
    if (windowWidth >= 1920 && images.hd_background) {
      return images.hd_background;
    }
    if (windowWidth >= 1366 && images.large_desktop_background) {
      return images.large_desktop_background;
    }
    if (windowWidth >= 1024 && images.desktop_background) {
      return images.desktop_background;
    }
    if (windowWidth >= 768 && images.tablet_background) {
      return images.tablet_background;
    }
    if (windowWidth >= 425 && images.mobile_background) {
      return images.mobile_background;
    }
    return images.default_background;
  }
}
