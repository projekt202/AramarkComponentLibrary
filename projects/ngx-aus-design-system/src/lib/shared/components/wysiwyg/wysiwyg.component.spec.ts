import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanitizePipe } from '../../pipes/sanitize/sanitize.pipe';

import { WysiwygComponent } from './wysiwyg.component';

describe('WysiwygComponent', () => {
  let component: WysiwygComponent;
  let fixture: ComponentFixture<WysiwygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WysiwygComponent, SanitizePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(WysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
