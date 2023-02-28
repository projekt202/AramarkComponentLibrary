import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CardComponentVariants } from './card.model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct icon variant and size', () => {
    [
      { variant: 'black', icon: { variant: 'black', size: 'large' } },
      { variant: 'white', icon: { variant: 'white', size: 'large' } },
    ].forEach((config) => {
      component.variant =
        `left-aligned-${config.variant}` as CardComponentVariants;
      fixture.detectChanges();
      expect(component.getIconSize()).toBe(config.icon.size);
      expect(component.getIconVariant()).toBe(config.icon.variant);
    });
  });
});
