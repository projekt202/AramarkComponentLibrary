import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SanitizePipe } from './sanitize.pipe';

describe('SanitizePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it('create an instance', inject(
    [DomSanitizer],
    (domSanitizer: DomSanitizer) => {
      let pipe = new SanitizePipe(domSanitizer);
      expect(pipe).toBeTruthy();
    }
  ));
});
