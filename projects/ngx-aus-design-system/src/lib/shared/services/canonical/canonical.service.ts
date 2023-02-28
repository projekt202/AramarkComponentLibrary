import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private dom: Document) {}

  setCanonicalURL(url?: string) {
    const canURL = url === undefined ? this.dom.URL : url;
    // TODO: figure out why it's not returning the right protocol (https) instead of forcing it
    const finalURL = (
      canURL.endsWith('/') ? canURL.substring(0, canURL.length - 1) : canURL
    ).replace('http://', 'https://');
    const existing = this.dom.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', finalURL);
    } else {
      const link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', finalURL);
    }
  }
}
