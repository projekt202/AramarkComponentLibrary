import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  constructor(@Inject(DOCUMENT) private _doc: Document) {}

  getDocument(): Document {
    return this._doc;
  }

  getWindow(): Window | null {
    return this._doc.defaultView;
  }
}
