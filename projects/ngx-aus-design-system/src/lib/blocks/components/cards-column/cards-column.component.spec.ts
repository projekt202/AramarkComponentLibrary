import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsColumnComponent } from './cards-column.component';
import { CardsColumnComponentVariants } from './cards-column.model';

describe('CardsColumnComponent', () => {
  let component: CardsColumnComponent;
  let fixture: ComponentFixture<CardsColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsColumnComponent);
    component = fixture.componentInstance;
    component.data = [
      {
        icon: 'package',
        text: 'test',
        title: 'test',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct card variant', () => {
    [
      { variant: 'black', card: 'white' },
      { variant: 'white', card: 'black' },
    ].forEach((config) => {
      component.variant = config.variant as CardsColumnComponentVariants;
      fixture.detectChanges();
      const variant = component.getCardsVariant();
      expect(variant).toBe(`left-aligned-${config.card}`);
    });
  });
});
