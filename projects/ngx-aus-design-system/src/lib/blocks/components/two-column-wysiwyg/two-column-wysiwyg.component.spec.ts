import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnWysiwygComponent } from './two-column-wysiwyg.component';

describe('TwoColumnWysiwygComponent', () => {
  let component: TwoColumnWysiwygComponent;
  let fixture: ComponentFixture<TwoColumnWysiwygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnWysiwygComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
