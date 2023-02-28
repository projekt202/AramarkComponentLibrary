import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSliderComponent } from './quote-slider.component';
import { QuoteSliderComponentType } from './quote-slider.component.model';

describe('QuoteSliderComponent', () => {
  let component: QuoteSliderComponent;
  let fixture: ComponentFixture<QuoteSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds the correct CSS classes depending on type', () => {
    [
      {
        type: 'dark',
        class: 'type--dark',
      },
      {
        type: 'light',
        class: 'type--light',
      },
    ].forEach((config) => {
      component.type = config.type as QuoteSliderComponentType;
      expect(component.getClasses()).toContain(config.class);
    });
  });
});
